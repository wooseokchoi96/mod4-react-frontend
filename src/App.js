import React from 'react';
import './App.css';
import GameContainer from './containers/GameContainer';
import ScoreContainer from './containers/ScoreContainer';

const App = () => {
  return (
    <div>
      <GameContainer />
      <ScoreContainer />
    </div>
  );
}

export default App;
