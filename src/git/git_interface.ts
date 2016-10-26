import git = require("nodegit");
import path = require("path");

/**
 * The interface for dealing with git.
 * 
 * @export
 * @class GitInterface
 */
export class GitInterface {
	/**
	 * Clones a repository at a specified address to a local folder
	 * 
	 * @static
	 * @param {string} url - address of repository
	 * @param {string} localPath - local path to clone to
	 * 
	 * @memberOf GitInterface
	 */
	public static GetRepository (url: string, localPath: string) {
		git.Clone(url, localPath);
	};

	/**
	 * Initializes a new repository at specified path
	 * 
	 * @static
	 * @param {string} localPath - local path to initialize repo in
	 * 
	 * @memberOf GitInterface
	 */
	public static CreateNewRepository(localPath: string) {
		let pathToRepo = path.resolve(localPath);
		git.Repository.init(pathToRepo, 0).then(function(repository){
			// currently creates an empty repository
			// var repository could be used here to make an initial commit
		});
	};
}
