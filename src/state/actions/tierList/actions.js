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

export function removeCardFromTier(params) {
  return {
    type: "REMOVE_CARD_FROM_TIER",
    payload: {
      params
    }
  }
}

export function updateTierList(params) {
  return {
    type: "UPDATE_TIER_LIST",
    payload: params
  }
}

export function updateTier(params) {
  return {
    type: "UPDATE_TIER",
    payload: params
  }
}

export function handleHideUsedCardsToggle() {
  return {
    type: "SET_USED_CARDS_HIDDEN"
  }
}
