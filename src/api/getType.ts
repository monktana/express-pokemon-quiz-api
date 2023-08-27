import { axios } from "../lib/axios"
import type { APIResourceID, Type } from "../types";

export const getType = async (id: APIResourceID): Promise<Type> => {
  return axios.get(`/type/${id}`);
};
