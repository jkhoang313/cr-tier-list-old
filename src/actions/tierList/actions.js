// import { fetchFromApi } from '../../helpers/api';

export function sortCardsRemaining(sort) {
  return {
    type: "SORT_CARDS_REMAINING",
    payload: sort
  }
}
