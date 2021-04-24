import p5 from "p5";
import { cellSize } from "../index";

const directionRoration = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
};

export default class Player {
  public i: number;
  public j: number;
  public direction: "top" | "right" | "bottom" | "left" = "bottom";

  constructor(i: number, j: number) {
    this.i = i;
    this.j = j;
  }

  public show = (s: p5) => {
    const offset = 8;
    const radius = cellSize / 2 - offset;
    const x = this.i * cellSize;
    const y = this.j * cellSize;

    s.push();

    s.translate(x + cellSize / 2, y + cellSize / 2);
    s.rotate(directionRoration[this.direction]);

    s.stroke(255, 85, 85);
    s.fill(255, 85, 85, 100);
    s.triangle(-radius, radius, radius, radius, 0, -radius);

    s.pop();
  };
}
