import Cell from "../models/Cell";

const removeWalls = (current: Cell, next: Cell) => {
  const x = current.i - next.i;

  if (x === 1) {
    current.walls.left = false;
    next.walls.right = false;
  } else if (x === -1) {
    current.walls.right = false;
    next.walls.left = false;
  }

  const y = current.j - next.j;

  if (y === 1) {
    current.walls.top = false;
    next.walls.bottom = false;
  } else if (y === -1) {
    current.walls.bottom = false;
    next.walls.top = false;
  }
};

export default removeWalls;
