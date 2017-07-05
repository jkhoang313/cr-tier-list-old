import qs from 'qs';

import callApi from '../../api';

export function fetchTierListsByListType(list_type) {
  const requestInfo = {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }
  return callApi(`/api/tier_lists/?` + qs.stringify({list_type: list_type}), "FETCH_TIER_LISTS_BY_LIST_TYPE", requestInfo)
}
