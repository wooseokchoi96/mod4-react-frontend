import React from 'react';
import './App.css';
import GameContainer from './containers/GameContainer';
import ScoreContainer from './containers/ScoreContainer';


class AppTomsCopy extends React.Component  {

  state = {
    scoreContextObject: {
      outputStart: "",
      perSecondVariable: 1,
      outputEnd: "seconds passed.  Yeah, not real interesting, is it?  PICK A DIFFERENT CONTEXT!",
      unit: "seconds"
    },
    selectedGameObj: {},
    top10Scores: []

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
  
  acceptGameObj = (obj) => {
    console.log("this is the passed id up to APP", obj)
      this.setState({
        selectedGameObj: obj
      })
      fetch("http://localhost:3000/api/v1/scores/" + obj.id)
                .then(resp => resp.json())
                .then(arr => {
                    this.setState({
                      top10Scores: arr
                    })
                })
    }
  
  render() {
    console.log("Top10score from App state: ", this.state.top10Scores)
    return (
      <div>
        <GameContainer scoreContextObject={this.state.scoreContextObject} acceptGameObj={this.acceptGameObj} />
        <ScoreContainer setScoreContextType={this.setScoreContextType} top10Scores={this.state.top10Scores} scoreContextObject={this.state.scoreContextObject} gameName={this.state.selectedGameObj.name} />
        
      </div>
    ) // ends Return
  } // ends Render
} // ends Class

export default AppTomsCopy;
