import mongoose from 'mongoose';
const Schema = mongoose.Schema;
mongoose.connect(import.meta.env.VITE_MONGOOSE_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
});

const Repo = mongoose.model(
	'Repo',
	new Schema({
		_id: { type: Number },
		name: { type: String, require: true, index: true },
		url: { type: String, require: true }
	})
);

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
		repo: { type: Number, ref: 'Repo', index: true }
	})
);

export { Repo, Commit };
