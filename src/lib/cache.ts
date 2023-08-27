import { getMove, getPokemon } from "../api";
import { getType } from "../api/getType";
import { MOVE_COUNT, POKEMON_COUNT, TYPE_COUNT } from "../constants";
import type { APIResourceID, Move, Pokemon, Type } from "../types";
import { isAttackingMove } from "../util";

type AppCache = {
  pokemon: Pokemon[],
  moves: Move[],
  types: Type[],
}

const CACHE: AppCache = {
  pokemon: [],
  moves: [],
  types: [],
};

export async function initialize() {
  const moveRequests: Promise<Move>[] = [];
  const pokemonRequests: Promise<Pokemon>[] = [];
  const typeRequests: Promise<Type>[] = [];

  for (let index = 1; index <= MOVE_COUNT; index++) {
    moveRequests.push(getMove(index));
  };

  for (let index = 1; index <= POKEMON_COUNT; index++) {
    pokemonRequests.push(getPokemon(index));
  };

  for (let index = 1; index <= TYPE_COUNT; index++) {
    typeRequests.push(getType(index));
  };

  const moves = await Promise.all(moveRequests);
  const pokemon = await Promise.all(pokemonRequests);
  const types = await Promise.all(typeRequests);

  CACHE.moves = moves.filter(isAttackingMove);
  CACHE.pokemon = pokemon;
  CACHE.types = types;

  console.log(`cached ${CACHE.moves.length} moves, ${CACHE.pokemon.length} pokemon, ${CACHE.types.length} types`);
};

export const getCachedMove = (id: APIResourceID) => CACHE.moves.find((move) => move.id === id || move.name === id);
export const cacheMove = (move: Move) => CACHE.moves.push(move);

export const getCachedPokemon = (id: APIResourceID) => CACHE.pokemon.find((pokemon) => pokemon.id === id || pokemon.name === id);
export const cachePokemon = (pokemon: Pokemon) => CACHE.pokemon.push(pokemon);

export const getCachedType = (id: APIResourceID) => CACHE.types.find((type) => type.id === id || type.name === id);
export const cacheType = (type: Type) => CACHE.types.push(type);
