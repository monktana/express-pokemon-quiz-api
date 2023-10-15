import type { NextFunction, Request, Response } from "express";

import { POKEMON_COUNT } from "../../constants";
import { getRandomID, isAttackingMove } from "../../util";
import { getMove, getPokemon, getSpecies, getType } from "../../api";
import { mapToShortMove, mapToShortPokemon } from "../../util/convertTypes";

export const matchup = async (_request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const [attacker, defender] = await Promise.all([
      getPokemon(getRandomID(POKEMON_COUNT)),
      getPokemon(getRandomID(POKEMON_COUNT))
    ]);

    const [attackerSpecies, attackerTypes, defenderSpecies, defenderTypes, moves] = await Promise.all([
      getSpecies(attacker.id),
      Promise.all(attacker.types.map((type) => getType(type.type.name))),
      getSpecies(defender.id),
      Promise.all(defender.types.map((type) => getType(type.type.name))),
      Promise.all(attacker.moves.map((move) => getMove(move.move.name)))
    ]);

    const attackingMoves = moves.filter(isAttackingMove);
    const move = attackingMoves[getRandomID(attackingMoves.length) - 1]!;

    const moveType = await getType(move.type.name);

    response.status(200).send({
      attacker: mapToShortPokemon(attacker, attackerSpecies, attackerTypes),
      defender: mapToShortPokemon(defender, defenderSpecies, defenderTypes),
      move: mapToShortMove(move, moveType)
    });
  } catch (error) {
    next(error);
  }
}
