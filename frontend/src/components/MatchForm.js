import React, { useState } from 'react';
import axios from 'axios';

const MatchForm = () => {
  const [teamA, setTeamA] = useState('');
  const [teamB, setTeamB] = useState('');
  const [scoreA, setScoreA] = useState('');
  const [scoreB, setScoreB] = useState('');
  const [status, setStatus] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post('/api/matches', { teamA, teamB, scoreA, scoreB, status });
    setTeamA('');
    setTeamB('');
    setScoreA('');
    setScoreB('');
    setStatus('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Team A</label>
        <input value={teamA} onChange={(e) => setTeamA(e.target.value)} required />
      </div>
      <div>
        <label>Team B</label>
        <input value={teamB} onChange={(e) => setTeamB(e.target.value)} required />
      </div>
      <div>
        <label>Score A</label>
        <input value={scoreA} onChange={(e) => setScoreA(e.target.value)} required />
      </div>
      <div>
        <label>Score B</label>
        <input value={scoreB} onChange={(e) => setScoreB(e.target.value)} required />
      </div>
      <div>
        <label>Status</label>
        <input value={status} onChange={(e) => setStatus(e.target.value)} required />
      </div>
      <button type="submit">Add Match</button>
    </form>
  );
};

export default MatchForm;
