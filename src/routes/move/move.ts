import type { NextFunction, Request, Response } from "express";

import { getCachedMove } from "../../lib";
import { convertMoveToShortMove } from "../../util";

export const getMove = async (_request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const move = getCachedMove(_request.params['move']!)!;
    response.status(200).send(convertMoveToShortMove(move));
  } catch (error) {
    next(error);
  }
}
