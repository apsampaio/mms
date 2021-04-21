import p5 from "p5";
import Cell from "./models/Cell";
import Player from "./models/Player";
import drawMaze, { mazeFinished } from "./utils/drawMaze";
import moveCounter from "./utils/moveCounter";

export const cellSize = 40;
export const canvasSize = 400;

export const cols = Math.floor(canvasSize / cellSize);
export const rows = Math.floor(canvasSize / cellSize);

export const grid: Cell[] = [];

let player: Player;
let counter = 0;

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
    switch (s.key) {
      case "a": {
        moveCounter(++counter);
        player.i -= 1;
        break;
      }
      case "s": {
        moveCounter(++counter);
        player.j += 1;
        break;
      }
      case "d": {
        moveCounter(++counter);
        player.i += 1;
        break;
      }
      case "w": {
        moveCounter(++counter);
        player.j -= 1;
        break;
      }
    }
  };
};

// P5 Definition
new p5(sketch);
