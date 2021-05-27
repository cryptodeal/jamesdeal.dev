import mongoose from 'mongoose';
const mongooseURI = import.meta.env.VITE_MONGOOSE_URI;

if (!mongooseURI) {
	throw new Error(
		'Please define the VITE_MONGOOSE_URI environment variable inside .env or in vercel deployment settings'
	);
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null };
}

export default async function connectToDatabase() {
	if (cached.conn) {
		return cached.conn;
	}
	if (!cached.promise) {
		const opts = {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			connectTimeoutMS: 10000,
			//Buffering means mongoose will queue up operations if it gets
			//disconnected from MongoDB and send them when it reconnects.
			//With serverless, better to fail fast if not connected.
			bufferCommands: false, //Disable mongoose buffering
			bufferMaxEntries: 0 //and MongoDB driver buffering
		};
		cached.promise = mongoose.connect(mongooseURI, opts);
	}
	cached.conn = await cached.promise;
	return cached.conn;
}
