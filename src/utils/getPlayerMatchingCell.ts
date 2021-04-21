import Cell from "../models/Cell";
import Player from "../models/Player";

const getPlayerMatchingCell = (player: Player, cells: Cell[]): Cell | undefined =>
  cells.find((cell) => cell.i === player.i && cell.j === player.j);

export default getPlayerMatchingCell;
