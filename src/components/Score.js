import React from 'react';

const Score = (props) => {
    return(
        <li>{props.scoreObj.user_id} : {props.scoreObj.score}</li>
    );
}

export default Score;