import blessed from "blessed";
import Cell from "./models/Cell";

const cellSize = 40;
const cols = Math.floor(400 / 40);
const rows = Math.floor(400 / 40);
const grid: Cell[] = [];

const screen = blessed.screen({
  smartCSR: true,
  title: "mms",
});

screen.key(["escape", "q", "C-c"], function (ch, key) {
  return process.exit(0);
});

const setup = () => {
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const cell = new Cell(i, j);
      grid.push(cell);
    }
  }
};

const render = () => {
  for (let i = 0; i < grid.length; i++) {
    // grid[i].
  }
  screen.render();
};
