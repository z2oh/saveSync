import storage = require("electron-json-storage");

	interface IConfiguration {
		initialized: boolean;
	}
/**
 * The interface for dealing with the app configuration settings.
 *
 * @export
 * @class AppConfiguration
 */
export class AppConfiguration {
	// This is the default configuration to be used in initialization. Perhaps this should be moved
	// to an external file?
	private defaultConfig: IConfiguration = { initialized: true };
	// The settings promise (and its resolution function, thanks es6).
	private promiseResolve;
	private settings = new Promise<IConfiguration>((resolve, reject) => {
		this.promiseResolve = resolve;
	});

	/**
	 * Creates an instance of AppConfiguration.
	 *
	 * Attempts to retrieve the settings.json file located in the app data directory. If there
	 * is an error, the error is thrown. If the settings file does not exist (indicated by an
	 * empty object and detected if the default key is not present) then the settings file is
	 * initialized with the init function and the settings promise is resolved with the default
	 * configuration. Otherwise, the settings file was retrieved correctly and exists, and the
	 * settings promise is resolved with the returned data.
	 *
	 * @memberOf AppConfiguration
	 */
	constructor() {
		storage.get("settings", (err, data) => {
			if (err) {
				throw err;
			} else if ((data as IConfiguration).initialized === undefined) {
				this.Init();
				this.promiseResolve(this.defaultConfig);
			} else {
				this.promiseResolve(data);
			}
		});
	}

	/**
	 * A getter for the settings promise.
	 *
	 * @returns a promise that will be resolved with the settings object.
	 *
	 * @memberOf AppConfiguration
	 */
	public GetSettings() {
		return this.settings;
	}

	/**
	 * Initializes the settings.json file with the default configuration.
	 *
	 * @memberOf AppConfiguration
	 */
	private Init() {
		storage.set("settings", this.defaultConfig, (err) => {
			if(err.errno == -2){ //This is the folder does not exist error
				console.log("Settings.json does not exist, creating it now");
			}
			else{
				// console.log(err);
				// console.log("Settings.json does not exist, creating it now");
				throw err;
			}
		});
	}
}
