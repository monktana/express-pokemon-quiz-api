import { axios } from "../lib/axios"
import type { APIResourceID, Move } from "../types";

export const getMove = async (id: APIResourceID): Promise<Move> => {
  return axios.get(`/move/${id}`);
};
