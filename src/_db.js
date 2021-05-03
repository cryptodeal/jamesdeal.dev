import mongoose from "mongoose";
const Schema = mongoose.Schema;
mongoose.connect(import.meta.env.VITE_MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
const Repo = mongoose.model('Repo', new Schema({
  _id: { type: Number },
  name: { type: String, require: true, index: true },
  url: { type: String, require: true }
}));

export { Repo }