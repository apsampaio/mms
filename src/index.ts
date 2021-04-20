import Cell from "./models/Cell";
import p5 from "p5";

export const cellSize = 40;
export const canvasSize = 400;
export const cols = Math.floor(canvasSize / 40);
export const rows = Math.floor(canvasSize / 40);
export const grid: Cell[] = [];
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
    s.frameRate(5);
    currentCell = grid[0];
  };

  s.draw = () => {
    s.background(51);
    for (let i = 0; i < grid.length; i++) {
      grid[i].show(s);
    }

    currentCell.visited = true;
    const next = currentCell.checkNeighbors();
    if (next) {
      next.visited = true;
      currentCell = next;
    }
  };
};

const sketchInstance = new p5(sketch);
