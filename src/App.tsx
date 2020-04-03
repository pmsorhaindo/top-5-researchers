import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTopFive } from 'actions/researchers';
import TopFive from 'components/TopFive';
import ResearcherStats from 'components/ResearcherStats';
import { Researcher } from 'types';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const result: Researcher[] = await fetch(
        'http://localhost:3001/topfive',
      ).then((data) => {
        return data.json();
      }).catch(() => {
        console.error('Error connecting to server');
        return [];
      });
      dispatch(setTopFive(result));
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <h1 className="App__heading">Prominent Researchers</h1>
      <div className="App__body">
        <TopFive />
        <ResearcherStats />
      </div>
    </div>
  );
}

export default App;
