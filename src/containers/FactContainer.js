import React from 'react';

const FactContainer = ({facts}) => {
    let randomFact = facts[Math.floor(Math.random() * facts.length)] ;
    return(
        <div className='FactContainer'>
            <h3>{randomFact === undefined ? 'Please select context for random fact' : randomFact["details"]}</h3>
        </div>
    );
}

export default FactContainer;