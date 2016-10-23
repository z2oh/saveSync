import git = require("nodegit");

export class GitInterface {
	public static GetSaveSyncRepository () {
		git.Clone("https://github.com/z2oh/saves", "saves");
	};
}
