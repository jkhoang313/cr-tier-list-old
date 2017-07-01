import _ from 'lodash';

export default function(state = [
  {
    id: 1,
    // will be a hash with account into
    creator: {
      id: 1,
      name: "Clyde"
    },
    title: "Clyde's Tournament Tier List",
    list_type: 1,
    description: "Comprehensive tier list for tournament capped cards. Based on tournament play and challenge play. Bi-weekly tier list!",
    date_modified: "1-23-2017",
    tiers: [
      {
        id: 1,
        name: "S-tier",
        cards: ["Archers", "Arrows", "Baby Dragon", "Balloon", "Bandit", "Barbarian Hut", "Barbarians", "Battle Ram", "Bomb Tower", "Bomber",  "Bowler", "Cannon", "Clone", "Dark Prince", "Dart Goblin", "Electro Wizard", "Elite Barbarians", "Elixir Collector"]
      },
      {
        id: 2,
        name: "A-tier",
        cards: ["Executioner", "Fireball", "Fire Spirits", "Freeze", "Furnace", "Giant", "Giant Skeleton", "Goblin Barrel", "Goblin Gang", "Goblin Hut", "Goblins", "Golem", "Graveyard", "Guards", "Heal", "Hog Rider"]
      },
      {
        id: 3,
        name: "B-tier",
        cards: ["Ice Golem", "Ice Spirit", "Ice Wizard", "Inferno Dragon", "Inferno Tower", "Knight", "Lava Hound", "Lightning", "Lumberjack", "Mega Minion", "Miner"]
      },
      {
        id: 4,
        name: "C-tier",
        cards: ["Minion Horde", "Minions", "Mini PEKKA", "Mirror", "Mortar", "Musketeer", "PEKKA", "Poison", "Prince", "Princess", "Rage", "Rocket", "Royal Giant"]
      },
      {
        id: 5,
        name: "D-tier",
        cards: ["Skeleton Army", "Skeletons", "Sparky", "Spear Goblins", "Tesla", "The Log", "Three Musketeers"]
      },
      {
        id: 6,
        name: "F-tier",
        cards: ["Tombstone", "Tornado", "Valkyrie", "Witch", "Wizard", "X-Bow", "Zap"]
      },
    ]
  },
  {
    id: 1,
    // will be a hash with account into
    creator: "Franco",
    title: "2v2 clan battle tier list",
    description: "for those 2v2 clan battles",
    date_modified: "2-5-2017",
    tiers: [
      {
        id: 1,
        name: "God Tier",
        cards: ["Lightning", "Lumberjack", "Mega Minion", "Miner", "Minion Horde", "Minions", "Mini PEKKA", "Mirror", "Mortar", "Musketeer", "PEKKA", "Poison", "Prince", "Princess", "Rage", "Rocket", "Royal Giant", "Skeleton Army", "Skeletons", "Sparky", "Spear Goblins", "Tesla", "The Log", "Three Musketeers", "Tombstone", "Tornado", "Valkyrie", "Witch", "Wizard", "X-Bow", "Zap"]
      },
      {
        id: 2,
        name: "Alright Tier",
        cards: ["Clone", "Dark Prince", "Dart Goblin", "Electro Wizard", "Elite Barbarians", "Elixir Collector", "Executioner", "Fireball", "Fire Spirits", "Freeze", "Furnace", "Giant", "Giant Skeleton", "Goblin Barrel", "Goblin Gang", "Goblin Hut", "Goblins", "Golem", "Graveyard", "Guards", "Heal", "Hog Rider", "Ice Golem", "Ice Spirit", "Ice Wizard", "Inferno Dragon", "Inferno Tower", "Knight", "Lava Hound"]
      },
      {
        id: 3,
        name: "Trash Tier",
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
