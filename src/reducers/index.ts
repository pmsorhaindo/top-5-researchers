import { combineReducers } from 'redux';
import researchersReducer, { ResearcherState } from './researchers';

export interface AppState {
  researchers: ResearcherState;
};

export default combineReducers({
  researchers: researchersReducer
});

