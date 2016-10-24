import git = require("nodegit");
import path = require("path");

export class GitInterface {
	/**
	 * Clones a repository at a specified address to a local folder
	 * @method GetRepository
	 * @param {String} url - address of repository
	 * @param {String} path - local path to clone to
	 */
	public static GetRepository (url: String, localPath: String) {
		git.Clone(url, localPath);
	};
	/**
	 * Initializes a new repository at specified path
	 * 
	 * @param {String} path - local path to initialize repo in
	 */
	public static CreateNewRepository(localPath: String){
		let pathToRepo = path.resolve(localPath);
		git.Repository.init(pathToRepo, 0).then(function(repository){
			// currently creates an empty repository
			// var repository could be used here to make an initial commit
		});
	};
}
