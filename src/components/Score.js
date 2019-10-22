import React from 'react';

const Score = (props) => {
    return(
        <li>{props.scoreObj.user_id} : {props.scoreObj.score * props.scoreContextObject.perSecondVariable} {props.scoreContextObject.unit} </li>
    );
}

export default Score;