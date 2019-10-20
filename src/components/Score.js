import React from 'react';

const Score = ({score}) => {
    return(
        <li>{score.name} : {score.score}</li>
    );
}

export default Score;