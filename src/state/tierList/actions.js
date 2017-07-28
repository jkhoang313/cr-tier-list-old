import callApi from '../middleware.js';


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

export function updateTierListDetails(tierId, params) {
  const requestInfo = {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      update_tier_details: {
        ...params
      }
    }),
  }
  return callApi(`/api/tier_lists/${tierId}`, "UPDATE_TIER_LIST_DETAILS", requestInfo, params)
}

export function addTier() {
  return {
    type: "ADD_TIER"
  }
}

export function handleEditModalState() {
  return {
    type: "HANDLE_EDIT_MODAL_STATE"
  }
}

export function handleHideUsedCardsToggle() {
  return {
    type: "SET_USED_CARDS_HIDDEN"
  }
}

export function handleAutoSaveToggle() {
  return {
    type: "SET_AUTO_SAVE"
  }
}
