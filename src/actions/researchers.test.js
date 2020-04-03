import { CHANGE_RESEARCHER, SET_TOP_FIVE, changeResearcher, setTopFive } from './researchers';

describe('researcher actions', () => {
  it('should create an action to change the selected researcher', () => {
    const expectedAction = {
      type: CHANGE_RESEARCHER,
      payload: 'id123',
    };
    expect(changeResearcher('id123')).toEqual(expectedAction);
  });

  it('should create an action to set the top five researchers', () => {
    const expectedAction = {
      type: SET_TOP_FIVE,
      payload: [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' }
      ]
    };
    expect(setTopFive([
      { id: '1' },
      { id: '2' },
      { id: '3' },
      { id: '4' },
      { id: '5' }
    ])).toEqual(expectedAction);
  });
});
