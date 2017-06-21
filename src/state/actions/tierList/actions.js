

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

export function moveCardBetweenTiers(params) {
  return {
    type: "MOVE_CARD_BETWEEN_TIERS",
    payload: {
      params
    }
  }
}

export function moveCardWithinTier(params) {
  return {
    type: "MOVE_CARD_WITHIN_TIER",
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
