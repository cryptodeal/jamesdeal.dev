import { Repo, Commit } from '$lib/_db/models';

const addRepo = async (repo) => {
	let newRepo = new Repo({
		_id: repo.id,
		name: repo.name,
		url: repo.url
	});
	return newRepo.save().catch(function (err) {
		console.error(err);
	});
};

const addCommit = async (commit) => {
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
};

const getAllCommits = () => {
	return Commit.find().lean().exec();
};

const getLatestCommit = () => {
	return Commit.findOne().sort({ created_at: -1 }).lean().exec();
};

const getCommitsByDate = (start, end) => {
	return Commit.find({ date: { $gte: start, $lt: end } })
		.lean()
		.exec();
};
export { addRepo, addCommit, getAllCommits, getCommitsByDate, getLatestCommit };
