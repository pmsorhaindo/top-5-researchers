/// <reference types="react-vis-types" />
import React from 'react';
import { useSelector } from 'react-redux';
import '../../../node_modules/react-vis/dist/style.css';
import {
  DiscreteColorLegend,
  XYPlot,
  XAxis,
  YAxis,
  LineSeries
} from 'react-vis';

import './ResearcherStats.css';
import {
  getHighestCitationCount,
  getHighestPublicationCount,
  getSelectedCitations,
  getSelectedPublications,
  getSelectedResearcher,
} from 'selectors/researchers';

interface DataPoint {
  x: number;
  y: number;
};

function ResearcherStats() {
  const selectedResearcher = useSelector(getSelectedResearcher);
  const publications = useSelector(getSelectedPublications(selectedResearcher));
  const citations = useSelector(getSelectedCitations(selectedResearcher));
  const highestPublication = useSelector(getHighestPublicationCount);
  const highestCitation = useSelector(getHighestCitationCount);

  const yMax = Math.max(highestCitation, highestPublication) + 10;


  if (publications === undefined || citations === undefined) return (<div className="ResearcherStats ResearcherStats--empty">
    Please select a researcher.
  </div>);

  const currentYear = new Date().getFullYear();
  const years = Array.from(Array(5).keys()).reverse().map(i => currentYear - i);

  const publicationsSeries: DataPoint[] = publications.map((_: number, i: number) => ({
    y: publications[i],
    x: years[i],
  }));

  const citationsSeries: DataPoint[] = citations.map((_: number, i: number) => ({
    y: citations[i],
    x: years[i],
  }));

  const legend = [
    'Publications',
    'Citations',
  ];

  return (
    <div data-testid="graph" className="ResearcherStats">
      <XYPlot yDomain={[0, yMax]} height={550} width={450} margin={{ right: 15 }}>
        <XAxis tickValues={years} tickFormat={(t) => t} />
        <YAxis />
        <LineSeries data={publicationsSeries} />
        <LineSeries data={citationsSeries} />
        <DiscreteColorLegend orientation="horizontal" width={210} items={legend} />
      </XYPlot>
    </div>
  );
}

export default ResearcherStats;
