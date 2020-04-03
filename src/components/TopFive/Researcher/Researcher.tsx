import React from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import { AppState } from 'reducers';
import { Researcher as ResearcherType } from '../types';
import './Researcher.css';

type Props = ResearcherType & { onClick: () => void }

function Researcher(props: Props) {
  const {
    id,
    firstName,
    lastName,
    affiliation,
    publications = [],
    citations = [],
    onClick,
  } = props;
  const selectedResearcherId = useSelector((state: AppState) => state.researchers.selectedResearcher)
  const output = publications.reduce((acc, val) => acc + val, 0);
  const totalCitations = citations.reduce((acc, val) => acc + val, 0);
  return (
    <div
      className={cx('Researcher', {
        'Researcher--selected': selectedResearcherId === id,
      })}
      onClick={onClick}
    >
      <img className="Researcher__avatar" alt="Researchers face" src="avatars/avatar.svg"></img>
      <div className="Researcher__details">
        <p className="Researcher__name">{`${firstName} ${lastName}`}</p>
        <p className="Researcher__institution">{affiliation}</p>
        <p className="Researcher__stats">{`Output ${output} · Citations ${totalCitations}`}</p>
      </div>
    </div>
  );
}

export default Researcher;
