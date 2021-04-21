import p5 from "p5";
import { cellSize, cols, rows, grid } from "../index";

export default class Cell {
  public i: number;
  public j: number;
  public walls: Boolean[] = [];
  public visited = false;

  constructor(i: number, j: number) {
    this.i = i;
    this.j = j;
  }

  public index = (i: number, j: number) => {
    // Deny edge cases
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
      return -1;
    }

    return i + j * cols;
  };

  public show = (s: p5) => {
    const w = cellSize;
    const x = this.i * w;
    const y = this.j * w;
    this.walls = [true, true, false, false];

    s.stroke(255);
    this.walls[0] && s.line(x, y, x + w, y); // TOP
    this.walls[1] && s.line(x + w, y, x + w, y + w); // RIGHT
    this.walls[2] && s.line(x + w, y + w, x, y + w); // BOTTOM
    this.walls[3] && s.line(x, y + w, x, y); // LEFT

    if (this.visited) {
      s.noStroke();
      s.fill(255, 0, 255, 100);
      s.rect(x, y, cellSize, cellSize);
    }
  };

  public checkNeighbors = () => {
    const neighbors: Cell[] = [];
    const top = grid[this.index(this.i, this.j - 1)];
    const right = grid[this.index(this.i + 1, this.j)];
    const bottom = grid[this.index(this.i, this.j + 1)];
    const left = grid[this.index(this.i - 1, this.j)];

    top && !top.visited && neighbors.push(top);
    right && !right.visited && neighbors.push(right);
    bottom && !bottom.visited && neighbors.push(bottom);
    left && !left.visited && neighbors.push(left);

    if (neighbors.length) {
      const random = Math.floor(Math.random() * neighbors.length);
      return neighbors[random];
    } else {
      return undefined;
    }
  };
}
