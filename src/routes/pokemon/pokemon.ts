import type { NextFunction, Request, Response } from "express";
import { getPokemon } from "../../api";

export const pokemon = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const pokemon = getPokemon(request.params['pokemon']!);
    response.status(200).send(pokemon);
  } catch (error) {
    next(error);
  }
}
