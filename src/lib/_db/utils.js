import { Repo, Commit } from '$lib/_db/models';

const addRepo = (repo) => {
	let newRepo = {
		_id: repo.id,
		name: repo.name,
		url: repo.url
	};
	return Repo.findByIdAndUpdate(repo.id, newRepo, { upsert: true }).exec();
};

const addCommit = (commit) => {
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
	return newCommit.save();
};

const getAllCommits = () => {
	return Commit.find().lean().exec();
};

const getLatestCommit = () => {
	return Commit.findOne().sort({ date: -1 }).lean().exec();
};

const getCommitsByDate = (start, end) => {
	return Commit.find({ date: { $gte: start, $lt: end } })
		.lean()
		.exec();
};
export { addRepo, addCommit, getAllCommits, getCommitsByDate, getLatestCommit };
