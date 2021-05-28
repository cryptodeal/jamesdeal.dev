import mongoose from 'mongoose';

const commitSchema = new mongoose.Schema({
	_id: { type: String },
	author: {
		email: { type: String, require: true },
		name: { type: String, require: true }
	},
	message: { type: String, require: true },
	distinct: { type: Boolean, require: true },
	repo: { type: Number, ref: 'Repo', index: true },
	date: { type: Date, require: true }
});
const Commit = mongoose.models.Commit || mongoose.model('Commit', commitSchema);

const repoSchema = new mongoose.Schema({
	_id: { type: Number },
	name: { type: String, require: true, index: true },
	url: { type: String, require: true }
});
const Repo = mongoose.models.Repo || mongoose.model('Repo', repoSchema);

export { Commit, Repo };
