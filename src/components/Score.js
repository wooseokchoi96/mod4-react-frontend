import React from 'react';

const Score = (props) => {
    return(
        <li>{props.scoreObj.name} : {(props.scoreObj.score * props.scoreContextObject.perSecondVariable).toFixed(2)} {props.scoreContextObject.unit} </li>
    );
}

export default Score;