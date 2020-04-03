import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import ResearcherStats from './ResearcherStats';
import { renderWithRedux, mockResearcherState } from 'testUtils';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  renderWithRedux(<ResearcherStats />);
  unmountComponentAtNode(div);
});

it('should render please select text when no researcher is selected', () => {
  const { getByText } = renderWithRedux(<ResearcherStats />, {
    initialState: {
      researchers: { researchers: {}, selectedResearcher: undefined },
    },
  });
  expect(getByText(/please select a researcher/i)).toBeInTheDocument();
});

it('should render a legend', () => {
  const { getByTestId } = renderWithRedux(<ResearcherStats />, {
    initialState: {
      researchers: mockResearcherState,
    },
  });
  expect(getByTestId('graph')).toBeInTheDocument();
});


it('should render a legend', () => {
  const { getByText } = renderWithRedux(<ResearcherStats />, {
    initialState: {
      researchers: mockResearcherState,
    },
  });
  expect(getByText(/Publications/i)).toBeInTheDocument();
  expect(getByText(/Citations/i)).toBeInTheDocument();
});
