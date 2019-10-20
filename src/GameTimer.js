import React from 'react'
import NumbersGame from './NumbersGame'

class GameTimer extends React.Component {

  state = {
    gameOn: false,
    startTime: 0,
    totalGameTime: ""
    scoreContextXValue: 0
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
      totalGameTime: (Date.now() - this.state.startTime)/1000,
      startTime: 0
    })
  }



render(){

//  let clockSpeed= this.state.gameOn ? 100 : 0

  // if (this.state.gameOn) {
  //   setInterval( () => {
  //     this.setState({
  //       totalGameTime: ((Date.now() - this.state.startTime)/1000)*18.611111,
  //     })}, clockSpeed)
  // } 

  if (this.state.gameOn) {
    var sec = 0;
    function pad ( val ) { return val > 9 ? val : "0" + val; }
    setInterval( () => {
        document.getElementById("seconds").innerHTML=pad(++sec%60);
        document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
    }, 0)
  } 
   
   
   return(
     <div>
       <div>
       <h1>Total Time elapsed {this.state.totalGameTime}</h1>
         <span id="minutes">00</span>:<span id="seconds">00</span>
       </div>
       <NumbersGame  gameOn={this.state.gameOn} startGame={this.startGame}   endGame={this.endGame}/>
      </div>
   ) // ends class
 } // ends render
} // ends NumbersGame class

export default GameTimer