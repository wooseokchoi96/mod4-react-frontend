import React from 'react';
import GameTimer from '../toms/GameTimer'

const GameContainer = (props) => {
    return(
        <div className='GameContainer'>
            <h1>The GameContainer goes here.</h1>
            <GameTimer scoreContextObject={props.scoreContextObject}/>
        </div>
    );
}

export default GameContainer;