import Player from "../models/Player";
import getPlayerMatchingCell from "./getPlayerMatchingCell";
import { grid } from "../index";

type Direction = {
  i: number;
  j: number;
  direction: "top" | "right" | "bottom" | "left";
};

const directions: Record<string, Direction> = {
  top: { i: 0, j: -1, direction: "top" },
  right: { i: 1, j: 0, direction: "right" },
  bottom: { i: 0, j: 1, direction: "bottom" },
  left: { i: -1, j: 0, direction: "left" },
};

const keyDirections: Record<string, Direction> = {
  a: directions.left,
  s: directions.bottom,
  d: directions.right,
  w: directions.top,
  ArrowLeft: directions.left,
  ArrowDown: directions.bottom,
  ArrowRight: directions.right,
  ArrowUp: directions.top,
};

const checkPlayerMove = (key: string, player: Player): Boolean => {
  console.log(key + " PRESSED");
  const direction = keyDirections[key];
  const matchingCell = getPlayerMatchingCell(player, grid);

  if (direction.direction !== player.direction) {
    player.direction = direction.direction;
  }

  if (!direction || !matchingCell || matchingCell.walls[direction.direction])
    return false;

  player.i += direction.i;
  player.j += direction.j;

  matchingCell.visitedByPlayerCount++;
  return true;
};

export default checkPlayerMove;
