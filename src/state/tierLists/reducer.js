import _ from 'lodash';

export default function(state = {
  lists: []
}, action) {
  switch (action.type) {
    case "FETCH_TIER_LISTS_BY_LIST_TYPE_SUCCESS":
      return {
        ...state,
        lists: action.payload.tier_lists
      }
    default:
      return state;
  }
}
