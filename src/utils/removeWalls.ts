import Cell from "../models/Cell";

const removeWalls = (current: Cell, next: Cell) => {
  const x = current.i - next.i;

  if (x === 1) {
    current.walls[3] = false; // REMOVE LEFT
    next.walls[1] = false; // REMOVE RIGHT
  } else if (x === -1) {
    current.walls[1] = false; // REMOVE LEFT
    next.walls[3] = false; // REMOVE RIGHT
  }

  const y = current.j - next.j;

  if (y === 1) {
    current.walls[0] = false; // REMOVE LEFT
    next.walls[2] = false; // REMOVE RIGHT
  } else if (y === -1) {
    current.walls[2] = false; // REMOVE LEFt
    next.walls[0] = false; // REMOVE RIGHT
  }
};

export default removeWalls;
