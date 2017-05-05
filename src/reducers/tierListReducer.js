export default function(state={
  id: '1',
  name: "Clyde's Tier List",
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
      cards: ["Barbarian Hut"]
    }
  ],
  cardsRemaining: ["Archers", "Arrows", "Balloon", "Barbarians", "Goblins"]
}, action) {
  switch (action.type) {
    default:
      return state
  }
}
