import React from 'react';
import './App.css';
import GameContainer from './containers/GameContainer';
import ScoreContainer from './containers/ScoreContainer';


class AppTomsCopy extends React.Component  {

  state = {
    scoreContextObject: {
      outputStart: "",
      perSecondVariable: 1,
      outputEnd: "seconds passed.  Yeah, not real interesting, is it?  PICK A DIFFERENT CONTEXT!"
    }
  }

  setScoreContextType = (id) => {
    fetch("http://localhost:3000/api/v1/scoreContexts/" + id)
    .then(resp => resp.json())
    .then(object =>
      this.setState({
        scoreContextObject: object
      })
    )
  }

  render() {
    return (
      <div>
        <GameContainer scoreContextObject={this.state.scoreContextObject}/>
        <ScoreContainer setScoreContextType={this.setScoreContextType}/>
        
      </div>
    ) // ends Return
  } // ends Render
} // ends Class

export default AppTomsCopy;
