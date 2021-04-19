import p5 from "p5";
import { cellSize } from "../index";

export default class Cell {
  i: number;
  j: number;

  constructor(i: number, j: number) {
    this.i = i;
    this.j = j;
  }

  public show = (s: p5) => {
    const x = this.i * cellSize;
    const y = this.j * cellSize;

    s.stroke(255);
    s.noFill();
    s.rect(x, y, cellSize, cellSize);
  };
}
