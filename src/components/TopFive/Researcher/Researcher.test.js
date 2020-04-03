import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Researcher from './Researcher';
import { renderWithRedux } from 'testUtils';
import { initialState } from 'reducers/researchers';
import '@testing-library/jest-dom/extend-expect';

afterEach(() => {
  jest.clearAllMocks();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  renderWithRedux(<Researcher />);
  unmountComponentAtNode(div);
});

it('should render a default avatar', () => {
  const { getAllByRole } = renderWithRedux(<Researcher />, {
    initialState: {
      researchers: { ...initialState },
    },
  });
  expect(getAllByRole('img').length).toEqual(1);
});

it('should render the provided first name and last name', () => {
  const { getByText } = renderWithRedux(<Researcher firstName="John" lastName="Doe" />, {
    initialState: {
      researchers: { ...initialState },
    },
  });
  expect(getByText(/john doe/i)).toBeInTheDocument();
});

it('should render the total output and total citations', () => {
  const { getByText } = renderWithRedux(<Researcher publications={[1, 2, 3, 4, 5]} citations={[9, 0, 0, 0, 0]} />, {
    initialState: {
      researchers: { ...initialState },
    },
  });
  expect(getByText(/Output 15/i)).toBeInTheDocument();
  expect(getByText(/Citations 9/i)).toBeInTheDocument();
});