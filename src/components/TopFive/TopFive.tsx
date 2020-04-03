import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeResearcher } from 'actions/researchers';
import { getSortedResearchers } from 'selectors/researchers';
import Researcher from './Researcher';
import { Researcher as ResearcherType } from 'types';
import './TopFive.css';

function TopFive() {
  const dispatch = useDispatch();
  const data = useSelector(getSortedResearchers);

  if (data.length === 0) return <div className="NoResults">No Results.</div>

  const changeSelected = (id: string) => {
    dispatch(changeResearcher(id));
  };

  return (
    <div className="TopFive">
      {data.map((researcher: ResearcherType) => (
        <Researcher
          onClick={() => changeSelected(researcher.id)}
          key={researcher.id}
          {...researcher}
        />
      ))}
    </div>
  );
}

export default TopFive;
