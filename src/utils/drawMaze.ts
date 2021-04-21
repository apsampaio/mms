import p5 from "p5";
import Cell from "../models/Cell";
import removeWalls from "./removeWalls";

import { grid } from "../index";

export let mazeFinished = false;

const stack: Cell[] = [];
let currentCell: Cell;

const drawMaze = (s: p5) => {
  currentCell === undefined ? (currentCell = grid[0]) : null;

  s.background(51);
  for (let i = 0; i < grid.length; i++) {
    grid[i].show(s);
  }

  currentCell.visited = true;
  currentCell.highlight(s);

  const next = currentCell.checkNeighbors();

  if (next) {
    next.visited = true;
    stack.push(currentCell);
    removeWalls(currentCell, next);
    currentCell = next;
  } else if (stack.length) {
    currentCell = stack.pop()!;
  } else if (!stack.length && !mazeFinished) {
    mazeFinished = true;
  }
};

export default drawMaze;
