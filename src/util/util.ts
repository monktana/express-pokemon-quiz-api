import type { Move, NamedAPIResource } from "../types";

export const isAttackingMove = (move: Move) : boolean => !!move.power && move.power > 0;

export const getIDFromUrl = (url: NamedAPIResource['url']) => url.match(/(?<=\/)\d+(?=\/)/);

export const getRandomID = (limit: number): number => Math.floor(Math.random() * limit + 1);
