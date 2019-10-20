import React from 'react'
import NumbersGame from './NumbersGame'
import StoppedClock from './stoppedClock.png'

class GameTimer extends React.Component {

  state = {
    gameOn: false,
    startTime: 0,
    totalGameTime: "",
    scoreContextXValue: 1,
    SelectedGame: ""
  }
  
  startGame = () => {
    this.setState({
      gameOn: true,
      totalGameTime: "",
      startTime: Date.now(),
    })
  }

  endGame = () => {
    this.setState({
      gameOn: false,
      totalGameTime: ((Date.now() - this.state.startTime)/1000) * this.state.scoreContextXValue,
      startTime: 0
    })
  }

  changeGameSelected = (event) => {
    this.setState({
      SelectedGame: event.target.value
    })
  }



render(){



  let image = ""
  let secondsPassing = ""
  if (this.state.gameOn) {
    image = "https://loading.io/spinners/clock/lg.walking-clock-preloader.gif"
    secondsPassing = ""
  } else {
    image = StoppedClock
    secondsPassing = <h1>Total Time elapsed: {this.state.totalGameTime} </h1>
  }
   
   
   return(
     <div>
       <h1>Pick a game to play!  <span>
          <select  selected={this.state.SelectedGame} onChange={this.changeGameSelected}>
              <option value=""></option>
              <option value="NumbersGame">Numbers Game</option>
              <option value="LettersGame">Letters Game</option>
            </select>
        </span></h1>
         
       <img src={image} alt="" hight="128" width="128" />

        {/* THE NEXT LINE WILL BE VARAIABLE BASED ON THE this.state.SelectedGame attribute */}
        {/* So that only the selected game's component will render */}
        {/* the "start/end" button currently found in the NumbersGame component just represents the */}
        {/* functionality that will start and stop the game - i.e. when the game is succesfully completed, it will 'stop' */}
       <NumbersGame  gameOn={this.state.gameOn} startGame={this.startGame}   endGame={this.endGame}/>
        {this.state.totalGameTime === "" ? "" : secondsPassing}
      </div>
   ) // ends class
 } // ends render
} // ends NumbersGame class

export default GameTimer