import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Commit = mongoose.model(
	'Commit',
	new Schema({
		_id: { type: String },
		author: {
			email: { type: String, require: true },
			name: { type: String, require: true }
		},
		message: { type: String, require: true },
		distinct: { type: Boolean, require: true },
		repo: { type: Number, ref: 'Repo', index: true },
		date: { type: Date, require: true }
	})
);

const Repo = mongoose.model(
	'Repo',
	new Schema({
		_id: { type: Number },
		name: { type: String, require: true, index: true },
		url: { type: String, require: true }
	})
);

export { Commit, Repo };
