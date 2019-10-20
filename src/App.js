import React from 'react';
import './App.css';
import GameContainer from './containers/GameContainer';
import ScoreContainer from './containers/ScoreContainer';
import GameTimer from './toms/GameTimer'

const App = () => {
  return (
    <div>
      {/* <GameContainer />
      <ScoreContainer /> */}
      <GameTimer />
    </div>
  );
}

export default App;
