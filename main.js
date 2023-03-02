const { app, BrowserWindow, ipcMain, dialog } = require('electron');
// const utils = require('./utils/index.js');
const path = require('path');

const log = require('electron-log');

const { sources, rooms } = require('./utils/store');

const handle = require('./utils/handle');

log.transports.file.resolvePathFn = () => path.join(app.getAppPath(), 'logs/main.log');


require('./server/app')

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
// if (require('electron-squirrel-startup')) {
//   app.quit();
// }

console.log(process.env.NODE_ENV, '环境变量');



console.log(process.resourcesPath, '资源文件目录')


const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      webSecurity: false,
      preload: app.getAppPath() + '/preload.js',
    },
  });

  // and load the index.html of the app.
  // const INDEX_PATH = path.join('file://', __dirname, 'build/index.html');
  const INDEX_PATH = 'http://localhost:3000'
  mainWindow.loadURL(INDEX_PATH);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  handle(mainWindow);

  // utils(mainWindow);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
