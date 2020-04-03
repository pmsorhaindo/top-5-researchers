import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import TopFive from './TopFive';
import { renderWithRedux, mockResearcherState } from 'testUtils';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  renderWithRedux(<TopFive />);
  unmountComponentAtNode(div);
});

it('renders no elements when empty', () => {
  const { getByText } = renderWithRedux(<TopFive />, {
    initialState: {
      researchers: { researchers: {}, selectedResearcher: undefined },
    },
  });
  expect(getByText(/no results/i)).toBeInTheDocument();
});


it('should render five researcher components', () => {
  const { getAllByRole } = renderWithRedux(<TopFive />, {
    initialState: {
      researchers: mockResearcherState,
    },
  });
  expect(getAllByRole('img').length).toEqual(5);
});
