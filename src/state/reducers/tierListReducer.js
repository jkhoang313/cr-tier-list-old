import _ from 'lodash';

export default function(state={
  id: '1',
  name: "Clyde's Tier List",
  description: "",
  tiers: [
    {
      id: 1,
      title: "S-tier",
      description: "The best cards in the game",
      notes: "Bomber just reached S tier!",
      cards: ["Bomber", "Bowler", "Bomb Tower"]
    },
    {
      id: 2,
      title: "A-tier",
      description: "The second best cards in the game",
      notes: "Barbarian Hut might move up soon",
      cards: ["Barbarian Hut", "Baby Dragon"]
    }
  ],
  cardsRemaining: {
    sortedBy: "Alphabetical"
  }
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
      const { tierId, name } = action.payload.params

      return {
        ...state,
        tiers: state.tiers.map((tier) => {
          if (tier.id === tierId) {
            return {
              ...tier,
              cards: tier.cards.concat(name)
            }
          } else {
            return tier
          }
        })
      };
    }

    case "REMOVE_CARD_FROM_TIER": {
      const { tierId, name } = action.payload.params

      return {
        ...state,
        tiers: state.tiers.map((tier) => {
          if (tier.id === tierId) {
            return {
              ...tier,
              cards: _.reject(tier.cards, (card) => card === name)
            }
          } else {
            return tier
          }
        })
      }
    }

    case "UPDATE_TIER": {
      const { description } = action.payload;

      return {
        ...state
      }
    }

    default:
      return state;
  }
}
