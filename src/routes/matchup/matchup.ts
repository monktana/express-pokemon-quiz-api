import { axios } from "../../lib/axios"
import type { APIResourceID } from "../../types";
import type { NextFunction, Request, Response } from "express";

const getPokemon = async ({id}: APIResourceID) => {
  console.log(id);
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
};

// const getMove = async ({id}: APIResourceID): Promise<PokemonMove> => {
//   return axios.get(`/move/${id}`);
// };

export const getMatchup = async (_request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const attacking = await getPokemon({id: 1});

    response.status(200).send(attacking.data);
  } catch (error) {
    next(error);
  }
}