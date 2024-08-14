const mongoose = require('mongoose');

const matchSchema = mongoose.Schema({
  teamA: { type: String, required: true },
  teamB: { type: String, required: true },
  scoreA: { type: Number, required: true },
  scoreB: { type: Number, required: true },
  status: { type: String, required: true },
}, {
  timestamps: true,
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
