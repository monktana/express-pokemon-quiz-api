import type { NextFunction, Request, Response } from "express";
import { getMove } from "../../api";

export const move = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await getMove(request.params['move']!);
    response.status(200).json(data);
  } catch (error) {
    next(error);
  }
}
