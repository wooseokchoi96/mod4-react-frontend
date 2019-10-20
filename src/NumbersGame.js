import React from 'react'

class NumbersGame extends React.Component {


  //Generate Random numbers with this REGEX: 
  // [0-9]{10,10}    <------ this will generate 10 random 0-9 numbers


  

  render() {
    let random = Math.floor(Math.random()*90000000000)

    let button = this.props.gameOn ? 
    <button onClick={this.props.endGame} >End Game</button>
    :
    <button onClick={this.props.startGame} >Start Game</button>;


    return(
      button
      // random
    ) // ends return
  } // ends render
}  // ends class

export default NumbersGame