const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = new Schema({
  _id: { type: String, require: true },
  type: { type: String, require: true },
  repo: { type: Number, ref: 'Repo', index: true },
  commits: [{ type: String, ref: 'Commit' }]
});

module.exports = mongoose.models.Event || mongoose.model('Event', Event)