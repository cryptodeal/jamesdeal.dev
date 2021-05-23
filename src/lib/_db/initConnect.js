import mongoose from 'mongoose';
const mongooseURI = import.meta.env.VITE_MONGOOSE_URI;
mongoose.connect(import.meta.env.VITE_MONGOOSE_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
});

if (!mongooseURI) {
	throw new Error(
		'Please define the mongooseURI environment variable inside .env or vercel env variables'
	);
}

let cachedMongoConn = null;

export default function connectDatabase() {
	return new Promise((resolve, reject) => {
		mongoose.Promise = global.Promise;
		mongoose.connection
			//Reject if an error occurred when trying to connect to MongoDB
			.on('error', (error) => {
				console.log('Error: connection to DB failed');
				reject(error);
			})
			//Exit Process if there is no longer a Database Connection
			.on('close', () => {
				console.log('Error: Connection to DB lost');
				process.exit(1);
			})
			//Connected to DB
			.once('open', () => {
				//Return successful promise
				resolve(cachedMongoConn);
			});
		if (!cachedMongoConn) {
			//Because `cachedMongoConn` is globally scoped, var may be retained between
			//function calls; this saves vercel serverless functions from having to repeat
			//the potentially expensive process of connecting to MongoDB every time.
			cachedMongoConn = mongoose.connect(mongooseURI, {
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
			});
		} else {
			resolve(cachedMongoConn);
		}
	});
}
