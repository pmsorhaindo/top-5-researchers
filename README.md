# Top 5 Researchers

## Installation
Ensure you are running node `v8.12.0` or higher and have [yarn](https://yarnpkg.com/) installed.

Then run: `yarn && yarn start`

Tests can be run via `yarn test`

## Layout

The code has been split up into the following folders:
  - components (holds the react components and is further split into TopFive and ResearcherStats) 
  - actions (where the action creators live)
  - reducers (reducers where the next app state is created)
  - selectors (grab specific data from state, used in combination with `react-redux`'s `useSelector` hook)
  - api (A small express app used to mock api calls, a node server was used to mock the API so with further development things like loading states could be implemented and tested by throttling the network with a browser's developer tools)

## Assumptions

Assumptions about the API response:

- It will return an empty array when there are no results available.
- All properties on the researcher object are sent through for each user.


Assumptions about graphing:
  - The publications should be graphed as totals per year and not a cumulative total.