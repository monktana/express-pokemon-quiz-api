import type { NextFunction, Request, Response } from "express";

import { POKEMON_COUNT } from "../../constants";
import { getCachedMove, getCachedPokemon } from "../../lib";
import { convertMoveToShortMove, convertPokemonToShortPokemon } from "../../util";

const getRandomID = (limit: number): number => Math.floor(Math.random() * limit + 1);

export const getMatchup = async (_request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const attacker = getCachedPokemon(getRandomID(POKEMON_COUNT))!;
    const defender = getCachedPokemon(getRandomID(POKEMON_COUNT))!;

    const possibleMoves = (attacker.moves.map((move) => getCachedMove(move.move.name))).filter(Boolean);
    const move = possibleMoves[getRandomID(possibleMoves.length) - 1]!;

    response.status(200).send({
      attacker: convertPokemonToShortPokemon(attacker),
      defender: convertPokemonToShortPokemon(defender),
      move: convertMoveToShortMove(move)
    });
  } catch (error) {
    next(error);
  }
}
