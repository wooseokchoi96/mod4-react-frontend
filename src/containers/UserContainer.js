import React from 'react';
import LogIn from '../toms/LogIn.js';

const UserContainer = (props) => {
    console.log("UserContainer LopgedInUser", props.loggedInUser)

    let userDisplay = ""

    if (props.loggedInUser.id){
        userDisplay = <button onClick={props.logOut}>LogOut</button>
    } else {
        userDisplay = <LogIn logInSubmitHandler={props.logInSubmitHandler} />
    }

    return(
        <div className='UserContainer'>
            {props.loggedInUser.id ? <h1>Logged In User: {props.loggedInUser.name} </h1> : <h1>Log in or sign up!</h1>}
            {userDisplay}
        </div>
    );
}

export default UserContainer;