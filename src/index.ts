import blessed from "blessed";

const screen = blessed.screen({
  smartCSR: true,
});

screen.title = "My Screen";

const box = blessed.box({
  top: "center",
  left: "center",
  width: "50%",
  height: "50%",
  content: "Hello from box",
  tags: true,
  border: {
    type: "line",
  },
  style: {
    fg: "white",
    bg: "red",
    border: {
      fg: "#f0f0f0",
    },
    hover: {
      bg: "green",
    },
  },
});

screen.append(box);

screen.key(["escape", "q", "C-c"], function (ch, key) {
  return process.exit(0);
});

screen.render();
