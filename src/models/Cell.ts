import p5 from "p5";
import { cellSize, cols, rows, grid } from "../index";

type Wall = {
  top: boolean;
  right: boolean;
  bottom: boolean;
  left: boolean;
};

export default class Cell {
  public i: number;
  public j: number;
  public walls: Wall = {
    top: true,
    right: true,
    bottom: true,
    left: true,
  };
  public visited = false;
  public end = false;
  public visitedByPlayerCount = 0;

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

    s.strokeWeight(2);
    s.stroke(255);
    this.walls.top && s.line(x, y, x + w, y);
    this.walls.right && s.line(x + w, y, x + w, y + w);
    this.walls.bottom && s.line(x + w, y + w, x, y + w);
    this.walls.left && s.line(x, y + w, x, y);

    // Define end cell
    if (this.i === rows - 1 && this.j === cols - 1) {
      this.end = true;
    }

    if (this.visited) {
      s.noStroke();
      s.fill(68, 71, 90, 100);

      s.rect(x, y, cellSize, cellSize);
      if (this.end) {
        // DRAW GREEN RECT
        s.stroke(80, 250, 123);
        s.fill(80, 250, 123, 100);
        s.rect(x + 2, y + 2, cellSize - 4, cellSize - 4);
      }
    }

    if (this.visitedByPlayerCount) {
      this.drawVisitedByPlayer(s);
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

  public highlight = (s: p5) => {
    const x = this.i * cellSize;
    const y = this.j * cellSize;

    s.stroke(241, 250, 140);
    s.fill(241, 250, 140, 100);
    s.rect(x + 2, y + 2, cellSize - 4, cellSize - 4);
  };

  private drawVisitedByPlayer = (s: p5) => {
    const offset = 14;
    const radius = cellSize / 2 - offset;

    switch (this.visitedByPlayerCount) {
      case 1: {
        s.stroke(241, 250, 140);
        s.fill(241, 250, 140, 100);
        break;
      }

      case 2: {
        s.stroke(255, 184, 108);
        s.fill(255, 184, 108, 100);
        break;
      }
      case 3: {
        s.stroke(255, 121, 198);
        s.fill(255, 121, 198, 100);
        break;
      }
      case 4: {
        s.stroke(189, 147, 249);
        s.fill(189, 147, 249, 100);
        break;
      }
      default: {
        s.stroke(255, 85, 85);
        s.fill(255, 85, 85, 100);
        break;
      }
    }

    s.circle(
      this.i * cellSize + cellSize / 2,
      this.j * cellSize + cellSize / 2,
      radius
    );
  };
}
