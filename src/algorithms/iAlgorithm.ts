import Player from "../models/Player";

export default interface iAlgorithm {
  player: Player;
  run(): void;
}
