import React from 'react'

class NumbersGame extends React.Component {

  state = {
    randomNumber: "",
    answerString: ""
  }

  gameNumberLength = () => { return 5}

  startGame = () => {
    this.setState({
      answerString: "",
      randomNumber:
      (Math.random().toString().slice(2) + Math.random().toString().slice(2) + 
      Math.random().toString().slice(2) + Math.random().toString().slice(2) + 
      Math.random().toString().slice(2) + Math.random().toString().slice(2) +
      Math.random().toString().slice(2)).slice(0, this.gameNumberLength())
    })
    this.props.startGame()
    // The below line with put focus on the answer input once they click the start button
    // when paired with the "ref={(input) => { this.nameInput = input; }" sttribute in the input tag
    this.nameInput.focus()
  }

  changeAnswerString = (event) => {
    if (/^\d+$/.test(event.target.value) || event.target.value === "") {
      this.setState({
        answerString: event.target.value
      })
    }
    this.checkForCompletion(event.target.value)
  }

  checkForCompletion = (answer) => {
    if (this.state.randomNumber === answer) {
      this.props.endGame()
    }
  }
  

  render() {
    let button = this.props.gameOn ? 
      null
    :
      <button onClick={this.startGame} >Start New Game</button>;


    return(
      <div>
        {button}
        <br />
        <h3>Your number to match: {this.state.randomNumber}</h3>
        <form>
         <h2>Match 'em! <input autoFocus type="text" value={this.state.answerString} onChange={this.changeAnswerString} ref={(input) => { this.nameInput = input; }} /> </h2> 
        </form>
      </div>
    ) // ends return
  } // ends render
}  // ends class

export default NumbersGame