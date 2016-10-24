"use strict";

import electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
import { GitInterface } from "./git/git_interface";
import { AppConfiguration } from "./config/app_config";

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		height: 300,
		width: 600,
		"min-width": 500,
		"min-height": 200,
		"accept-first-mouse": true,
		"title-bar-style": "hidden",
	});
	mainWindow.loadURL("file://" + __dirname + "/index.html");
	mainWindow.on("closed", function () {
		mainWindow = null;
	});
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", function () {
	if (mainWindow === null) {
		createWindow();
	}
});

GitInterface.GetRepository("https://github.com/z2oh/saves", "testClone/saves");
GitInterface.CreateNewRepository("testNewRepo");
let config = new AppConfiguration();
