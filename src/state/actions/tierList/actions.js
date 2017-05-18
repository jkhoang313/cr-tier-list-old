// import { fetchFromApi } from '../../helpers/api';

export function addTier() {
  return {
    type: "ADD_TIER"
  }
}

export function addCardToTier(params) {
  return {
    type: "ADD_CARD_TO_TIER",
    payload: {
      params
    }
  }
}
