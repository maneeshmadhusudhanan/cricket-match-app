import React from 'react';
import MatchList from './components/MatchList';
import MatchForm from './components/MatchForm';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <MatchForm />
      <MatchList />
    </div>
  );
};

export default App;
