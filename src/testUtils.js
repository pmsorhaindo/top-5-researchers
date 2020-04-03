import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from 'reducers';

export function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {},
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

export const mockResearcherState = {
  researchers: {
    '10005': {
      id: 10005,
      firstName: 'John',
      lastName: 'Doe',
      affiliation: 'California Institute of Technology',
      publications: [
        97,
        123,
        67,
        101,
        105
      ],
      citations: [
        245,
        312,
        276,
        247,
        305
      ]
    },
    '10007': {
      id: 10007,
      firstName: 'Joe',
      lastName: 'Bloggs',
      affiliation: 'Harvard University',
      publications: [
        87,
        113,
        57,
        91,
        95
      ],
      citations: [
        217,
        319,
        211,
        206,
        275
      ]
    },
    '10012': {
      id: 10012,
      firstName: 'Tom',
      lastName: 'Smith',
      affiliation: 'Stanford University',
      publications: [
        67,
        93,
        52,
        76,
        80
      ],
      citations: [
        187,
        296,
        187,
        171,
        251
      ]
    },
    '10023': {
      id: 10023,
      firstName: 'Harry',
      lastName: 'Stone',
      affiliation: 'University of Oxford',
      publications: [
        62,
        88,
        47,
        71,
        75
      ],
      citations: [
        181,
        291,
        179,
        150,
        231
      ]
    },
    '10035': {
      id: 10035,
      firstName: 'Jane',
      lastName: 'Doe',
      affiliation: 'Massachusetts Institute of Technology',
      publications: [
        77,
        103,
        47,
        81,
        85
      ],
      citations: [
        199,
        301,
        198,
        176,
        252
      ]
    }
  },
  selectedResearcher: 10007
};
