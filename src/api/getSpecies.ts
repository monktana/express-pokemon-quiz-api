import { axios } from "../lib"
import type { APIResourceID, PokemonSpecies } from "../types";

export const getSpecies = async (id: APIResourceID): Promise<PokemonSpecies> => {
  return axios.get(`/pokemon-species/${id}`);
};
