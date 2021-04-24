import Player from "../models/Player";
import iAlgorithm from "./iAlgorithm";
import checkPlayerMove from "../utils/checkPlayerMove";

import { grid } from "../index";

export default class LeftHand implements iAlgorithm {
  public player: Player;

  constructor(player: Player) {
    this.player = player;
  }

  public run = () => {};

  public checkPath = () => {};
}
