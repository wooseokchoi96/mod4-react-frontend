import React from 'react'
import NumbersGame from './NumbersGame'
import LettersGame from './LettersGame'
import StoppedClock from './stoppedClock.png'

class GameTimer extends React.Component {

  state = {
    gameOn: false,
    startTime: 0,
    totalGameTime: "",
    SelectedGameId: "",
    allGamesArr: []
  }

  componentDidMount() {
    this.fetchGameNamesForDropdown()
  }

  fetchGameNamesForDropdown = () => {
    fetch("http://localhost:3000/api/v1/games")
    .then(resp => resp.json())
    .then(arr => {
        this.setState({
          allGamesArr: arr})
    })
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
      totalGameTime: ((Date.now() - this.state.startTime)/1000) ,
      startTime: 0
    })
  }

  changeGameSelected = (event) => {
    console.log("event target id: ", event.target.value)
    this.setState({
      SelectedGameId:  event.target.value
    })
    this.props.acceptGameObj(this.state.allGamesArr.find(game => game.id === parseInt(event.target.value)))

  }



render(){
  let image = ""
  let outputOfContextualizedScoreString = ""
  if (this.state.gameOn) {
    image = "https://loading.io/spinners/clock/lg.walking-clock-preloader.gif"
    outputOfContextualizedScoreString = ""
  } else {
    image = StoppedClock
    outputOfContextualizedScoreString = 
      <div>
        <h1>In the time it took you to complete this game, {this.props.scoreContextObject.outputStart}{(this.state.totalGameTime * this.props.scoreContextObject.perSecondVariable).toFixed(2)}{this.props.scoreContextObject.outputEnd}</h1>
      </div>
  }

  let dropdownOptions;
  if (this.state.allGamesArr.length) {
    dropdownOptions = this.state.allGamesArr.map(obj => <option key={obj.id} value={obj.id} >{obj.name}</option>)
  }
      
  
  
  {/* THE NEXT LINE WILL BE VARAIABLE BASED ON THE this.state.SelectedGameId attribute */}
  {/* So that only the selected game's component will render */}
  {/* the "start/end" button currently found in the NumbersGame component just represents the */}
  {/* functionality that will start and stop the game - i.e. when the game is succesfully completed, it will 'stop' */}
  let componentToLoad = ""
  if(this.state.SelectedGameId){
  if (this.state.allGamesArr.find(game => game.id === parseInt(this.state.SelectedGameId)).componentName === "NumbersGame") {
    componentToLoad = <NumbersGame  key="1" gameOn={this.state.gameOn} startGame={this.startGame}   endGame={this.endGame}/>
  } else if (this.state.allGamesArr.find(game => game.id === parseInt(this.state.SelectedGameId)).componentName === "LettersGame") {
    componentToLoad = <LettersGame  key="1" gameOn={this.state.gameOn} startGame={this.startGame}   endGame={this.endGame}/>
  // } else if (this.state.allGamesArr.find(game => game.id === 1).componentName === "NumbersGame") {
  //   compoentToLoad = <SOME OTHER GAMES COMPONENT />
  } else {
    componentToLoad = <h1> no game selected </h1>
  }}
  
  return(
    <div>
      {/* TOP Dropdown to select a game  entries are variable based on what games are
          Registered in the database.  The above IF ELSE statement needs to hold the game
          Details too, which actually selects the correct component to render*/}
       <h1>Pick a game to play!  <span>
          <select name="GameDropdown" selected={this.state.SelectedGameId} onChange={this.changeGameSelected}>
              <option value="" >Select a game</option>
              {dropdownOptions}
          </select>
        </span></h1>
         
       <img src={image} alt="" hight="128" width="128" />
        {/* The below componentToLoad variable is determined above in the IF/IFELSE statement that 
             References the game selected from the dropdown*/}
        {componentToLoad}
        {this.state.totalGameTime === "" ? "" : outputOfContextualizedScoreString}
      
      </div>
   ) // ends class
  } // ends render
} // ends NumbersGame class

export default GameTimer