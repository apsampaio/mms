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
    const x = this.i * w;
    const y = this.j * w;

    s.noStroke();
    s.fill("red");
    s.rect(x + 2, y + 2, w - 4, w - 4);
  };
}
