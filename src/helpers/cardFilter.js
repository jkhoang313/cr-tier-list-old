import { cardDescriptions, cardRoster } from './cards';

const cardFilter = {
  // Alphabetical
  aToF: cardRoster.filter((card) => card[0] <= "F"),
  gToI: cardRoster.filter((card) => card[0] >= "G" && card[0] <= "I"),
  jToP: cardRoster.filter((card) => card[0] >= "J" && card[0] <= "P"),
  qToZ: cardRoster.filter((card) => card[0] >= "Q"),
  // Arenas
  arenaZeroToTwo: cardRoster.filter((name) => cardDescriptions[name]["arena"] <= 1 ).sort((nameOne, nameTwo) => cardDescriptions[nameOne]["arena"] - cardDescriptions[nameTwo]["arena"]),
  arenaThreeToFive: cardRoster.filter((name) => cardDescriptions[name]["arena"] > 1 && cardDescriptions[name]["arena"] <= 4).sort((nameOne, nameTwo) => cardDescriptions[nameOne]["arena"] - cardDescriptions[nameTwo]["arena"]),
  arenaSixToSeven: cardRoster.filter((name) => cardDescriptions[name]["arena"] > 4 && cardDescriptions[name]["arena"] <= 6).sort((nameOne, nameTwo) => cardDescriptions[nameOne]["arena"] - cardDescriptions[nameTwo]["arena"]),
  arenaEightToTen: cardRoster.filter((name) => cardDescriptions[name]["arena"] > 6).sort((nameOne, nameTwo) => cardDescriptions[nameOne]["arena"] - cardDescriptions[nameTwo]["arena"]),
  // Card Type
  troops: cardRoster.filter((name) => cardDescriptions[name]["type"] === "Troop").sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"]),
  buildingTroops: cardRoster.filter((name) => cardDescriptions[name]["type"] === "BuildingTroop").sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"]),
  buildings: cardRoster.filter((name) => cardDescriptions[name]["type"] === "Building").sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"]),
  spells: cardRoster.filter((name) => cardDescriptions[name]["type"] === "Spell").sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"]),
  // Rarity
  commons: cardRoster.filter((name) => cardDescriptions[name]["rarity"] === "Common").sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"]),
  rares: cardRoster.filter((name) => cardDescriptions[name]["rarity"] === "Rare").sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"]),
  epics: cardRoster.filter((name) => cardDescriptions[name]["rarity"] === "Epic").sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"]),
  legendaries: cardRoster.filter((name) => cardDescriptions[name]["rarity"] === "Legendary").sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"]),
  // Elixir
  elixirOneToTwo: cardRoster.filter((name) => cardDescriptions[name]["elixirCost"] <= 3).sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"]),
  elixirThreeToFive: cardRoster.filter((name) => cardDescriptions[name]["elixirCost"] > 3 && cardDescriptions[name]["elixirCost"] <= 5).sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"]),
  elixirSixToNine: cardRoster.filter((name) => cardDescriptions[name]["elixirCost"] > 5).sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"])
};

export default cardFilter
