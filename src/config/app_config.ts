import fs = require("fs");
import os = require("os");
import path = require("path");

export class AppConfiguration {
	private _appDataPath: string;
	public saveRepository: string;

	constructor() {
		this._appDataPath = this.getAppDataPath();
		console.log(this._appDataPath);
	}

	// https://github.com/Microsoft/vscode/blob/master/src/paths.js
	private getAppDataPath() {
		switch (os.platform()) {
			case "win32": return process.env.APPDATA || path.join(process.env.USERPROFILE, "AppData", "Roaming");
			case "darwin": return path.join(os.homedir(), "Library", "Application Support");
			case "linux": return process.env.XDG_CONFIG_HOME || path.join(os.homedir(), ".config");
			default: throw new Error("Platform not supported.");
		}
	}
}
