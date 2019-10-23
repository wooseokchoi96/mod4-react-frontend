import React from 'react';
import './App.css';
import GameContainer from './containers/GameContainer';
import ScoreContainer from './containers/ScoreContainer';
import FactContainer from './containers/FactContainer';
import UserContainer from './containers/UserContainer';
import SignUp from './toms/SignUp.js';
import LogIn from './toms/LogIn.js';


class AppTomsCopy extends React.Component  {

  state = {
    scoreContextObject: {
      outputStart: "",
      perSecondVariable: 1,
      outputEnd: "seconds passed.  Yeah, not real interesting, is it?  PICK A DIFFERENT CONTEXT!",
      unit: "seconds"
    },
    selectedGameObj: {},
    top10Scores: [],
    allContextOptionsArr: [],
    loggedInUser: {}
  }

  componentDidMount(){
    if (localStorage.token) {
      let token = localStorage.token
      fetch("http://localhost:3000/api/v1/autologin", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          accepts: "application/json",
          Authorization: `${token}`
        }
      })
        .then(resp => resp.json())
        .then(userdata => this.setState({loggedInUser: userdata}))
    }
  }

  fetchContextOptionsForDropdown = () => {
    fetch("http://localhost:3000/api/v1/scoreContexts")
    .then(resp => resp.json())
    .then(arr => {
        this.setState({
            allContextOptionsArr: arr})
    })
}
  
  setScoreContextType = (selectedid) => {
    let selectedObj=this.state.allContextOptionsArr.find(obj => obj.id === parseInt(selectedid)) 
      this.setState({
        scoreContextObject: selectedObj
      })
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

    logIn = (userInfo) => {
      fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify(userInfo)
      })
        .then(resp => resp.json())
        .then(response => {
          localStorage.setItem("token", response.token)
          this.setState({
            loggedInUser: response.user
          }, () => this.props.history.push("/klowns"))
        })
    }

    signUp = (userInfo) => {
      console.log("submitting")
      fetch("http://localhost:3000/api/v1/players", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify({ user: userInfo })
      })
        .then(resp => resp.json())
        .then(response => {
          //This next line logs the user in
          localStorage.setItem("token", response.token)
          this.setState({ loggedInUser: response.user })
        })
    }
  
  render() {
    console.log("Top10score from App state: ", this.state.top10Scores)
    return (
        <div className='MainContainer'>
          <SignUp submitHandler={this.signUp} />
          <LogIn submitHandler={this.logIn} />
          <GameContainer scoreContextObject={this.state.scoreContextObject} acceptGameObj={this.acceptGameObj} />
          <ScoreContainer allContextOptionsArr={this.state.allContextOptionsArr} setScoreContextType={this.setScoreContextType} top10Scores={this.state.top10Scores} fetchContextOptionsForDropdown={this.fetchContextOptionsForDropdown} scoreContextObject={this.state.scoreContextObject} gameName={this.state.selectedGameObj.name} />
          <FactContainer />
          <UserContainer loggedInUser={this.state.loggedInUser}/>
        </div>
      
    ) // ends Return
  } // ends Render
} // ends Class

export default AppTomsCopy;
