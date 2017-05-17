export default function(state={
  id: '1',
  name: "Clyde's Tier List",
  description: "",
  tiers: [
    {
      title: "S-tier",
      description: "The best cards in the game",
      notes: "Bomber just reached S tier!",
      cards: ["Bomber", "Bowler", "Bomb Tower"]
    },
    {
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
          title: "New Tier",
          description: "",
          notes: "",
          cards: []
        }])
      }
    default:
      return state;
  }
}
