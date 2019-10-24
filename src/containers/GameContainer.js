import React from 'react';
import GameTimer from '../toms/GameTimer'

const GameContainer = (props) => {
    return(
        <div className='GameContainer'>
            <GameTimer scoreContextObject={props.scoreContextObject} acceptGameObj={props.acceptGameObj}/>
        </div>
    );
}

export default GameContainer;