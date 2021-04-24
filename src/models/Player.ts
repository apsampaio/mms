import p5 from "p5";
import { cellSize } from "../index";

export default class Player {
  public i: number;
  public j: number;

  constructor(i: number, j: number) {
    this.i = i;
    this.j = j;
  }

  public show = (s: p5) => {
    const w = cellSize;
    const offset = 8;
    const x = this.i * w;
    const y = this.j * w;

    // const x1 = x + offset;
    // const y1 = y + w - offset;
    // const x2 = x + w - offset;
    // const y2 = y1;
    // const x3 = x + w / 2;
    // const y3 = y + offset;
    const x1 = x;
    const y1 = y + w;
    const x2 = x + w;
    const y2 = y1;
    const x3 = x + w / 2;
    const y3 = y;

    s.push();

    s.rectMode(s.CENTER);
    s.translate(x + w / 2, y + w / 2);
    s.rotate(45);

    s.stroke(255, 85, 85);
    s.fill(255, 85, 85, 100);

    s.triangle(x1, y1, x2, y2, x3, y3);
    s.pop();
  };
}
