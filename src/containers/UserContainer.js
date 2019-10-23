import React from 'react';

const UserContainer = (props) => {
    return(
        <div className='UserContainer'>
            <h1>Logged In User: {props.loggedInUser.name} </h1>
        </div>
    );
}

export default UserContainer;