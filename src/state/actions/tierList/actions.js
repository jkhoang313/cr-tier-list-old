import callApi from '../../api';

export function fetchTierList(tierId) {
  const requestInfo = {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }
  return callApi(`/api/tier_lists/${tierId}`, "FETCH_TIER_LIST", requestInfo)
}

export function addCardToTier(params) {
  const { tierId, tierIndex, cardName, position } = params;

  const requestInfo = {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      update_card_position: {
        tier_index: tierIndex,
        card_name: cardName,
        position
      }
    }),
  }
  return callApi(`/api/tier_lists/${tierId}`, "ADD_CARD_TO_TIER", requestInfo, params)
}

export function removeCardFromTier(params) {
  const { tierId, cardName } = params;

  const requestInfo = {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      remove_card: {
        card_name: cardName
      }
    }),
  }
  return callApi(`/api/tier_lists/${tierId}`, "REMOVE_CARD_FROM_TIER", requestInfo, params)
}

export function moveCardBetweenTiers(params) {
  const { tierId, tierIndex, cardName, position } = params;

  const requestInfo = {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      update_card_position: {
        tier_index: tierIndex,
        card_name: cardName,
        position
      }
    }),
  }
  return callApi(`/api/tier_lists/${tierId}`, "MOVE_CARD_BETWEEN_TIERS", requestInfo, params)
}





export function addTier(params) {
  return {
    type: "ADD_TIER", payload: params
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
