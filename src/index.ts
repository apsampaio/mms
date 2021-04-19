import Cell from "./models/Cell";
import p5 from "p5";

export const cellSize = 40;
export const canvasSize = 400;
const cols = Math.floor(canvasSize / 40);
const rows = Math.floor(canvasSize / 40);
const grid: Cell[] = [];

const sketch = (s: p5) => {
  s.setup = () => {
    s.createCanvas(canvasSize, canvasSize);
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const cell = new Cell(i, j);
        grid.push(cell);
      }
    }
  };

  s.draw = () => {
    s.background(51);
    for (let i = 0; i < grid.length; i++) {
      grid[i].show(s);
    }
  };
};

const sketchInstance = new p5(sketch);
