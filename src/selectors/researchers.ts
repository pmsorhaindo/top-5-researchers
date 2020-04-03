import { createSelector } from 'reselect';
import { AppState } from 'reducers';

export const getSortedResearchers =
  createSelector(
    (state: AppState) => state.researchers.researchers,
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

export const getSelectedResearcher = (state: AppState) => state.researchers.selectedResearcher;
export const getHighestPublicationCount = (state: AppState) => Math.max(...(Object.keys(state.researchers.researchers).map((id) => {
  return Math.max(...state.researchers.researchers[id].publications);
})));
export const getHighestCitationCount = (state: AppState) => Math.max(...(Object.keys(state.researchers.researchers).map((id) => {
  return Math.max(...state.researchers.researchers[id].citations);
})));
export const getSelectedPublications = (selectedResearcher?: string) =>
  (state: AppState) =>
    selectedResearcher ? state.researchers.researchers[selectedResearcher].publications : undefined;
export const getSelectedCitations = (selectedResearcher?: string) =>
  (state: AppState) =>
    selectedResearcher ? state.researchers.researchers[selectedResearcher].citations : undefined;