// @flow

import RequestSearch from './RequestSearch';
import type { SearchRequest, SearchRequestsPage } from '../types';

jest.mock('lodash/debounce');
const debounce: JestMockFn = (require('lodash/debounce'): any);

jest.mock('../dao/search-requests');
const searchRequests: JestMockFn = (require('../dao/search-requests'): any).default;

let requestSearch;

export const MOCK_REQUEST: SearchRequest = {
  id: '17-000000001',
  service: {
    name: 'Cosmic Intervention',
  },
  description: 'I think that Thanos is here',
  status: 'open',
  address: 'City Hall Plaza, Boston, MA 02131',
  location: {
    lat: 4,
    lng: 5,
  },
  updatedAt: 1490804343,
  updatedAtRelativeString: '4 minutes ago',
  mediaUrl: null,
};

const MOCK_SEARCH_RESULTS_PAGE = {
  requests: [MOCK_REQUEST],
  query: '',
};

beforeEach(() => {
  requestSearch = new RequestSearch();
  debounce.mockImplementation((fn) => fn);
});

describe('update', () => {
  it('sets the results', () => {
    requestSearch.updateRequestSearchResults(MOCK_SEARCH_RESULTS_PAGE);
    expect(requestSearch.results[0]).toEqual(MOCK_REQUEST);
  });

  it('merges old results in', () => {
    requestSearch.updateRequestSearchResults(MOCK_SEARCH_RESULTS_PAGE);
    requestSearch.updateRequestSearchResults({ ...MOCK_SEARCH_RESULTS_PAGE,
      requests: [{
        ...MOCK_REQUEST,
        id: 'new-id',
        updatedAt: MOCK_REQUEST.updatedAt + 1,
      }] });

    expect(requestSearch.results[0].id).toEqual('new-id');
    expect(requestSearch.results[1]).toEqual(MOCK_REQUEST);
  });

  it('re-uses existing IDs', () => {
    requestSearch.updateRequestSearchResults(MOCK_SEARCH_RESULTS_PAGE);
    requestSearch.updateRequestSearchResults({ ...MOCK_SEARCH_RESULTS_PAGE, requests: [{ ...MOCK_REQUEST }] });

    expect(requestSearch.results[0]).toEqual(MOCK_REQUEST);
    expect(requestSearch.results.length).toEqual(1);
  });

  it('clears when the query changes', () => {
    requestSearch.updateRequestSearchResults(MOCK_SEARCH_RESULTS_PAGE);
    requestSearch.updateRequestSearchResults({ ...MOCK_SEARCH_RESULTS_PAGE,
      requests: [{
        ...MOCK_REQUEST,
        id: 'new-id',
        updatedAt: MOCK_REQUEST.updatedAt + 1,
      }],
      query: 'new search' });

    expect(requestSearch.results[0].id).toEqual('new-id');
    expect(requestSearch.results.length).toEqual(1);
  });
});

describe('results', () => {
  it('filters to bounds', () => {
    requestSearch.updateRequestSearchResults(MOCK_SEARCH_RESULTS_PAGE);
    requestSearch.mapBounds = ({
      contains: () => false,
    }: any);

    expect(requestSearch.results).toEqual([]);
  });
});

describe('search', () => {
  let resolveSearch: (page: SearchRequestsPage) => void;
  let loopbackGraphql;

  beforeEach(() => {
    searchRequests.mockReturnValue(new Promise((resolve) => {
      resolveSearch = resolve;
    }));

    loopbackGraphql = jest.fn();
    requestSearch.start(loopbackGraphql);
  });

  afterEach(() => {
    requestSearch.stop();
  });

  it('doesn’t search without location', () => {
    requestSearch.query = 'Mewnir';
    expect(searchRequests).not.toHaveBeenCalled();
  });

  it('searches for location', () => {
    requestSearch.mapCenter = { lat: 1, lng: 1 };
    requestSearch.radiusKm = 1;

    expect(searchRequests).toHaveBeenCalledWith(loopbackGraphql, '', { lat: 1, lng: 1 }, 1);
  });

  it('searches with a query', () => {
    requestSearch.query = 'Mewnir';
    requestSearch.mapCenter = { lat: 1, lng: 1 };
    requestSearch.radiusKm = 1;

    expect(searchRequests).toHaveBeenCalledWith(loopbackGraphql, 'Mewnir', { lat: 1, lng: 1 }, 1);
  });

  it('updates with the response', async () => {
    requestSearch.mapCenter = { lat: 1, lng: 1 };
    requestSearch.radiusKm = 1;

    resolveSearch(MOCK_SEARCH_RESULTS_PAGE);

    await Promise.resolve();

    expect(requestSearch.results[0]).toEqual(MOCK_REQUEST);
  });
});
