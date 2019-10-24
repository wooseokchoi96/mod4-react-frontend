import React from 'react'

class NumbersGame extends React.Component {

  state = {
    randomNumber: "",
    answerString: ""
  }

  gameNumberLength = () => { return 20}

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
    if (/^\d*$/.test(event.target.value)) {
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
  
  inputColor = () => {
    return this.state.answerString === this.state.randomNumber.slice(0,this.state.answerString.length) ? {color : 'black'} : {color : 'red'} ;
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
        <h3>Your number to match:</h3>
       <h2 style={this.inputColor()}> {this.state.randomNumber}</h2>
        <form onSubmit={(e) => e.preventDefault()}>
         <h2>Match 'em! <textarea autoFocus spellCheck='false' style={this.inputColor()} value={this.state.answerString} onChange={this.changeAnswerString} ref={(input) => { this.nameInput = input; }} /> </h2> 
        </form>
      </div>
    ) // ends return
  } // ends render
}  // ends class

export default NumbersGame