import type { NextFunction, Request, Response } from "express";

import { getCachedPokemon } from "../../lib";
import { convertPokemonToShortPokemon } from "../../util";

export const getPokemon = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const pokemon = getCachedPokemon(request.params['pokemon']!)!;
    response.status(200).send(convertPokemonToShortPokemon(pokemon));
  } catch (error) {
    next(error);
  }
}
