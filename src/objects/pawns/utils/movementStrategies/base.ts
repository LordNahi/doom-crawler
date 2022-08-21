import Pawn from "../../abstract/pawn";

export interface Controllable {
  update: () => void;
  pawn: Pawn;
}
