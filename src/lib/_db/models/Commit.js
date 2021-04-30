const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Commit = new Schema({
  _id: { type: String },
  author: {
    email: { type: String, require: true },
    name: { type: String, require: true }
  },
  message: { type: String, require: true },
  distinct: { type: Boolean, require: true },
  repo: { type: Number, ref: 'Repo', index: true },
});

module.exports = mongoose.models.Commit || mongoose.model('Commit', Commit)