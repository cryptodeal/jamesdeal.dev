const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Repo = new Schema({
  _id: { type: Number },
  name: { type: String, require: true, index: true },
  url: { type: String, require: true }
});

module.exports = mongoose.models.Repo || mongoose.model('Repo', Repo)