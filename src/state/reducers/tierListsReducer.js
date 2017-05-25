import _ from 'lodash';

export default function(state = [
  {
    id: 1,
    // will be a hash with account into
    creator: "Clyde",
    name: "Clyde's Tournament Tier List",
    description: "Comprehensive tier list for tournament capped cards",
    date_created: "1-3-2017",
    tiers: [
      {
        id: 1,
        title: "S-tier",
        cards: ["Archers", "Arrows", "Baby Dragon", "Balloon", "Bandit", "Barbarian Hut", "Barbarians", "Battle Ram", "Bomb Tower", "Bomber",  "Bowler", "Cannon", "Clone", "Dark Prince", "Dart Goblin", "Electro Wizard", "Elite Barbarians", "Elixir Collector"]
      },
      {
        id: 2,
        title: "A-tier",
        cards: ["Executioner", "Fireball", "Fire Spirits", "Freeze", "Furnace", "Giant", "Giant Skeleton", "Goblin Barrel", "Goblin Gang", "Goblin Hut", "Goblins", "Golem", "Graveyard", "Guards", "Heal", "Hog Rider"]
      },
      {
        id: 3,
        title: "B-tier",
        cards: ["Ice Golem", "Ice Spirit", "Ice Wizard", "Inferno Dragon", "Inferno Tower", "Knight", "Lava Hound", "Lightning", "Lumberjack", "Mega Minion", "Miner"]
      },
      {
        id: 4,
        title: "C-tier",
        cards: ["Minion Horde", "Minions", "Mini PEKKA", "Mirror", "Mortar", "Musketeer", "PEKKA", "Poison", "Prince", "Princess", "Rage", "Rocket", "Royal Giant"]
      },
      {
        id: 5,
        title: "D-tier",
        cards: ["Skeleton Army", "Skeletons", "Sparky", "Spear Goblins", "Tesla", "The Log", "Three Musketeers"]
      },
      {
        id: 6,
        title: "F-tier",
        cards: ["Tombstone", "Tornado", "Valkyrie", "Witch", "Wizard", "X-Bow", "Zap"]
      },
    ]
  },
  {
    id: 1,
    // will be a hash with account into
    creator: "Franco",
    name: "2v2 clan battle tier list",
    description: "for those 2v2 clan battles",
    date_created: "1-5-2017",
    tiers: [
      {
        id: 1,
        title: "God Tier",
        cards: ["Lightning", "Lumberjack", "Mega Minion", "Miner", "Minion Horde", "Minions", "Mini PEKKA", "Mirror", "Mortar", "Musketeer", "PEKKA", "Poison", "Prince", "Princess", "Rage", "Rocket", "Royal Giant", "Skeleton Army", "Skeletons", "Sparky", "Spear Goblins", "Tesla", "The Log", "Three Musketeers", "Tombstone", "Tornado", "Valkyrie", "Witch", "Wizard", "X-Bow", "Zap"]
      },
      {
        id: 2,
        title: "Alright Tier",
        cards: ["Clone", "Dark Prince", "Dart Goblin", "Electro Wizard", "Elite Barbarians", "Elixir Collector", "Executioner", "Fireball", "Fire Spirits", "Freeze", "Furnace", "Giant", "Giant Skeleton", "Goblin Barrel", "Goblin Gang", "Goblin Hut", "Goblins", "Golem", "Graveyard", "Guards", "Heal", "Hog Rider", "Ice Golem", "Ice Spirit", "Ice Wizard", "Inferno Dragon", "Inferno Tower", "Knight", "Lava Hound"]
      },
      {
        id: 3,
        title: "Trash Tier",
        cards: ["Archers", "Arrows", "Baby Dragon", "Balloon", "Bandit", "Barbarian Hut", "Barbarians", "Battle Ram", "Bomb Tower", "Bomber",  "Bowler", "Cannon"]
      }
    ]
  }
], action) {
  switch (action.type) {
    default:
      return state;
  }
}
