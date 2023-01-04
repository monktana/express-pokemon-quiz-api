import { axios } from "../../lib/axios"
import type { APIResourceID, Pokemon, Move } from "../../types";
import type { NextFunction, Request, Response } from "express";
import { MOVE_COUNT, POKEMON_COUNT } from "../../constants";

const getRandomID = (limit: number): APIResourceID => Math.floor(Math.random() * limit + 1);

const getPokemon = async (id: APIResourceID): Promise<Pokemon> => {
  return axios.get(`/pokemon/${id}`);
};

const getMove = async (id: APIResourceID): Promise<Move> => {
  return axios.get(`/move/${id}`);
};

export const getMatchup = async (_request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const attacker = await getPokemon(getRandomID(POKEMON_COUNT));
    const defender = await getPokemon(getRandomID(POKEMON_COUNT));
    const move = await getMove(getRandomID(MOVE_COUNT));

    response.status(200).send({attacker, defender, move});
  } catch (error) {
    next(error);
  }
}