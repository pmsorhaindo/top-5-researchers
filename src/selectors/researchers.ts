import { createSelector } from 'reselect';
import { AppState } from 'reducers';

const getResearchers = (state: AppState) => state.researchers.researchers;

export const getSelectedResearcher = (state: AppState) => state.researchers.selectedResearcher;

export const getSortedResearchers =
  createSelector(
    getResearchers,
    (researchers) => Object.keys(researchers).map((id) => {
      return {
        ...researchers[id],
      }
    }).sort((a, b) => {
      const aPublications = a.publications
        .slice(Math.max(a.publications.length - 5, 1))
        .reduce((acc, val) => acc + val)
      const bPublications = b.publications
        .slice(Math.max(b.publications.length - 5, 1))
        .reduce((acc, val) => acc + val)
      if (aPublications > bPublications) {
        return -1
      }
      if (aPublications < bPublications) {
        return 1
      }
      return 0;
    })
  );

export const getHighestPublicationCount = createSelector(
  getResearchers,
  (researchers) =>
    Math.max(...(Object.keys(researchers).map((id) => {
      return Math.max(...researchers[id].publications);
    })))
);

export const getHighestCitationCount = createSelector(
  getResearchers,
  (researchers) => Math.max(...(Object.keys(researchers).map((id) => {
    return Math.max(...researchers[id].citations);
  })))
);

export const getSelectedPublications = (selectedResearcher?: string) => createSelector(
  getResearchers,
  (researchers) =>
    selectedResearcher ? researchers[selectedResearcher].publications : undefined,
);

export const getSelectedCitations = (selectedResearcher?: string) => createSelector(
  getResearchers,
  (researchers) =>
    selectedResearcher ? researchers[selectedResearcher].citations : undefined,
);