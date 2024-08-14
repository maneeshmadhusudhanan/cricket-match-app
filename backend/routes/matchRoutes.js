const express = require('express');
const Match = require('../models/Match');
const router = express.Router();

// Get all matches
router.get('/', async (req, res) => {
  const matches = await Match.find({});
  res.json(matches);
});

// Add a new match
router.post('/', async (req, res) => {
  const { teamA, teamB, scoreA, scoreB, status } = req.body;
  const match = new Match({
    teamA,
    teamB,
    scoreA,
    scoreB,
    status,
  });
  const createdMatch = await match.save();
  res.status(201).json(createdMatch);
});

// Delete a match
router.delete('/:id', async (req, res) => {
  const match = await Match.findById(req.params.id);
  if (match) {
    await match.remove();
    res.json({ message: 'Match removed' });
  } else {
    res.status(404).json({ message: 'Match not found' });
  }
});

// Update a match
router.put('/:id', async (req, res) => {
  const match = await Match.findById(req.params.id);
  if (match) {
    match.teamA = req.body.teamA || match.teamA;
    match.teamB = req.body.teamB || match.teamB;
    match.scoreA = req.body.scoreA || match.scoreA;
    match.scoreB = req.body.scoreB || match.scoreB;
    match.status = req.body.status || match.status;
    const updatedMatch = await match.save();
    res.json(updatedMatch);
  } else {
    res.status(404).json({ message: 'Match not found' });
  }
});

module.exports = router;
