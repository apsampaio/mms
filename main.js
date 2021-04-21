const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    alwaysOnTop: false,
    title: "Micromouse Simulator",
    width: 600,
    height: 400,
    minWidth: 600,
    minHeight: 400,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL("http://localhost:1234/");
  win.setMenuBarVisibility(false);
}

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
