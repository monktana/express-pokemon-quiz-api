import { axios } from "../lib"
import type { APIResourceID, Pokemon } from "../types";

export const getPokemon = async (id: APIResourceID): Promise<Pokemon> => {
  return axios.get(`/pokemon/${id}`);
};
