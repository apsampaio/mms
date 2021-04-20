import p5 from "p5";
import { cellSize } from "../index";

export default class Cell {
  i: number;
  j: number;
  walls: Boolean[];

  constructor(i: number, j: number) {
    this.i = i;
    this.j = j;
    this.walls = [];
  }

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

    // s.noFill();
    // s.rect(x, y, cellSize, cellSize);
  };
}
