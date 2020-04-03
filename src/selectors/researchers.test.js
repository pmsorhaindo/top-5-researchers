import {
  getSelectedResearcher,
  getHighestPublicationCount,
  getSortedResearchers,
  getHighestCitationCount,
  getSelectedPublications,
  getSelectedCitations,
} from './researchers';
import { mockResearcherState } from 'testUtils';

describe('researchers selectors', () => {
  let state = {};
  beforeEach(() => {
    state = {
      researchers: mockResearcherState,
    };
  });

  describe('getSortedResearchers', () => {
    it('updates selected researcher id', () => {
      const sortedResearchers = getSortedResearchers(state);
      expect(sortedResearchers[0].firstName).toEqual('John');
      expect(sortedResearchers[0].lastName).toEqual('Doe');
      for (let i = 0; i < sortedResearchers.length - 1; i++) {
        expect(sortedResearchers[i].publications.reduce((a, b) => a + b, 0))
          .toBeGreaterThanOrEqual(sortedResearchers[i + 1].publications.reduce((a, b) => a + b, 0))
      }
    });
  });

  describe('getSelectedCitations', () => {
    it('returns the citations for the selected researcher', () => {
      const selectedCitations = getSelectedCitations('10005')(state);
      expect(selectedCitations).toEqual([245, 312, 276, 247, 305]);
    });
  });

  describe('getSelectedPublications', () => {
    it('returns the publications for the selected researcher', () => {
      const selectedPublications = getSelectedPublications('10005')(state);
      expect(selectedPublications).toEqual([97, 123, 67, 101, 105]);
    });
  });

  describe('getSelectedResearcher', () => {
    it('gets the selected researcher in the state', () => {
      const selected = getSelectedResearcher(state);
      expect(selected).toEqual(10007);
    });
  });

  describe('getHighestPublicationCount', () => {
    it('gets the highest publication total of the researchers', () => {
      const highest = getHighestPublicationCount(state);
      const sortedResearchers = getSortedResearchers(state);
      expect(highest).toEqual(123);
      for (let i = 0; i < sortedResearchers.length; i++) {
        expect(highest)
          .toBeGreaterThanOrEqual(Math.max(...sortedResearchers[i].publications));
      }
    });
  });

  describe('getHighestCitationCount', () => {
    it('gets the highest citation total of the researchers', () => {
      const highest = getHighestCitationCount(state);
      const sortedResearchers = getSortedResearchers(state);
      expect(highest).toEqual(319);
      for (let i = 0; i < sortedResearchers.length; i++) {
        expect(highest)
          .toBeGreaterThanOrEqual(Math.max(...sortedResearchers[i].publications));
      }
    });
  });
});