import { getCachedSpecies, getCachedType } from "../lib"
import { Move, Pokemon, ShortMove, ShortPokemon, ShortType, Type } from "../types"

export const convertPokemonToShortPokemon = (pokemon: Pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    names: getCachedSpecies(pokemon.id)?.names,
    sprites: pokemon.sprites,
    types: pokemon.types.map((type) => convertTypeToShortType(getCachedType(type.type.name)!))
  } as ShortPokemon
};

export const convertTypeToShortType = (type: Type) => {
  return {
    id: type.id,
    name: type.name,
    names: type.names
  } as ShortType
};

export const convertMoveToShortMove = (move: Move) => {
  return {
    id: move.id,
    name: move.name,
    names: move.names,
    type: convertTypeToShortType(getCachedType(move.type.name)!)
  } as ShortMove
};