import { Repo, Commit } from '$lib/_db/models';

const addRepo = async (repo) => {
	let result = await Repo.findById(repo.id);
	if (result == null) {
		let newRepo = new Repo({
			_id: repo.id,
			name: repo.name,
			url: repo.url
		});
		return newRepo.save().catch(function (err) {
			console.error(err);
		});
	} else {
		return result;
	}
};

const addCommit = async (commit) => {
	let result = await Commit.findById(commit.sha);
	if (result == null) {
		let newCommit = new Commit({
			_id: commit.sha,
			author: {
				email: commit.author.email,
				name: commit.author.name
			},
			message: commit.message,
			distinct: commit.distinct,
			repo: commit.repoId,
			date: commit.date
		});
		return newCommit.save().catch(function (err) {
			console.error(err);
		});
	} else {
		return result;
	}
};

export { addRepo, addCommit };
