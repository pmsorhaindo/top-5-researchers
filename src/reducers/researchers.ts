import { CHANGE_RESEARCHER, SET_TOP_FIVE, ResearchersActions } from 'actions/researchers';
import { Researcher } from 'components/TopFive/types';

export interface Researchers {
  [id: string]: Researcher;
}

export interface ResearcherState {
  researchers: Researchers;
  selectedResearcher?: string;
}

export const initialState: ResearcherState = {
  researchers: {},
  selectedResearcher: undefined,
};

export default (state = initialState, action: ResearchersActions): ResearcherState => {
  switch (action.type) {
    case SET_TOP_FIVE:
      return {
        ...state,
        researchers: action.payload.reduce((acc, { id, ...rest }) => {
          return {
            ...acc,
            [id]: {
              id,
              ...rest,
            },
          };
        }, {}),
      }
    case CHANGE_RESEARCHER:
      return {
        ...state,
        selectedResearcher: action.payload,
      }
    default:
      return state
  }
}