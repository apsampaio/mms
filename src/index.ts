import p5 from "p5";
import Cell from "./models/Cell";
import removeWalls from "./utils/removeWalls";

export const cellSize = 10;
export const canvasSize = 400;
export const cols = Math.floor(canvasSize / cellSize);
export const rows = Math.floor(canvasSize / cellSize);
export const grid: Cell[] = [];
const stack: Cell[] = [];

let currentCell: Cell;

const sketch = (s: p5) => {
  s.setup = () => {
    s.createCanvas(canvasSize, canvasSize);
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const cell = new Cell(i, j);
        grid.push(cell);
      }
    }
    //s.frameRate(5);
    currentCell = grid[0];
  };

  s.draw = () => {
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
    }
  };
};

// P5 Definition
const sketchInstance = new p5(sketch);
