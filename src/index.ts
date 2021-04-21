import p5 from "p5";
import Cell from "./models/Cell";
import Player from "./models/Player";
import drawMaze, { mazeFinished } from "./utils/drawMaze";
import moveCounter from "./utils/moveCounter";
import getPlayerMatchingCell from "./utils/getPlayerMatchingCell";

export const cellSize = 40;
export const canvasSize = 400;

export const cols = Math.floor(canvasSize / cellSize);
export const rows = Math.floor(canvasSize / cellSize);

export const grid: Cell[] = [];

let player: Player;
let counter = 0;

type Direction = {
  i: number;
  j: number;
  direction: "top" | "right" | "bottom" | "left";
};

const directions: Record<string, Direction> = {
  top: { i: 0, j: -1, direction: "top" },
  right: { i: 1, j: 0, direction: "right" },
  bottom: { i: 0, j: 1, direction: "bottom" },
  left: { i: -1, j: 0, direction: "left" },
};

const keyDirections: Record<string, Direction> = {
  a: directions.left,
  s: directions.bottom,
  d: directions.right,
  w: directions.top,
  ArrowLeft: directions.left,
  ArrowDown: directions.bottom,
  ArrowRight: directions.right,
  ArrowUp: directions.top,
};

const sketch = (s: p5) => {
  s.setup = () => {
    s.createCanvas(canvasSize, canvasSize);
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const cell = new Cell(i, j);
        grid.push(cell);
      }
    }

    player = new Player(0, 0);
  };

  s.draw = () => {
    drawMaze(s);
    if (mazeFinished) {
      player.show(s);
    }
  };

  s.keyPressed = () => {
    console.log(s.key);
    const direction = keyDirections[s.key];
    const matchingCell = getPlayerMatchingCell(player, grid);
    if (!direction || !matchingCell || matchingCell.walls[direction.direction]) return;

    player.i += direction.i;
    player.j += direction.j;
    moveCounter(++counter);
  };
};

// P5 Definition
new p5(sketch);
