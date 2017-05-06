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
  cardsRemaining: ["Archers", "Arrows", "Balloon", "Barbarians", "Cannon", "Clone", "DarkPrince", "EliteBarbarians", "ElixirCollector", "Fireball", "FireSpirits", "Freeze", "Furnace", "Giant", "GiantSkeleton", "GoblinBarrel", "GoblinHut", "Goblins", "Golem", "Graveyard", "Guards", "HogRider", "IceGolem", "IceSpirit", "IceWizard", "InfernoDragon", "InfernoTower", "Knight", "LavaHound", "Lightning", "Lumberjack", "MegaMinion", "Miner", "MinionHorde", "Minions", "MiniPEKKA", "Mirror", "Mortar", "Musketeer", "PEKKA", "Poison", "Prince", "Princess", "Rage", "Rocket", "RoyalGiant", "SkeletonArmy", "Skeletons", "Sparky", "SpearGoblins", "Tesla", "TheLog", "ThreeMusketeers", "Tombstone", "Tornado", "Valkyrie", "Witch", "Wizard", "X-Bow", "Zap"]
}, action) {
  switch (action.type) {
    default:
      return state
  }
}
