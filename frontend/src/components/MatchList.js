import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MatchList = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const { data } = await axios.get('/api/matches');
      setMatches(data);
    };
    fetchMatches();
  }, []);

  const deleteMatch = async (id) => {
    await axios.delete(`/api/matches/${id}`);
    setMatches(matches.filter(match => match._id !== id));
  };

  return (
    <div>
      <h2>Cricket Matches</h2>
      <ul>
        {matches.map(match => (
          <li key={match._id}>
            {match.teamA} vs {match.teamB} | Score: {match.scoreA}-{match.scoreB} | Status: {match.status}
            <button onClick={() => deleteMatch(match._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchList;
