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
      cards: ["Barbarian Hut", "Baby Dragon"]
    }
  ],
  cardsRemaining: {
    sortedBy: "Alphabetical",
    cards: ["Archers", "Arrows", "Balloon", "Bandit", "Barbarians", "Battle Ram", "Cannon", "Clone", "Dark Prince", "Dart Goblin", "Electro Wizard", "Elite Barbarians", "Elixir Collector", "Executioner", "Fireball", "Fire Spirits", "Freeze", "Furnace", "Giant", "Giant Skeleton", "Goblin Barrel", "Goblin Gang", "Goblin Hut", "Goblins", "Golem", "Graveyard", "Guards", "Heal", "Hog Rider", "Ice Golem", "Ice Spirit", "Ice Wizard", "Inferno Dragon", "Inferno Tower", "Knight", "Lava Hound", "Lightning", "Lumberjack", "Mega Minion", "Miner", "Minion Horde", "Minions", "Mini PEKKA", "Mirror", "Mortar", "Musketeer", "PEKKA", "Poison", "Prince", "Princess", "Rage", "Rocket", "Royal Giant", "Skeleton Army", "Skeletons", "Sparky", "Spear Goblins", "Tesla", "The Log", "Three Musketeers", "Tombstone", "Tornado", "Valkyrie", "Witch", "Wizard", "X-Bow", "Zap"]
  }
}, action) {
  switch (action.type) {
    case "SORT_CARDS_REMAINING":
      return {
        ...state,
        cardsRemaining: {
          ...state.cardsRemaining,
          sortedBy: action.payload
        }
      };
    default:
      return state;
  }
}
