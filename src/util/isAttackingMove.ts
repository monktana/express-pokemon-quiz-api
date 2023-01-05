import type { Move } from "../types";

export const isAttackingMove = (move: Move) : boolean => !!move.power && move.power > 0;
