import mongoose from 'mongoose';
const MONGOOSE_URI = import.meta.env.VITE_MONGOOSE_URI;

if (!MONGOOSE_URI) {
	throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null };
}

async function initConnect() {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		const opts = {
			bufferCommands: false,
			bufferMaxEntries: 0,
			useFindAndModify: false,
			useCreateIndex: true
		};
		mongoose.set('useNewUrlParser', true);
		mongoose.set('useUnifiedTopology', true);

		cached.promise = mongoose.connect(MONGOOSE_URI, opts).then((mongoose) => {
			return mongoose;
		});
	}
	cached.conn = await cached.promise;
	return cached.conn;
}

export default initConnect;
