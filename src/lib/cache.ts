import { getMove, getPokemon } from "../api";
import { MOVE_COUNT, POKEMON_COUNT } from "../constants";
import type { APIResourceID, Move, Pokemon } from "../types";
import { isAttackingMove } from "../util";

type AppCache = {
  pokemon: Pokemon[],
  moves: Move[]
}

const CACHE: AppCache = {
  pokemon: [],
  moves: []
};

export async function initialize() {
  const moveRequests = [];
  const pokemonRequests = [];

  for (let index = 1; index <= MOVE_COUNT; index++) {
    moveRequests.push(getMove(index));
  };

  for (let index = 1; index <= POKEMON_COUNT; index++) {
    pokemonRequests.push(getPokemon(index));
  };

  const moves = await Promise.all(moveRequests);
  const pokemon = await Promise.all(pokemonRequests);

  CACHE.moves = moves.filter(isAttackingMove);
  CACHE.pokemon = pokemon;

  console.log(`cached ${CACHE.moves.length} moves and ${CACHE.pokemon.length} pokemon`);
};

export const getCachedMove = (id: APIResourceID) => CACHE.moves.find((move) => move.id === id || move.name === id);
export const cacheMove = (move: Move) => CACHE.moves.push(move);

export const getCachedPokemon = (id: APIResourceID) => CACHE.pokemon.find((pokemon) => pokemon.id === id || pokemon.name === id);
export const cachePokemon = (pokemon: Pokemon) => CACHE.pokemon.push(pokemon);
