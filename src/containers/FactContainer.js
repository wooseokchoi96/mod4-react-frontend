import React from 'react';

const FactContainer = ({facts}) => {
    let randomFact = facts[Math.floor(Math.random() * facts.length)] ;
    console.log('allFact', facts)
    console.log('randomFact', randomFact === undefined)
    return(
        <div className='FactContainer'>
            {/* <h1>{randomFact}</h1> */}
        </div>
    );
}

export default FactContainer;