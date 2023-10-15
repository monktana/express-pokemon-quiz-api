import { Move, Pokemon, PokemonSpecies, ShortMove, ShortPokemon, ShortType, Type } from "../types"

export const mapToShortPokemon = (pokemon: Pokemon, species: PokemonSpecies, types: Type[]): ShortPokemon => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    names: species.names,
    sprites: pokemon.sprites,
    types: types.map(mapToShortType)
  }
};

export const mapToShortMove = (move: Move, type: Type): ShortMove => {
  return {
    id: move.id,
    name: move.name,
    names: move.names,
    type: mapToShortType(type)
  }
};

export const mapToShortType = (type: Type): ShortType => {
  return {
    id: type.id,
    name: type.name,
    names: type.names
  }
};