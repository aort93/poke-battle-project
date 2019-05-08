const multiplier = {
  fire: {
    weakness: ['water', 'rock', 'ground'],
    resistance: ['fire', 'bug', 'grass', 'ice', 'steel']
  },
  normal: {
    weakness: ['fighting'],
    resistance: ['ghost']
  },
  fighting: {
    weakness: ['flying', 'psychic', 'fairy'],
    resistance: ['rock', 'bug', 'dark']
  },
  flying: {
    weakness: ['electric', 'ice', 'rock'],
    resistance: ['fighting', 'ground', 'bug', 'grass']
  },
  poison: {
    weakness: ['ground', 'psychic'],
    resistance: ['fighting', 'poison', 'fairy', 'grass']
  },
  ground: {
    weakness: ['water', 'grass', 'ice'],
    resistance: ['rock', 'poison', 'electric']
  },
  rock: {
    weakness: ['water', 'grass', 'steel', 'ground', 'fighting'],
    resistance: ['normal', 'poison', 'flying', 'poison']
  },
  bug: {
    weakness: ['flying', 'rock', 'fire'],
    resistance: ['fighting', 'grass', 'ground']
  },
  ghost: {
    weakness: ['ghost', 'dark'],
    resistance: ['fighting', 'normal', 'poison', 'bug']
  },
  steel: {
    weakness: ['fighting', 'ground', 'fire'],
    resistance: ['normal', 'flying', 'poison', 'rock', 'bug', 'steel', 'grass', 'psychic', 'ice', 'dragon', 'fairy']
  },
  water: {
    weakness: ['electric', 'grass'],
    resistance: ['water', 'fire', 'steel', 'ice']
  },
  grass: {
    weakness: ['flying', 'poison', 'bug', 'fire', 'ice'],
    resistance: ['water', 'electric', 'ground', 'grass']
  },
  electric: {
    weakness: ['ground'],
    resistance: ['electric', 'flying', 'steel']
  },
  psychic: {
    weakness: ['bug', 'ghost', 'dark'],
    resistance: ['fighting', 'psychic']
  },
  ice: {
    weakness: ['fighting', 'rock', 'steel', 'fire'],
    resistance: ['ice']
  },
  dragon: {
    weakness: ['ice', 'dragon', 'fairy'],
    resistance: ['water', 'fire', 'grass', 'electric']
  },
  fairy: {
    weakness: ['poison', 'steel'],
    resistance: ['fighting', 'bug', 'dragon', 'dark']
  },
  dark: {
    weakness: ['fighting', 'bug', 'fairy'],
    resistance: ['ghost', 'psychic', 'dark']
  }
}

export default multiplier
