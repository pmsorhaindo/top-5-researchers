import researchersReducer, { initialState } from './researchers';
import { changeResearcher, setTopFive } from 'actions/researchers';

describe('researchers reducer', () => {
  let state = initialState;
  beforeEach(() => {
    state = initialState;
  });

  describe('change researcher', () => {
    it('updates selected researcher id', () => {
      const action = changeResearcher('1234');
      const newState = researchersReducer(state, action);
      expect(newState.selectedResearcher).toEqual('1234');
    });
  });

  describe('setTopFive', () => {
    it('updates the researchers state to the received researchers', () => {
      const topFiveData = [
        { id: 12, firstName: 'Eric' },
        { id: 13, firstName: 'Bob' },
        { id: 14, firstName: 'Sally' },
        { id: 15, firstName: 'Matti' },
        { id: 16, firstName: 'Eva' }
      ];
      const action = setTopFive(topFiveData);
      const newState = researchersReducer(
        {
          ...initialState,
        },
        action,
      );
      expect(newState.researchers).toEqual({
        12: { id: 12, firstName: 'Eric' },
        13: { id: 13, firstName: 'Bob' },
        14: { id: 14, firstName: 'Sally' },
        15: { id: 15, firstName: 'Matti' },
        16: { id: 16, firstName: 'Eva' },
      });
    });
  });
});