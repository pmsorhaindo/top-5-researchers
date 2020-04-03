import React from 'react';
import { renderWithRedux } from 'testUtils';

import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const { getByText } = renderWithRedux(<App />);
    const headerElement = getByText(/prominent researchers/i);
    expect(headerElement).toBeInTheDocument();
  });


  it('fetches data on load', () => {
    const mockSuccessResponse = [
      {
        "id": 10005,
        "firstName": "John",
        "lastName": "Doe",
        "affiliation": "California Institute of Technology",
        "publications": [97, 123, 67, 101, 105],
        "citations": [245, 312, 276, 247, 305]
      },
      {
        "id": 10007,
        "firstName": "Joe",
        "lastName": "Bloggs",
        "affiliation": "Harvard University",
        "publications": [87, 113, 57, 91, 95],
        "citations": [217, 319, 211, 206, 275]
      }];
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    renderWithRedux(<App />);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/topfive');
  })
})
