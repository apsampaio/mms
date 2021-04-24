import p5 from "p5";
import Cell from "./models/Cell";
import Player from "./models/Player";

import LeftHand from "./algorithm/LeftHand";
import iAlgorithm from "./algorithm/iAlgorithm";

import drawMaze, { mazeFinished } from "./utils/drawMaze";

export const cellSize = 40;
export const canvasSize = 400;

export const cols = Math.floor(canvasSize / cellSize);
export const rows = Math.floor(canvasSize / cellSize);

export const grid: Cell[] = [];

let algorithm: iAlgorithm;
let counter = 0;
let player: Player;

const sketch = (s: p5) => {
  s.setup = () => {
    s.createCanvas(canvasSize, canvasSize);
    s.angleMode(s.DEGREES);
    s.smooth();

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
    player.show(s);
    if (mazeFinished) {
      // algorithm.run();
    }
  };

  // s.keyPressed = () => {
  //   // WAIT MAZE FINISH TO PLAY THE GAME
  //   if (!mazeFinished) return;
  // };
};

// P5 Definition
new p5(sketch);
