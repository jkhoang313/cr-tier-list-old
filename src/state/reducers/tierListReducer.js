import _ from 'lodash';

export function addCardToTierList(card, list, position) {
  return list.slice(0, position).concat([card], list.slice(position))
}

export default function(state = {
  id: "",
  creator: {},
  name: "",
  list_type: "",
  description: "",
  date_modified: "",
  date_created: "",
  tiers: [],
  isFetchingTierList: false,
  usedCardsHidden: true,
  autoSaveOn: true,
  editModalOpen: false
}, action) {
  switch (action.type) {
    case "FETCH_TIER_LIST_REQUEST": {
      return {
        ...state,
        isFetchingTierList: true
      }
    }

    case "FETCH_TIER_LIST_SUCCESS": {
      return {
        ...state,
        isFetchingTierList: false,
        ...action.payload.tier_list
      }
    }

    case "ADD_CARD_TO_TIER_REQUEST": {
      const { tierIndex, cardName } = action.payload;
      let position = action.payload.position;

      return {
        ...state,
        tiers: state.tiers.map((tier, index) => {
          if (index === tierIndex) {
            position = position === -1 ? tier.cards.length : position;

            return {
              ...tier,
              cards: addCardToTierList(cardName, tier.cards, position)
            }
          } else {
            return tier
          }
        })
      }
    }

    case "MOVE_CARD_BETWEEN_TIERS_REQUEST": {
      const { tierIndex, cardName } = action.payload;
      let position = action.payload.position;

      return {
        ...state,
        tiers: state.tiers.map((tier, index) => {
          // return the tier with the card removed first
          let updatedTier = {
            ...tier,
            cards: _.reject(tier.cards, (card) => card === cardName)
          }

          // then return the tier with the card added
          if (index === tierIndex) {
            updatedTier = {
              ...updatedTier,
              cards: addCardToTierList(cardName, updatedTier.cards, position)
            }
          }
          return updatedTier
        })
      }
    }

    case "ADD_CARD_TO_TIER_SUCCESS":
    case "REMOVE_CARD_FROM_TIER_SUCCESS":
    case "MOVE_CARD_BETWEEN_TIERS_SUCCESS": {
      return {
        ...state,
        ...action.payload.tier_list
      };
    }

    case "UPDATE_TIER_LIST_DETAILS_REQUEST": {
      return {
        ...state,
        isFetchingTierList: true,
        editModalOpen: false
      }
    }

    case "UPDATE_TIER_LIST_DETAILS_SUCCESS": {
      return {
        ...state,
        ...action.payload.tier_list,
        isFetchingTierList: false,
        editModalOpen: false
      }
    }

    case "HANDLE_EDIT_MODAL_STATE": {
      return {
        ...state,
        editModalOpen: action.payload
      }
    }

    case "SET_USED_CARDS_HIDDEN": {
      return {
        ...state,
        usedCardsHidden: !state.usedCardsHidden
      }
    }

    case "SET_AUTO_SAVE": {
      return {
        ...state,
        autoSaveOn: !state.autoSaveOn
      }
    }

    default:
      return state;
  }
}
