import _ from 'lodash';

export default function(state = {
  id: 1,
  name: "Clyde's Tier List",
  description: "",
  type: 1,
  tiers: [
    {
      id: 1,
      title: "S-tier",
      description: "The best cards in the game",
      notes: "Bomber just reached S tier!",
      cards: ["Bomber", "Bowler", "Bomb Tower"]
    },
    {
      id: 23,
      title: "A-tier",
      description: "The second best cards in the game",
      notes: "Barbarian Hut might move up soon",
      cards: ["Barbarian Hut", "Baby Dragon"]
    }
  ],
  cardsRemaining: {
    sortedBy: "Alphabetical"
  },
  usedCardsHidden: false
}, action) {
  switch (action.type) {
    case "ADD_TIER":
      return {
        ...state,
        tiers: state.tiers.concat([{
          // TODO
          id: state.tiers.length + 1,
          title: "New Tier",
          description: "",
          notes: "",
          cards: []
        }])
      }

    case "ADD_CARD_TO_TIER": {
      const { tierId, cardName } = action.payload.params;
      let position = action.payload.params.position;

      return {
        ...state,
        tiers: state.tiers.map((tier) => {
          if (tier.id === tierId) {
            if (position === -1) {
              position = tier.cards.length
            }

            return {
              ...tier,
              cards: tier.cards.slice(0, position).concat([cardName], tier.cards.slice(position))
            }
          } else {
            return tier
          }
        })
      };
    }

    case "REMOVE_CARD_FROM_TIER": {
      const { tierId, cardName } = action.payload.params;

      return {
        ...state,
        tiers: state.tiers.map((tier) => {
          if (tier.id === tierId) {
            return {
              ...tier,
              cards: _.reject(tier.cards, (card) => card === cardName)
            }
          } else {
            return tier
          }
        })
      }
    }

    case "MOVE_CARD_BETWEEN_TIERS": {
      const { oldTierId, newTierId, cardName } = action.payload.params;
      let position = action.payload.params.position;

      return {
        ...state,
        tiers: state.tiers.map((tier) => {
          if (tier.id === oldTierId) {
            return {
              ...tier,
              cards: _.reject(tier.cards, (card) => card === cardName)
            }
          } else if (tier.id === newTierId) {
            if (position === -1) {
              position = tier.cards.length
            }

            return {
              ...tier,
              cards: tier.cards.slice(0, position).concat([cardName], tier.cards.slice(position))
            }
          } else {
            return tier
          }
        })
      }
    }

    case "UPDATE_TIER": {
      const { tierId, title } = action.payload;
      return {
        ...state,
        tiers: state.tiers.map((tier) => {
          if (tier.id === tierId) {
            return {
              ...tier,
              title: title
            }
          } else {
            return tier
          }
        })
      }
    }

    case "UPDATE_TIER_LIST": {
      const { name } = action.payload;
      return {
        ...state,
        name: name
      }
    }

    case "SET_USED_CARDS_HIDDEN": {
      return {
        ...state,
        usedCardsHidden: !state.usedCardsHidden
      }
    }

    default:
      return state;
  }
}
