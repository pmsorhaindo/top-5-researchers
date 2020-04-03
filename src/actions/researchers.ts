import { Researcher } from 'components/TopFive/types';

export const SET_TOP_FIVE = 'RESEARCHERS/SET_TOP_FIVE'
export const CHANGE_RESEARCHER = 'RESEARCHERS/CHANGE_RESEARCHER'

interface SetTopFiveAction {
  type: typeof SET_TOP_FIVE;
  payload: Researcher[];
}

export const setTopFive = (researchers: Researcher[]): SetTopFiveAction => {
  return {
    type: SET_TOP_FIVE,
    payload: researchers,
  };
};

interface ChangeResearcherAction {
  type: typeof CHANGE_RESEARCHER;
  payload: string;
}

export const changeResearcher = (id: string): ChangeResearcherAction => {
  return {
    type: CHANGE_RESEARCHER,
    payload: id,
  };
};

export type ResearchersActions = SetTopFiveAction | ChangeResearcherAction;