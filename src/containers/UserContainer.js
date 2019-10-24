import React from 'react';
import LogIn from '../toms/LogIn.js';
import SignUp from '../toms/SignUp.js';

const UserContainer = (props) => {
    console.log("UserContainer LopgedInUser", props.loggedInUser)

    let userDisplay = ""
    let signIn = ""
    let signUp = ""

    if (props.loggedInUser.id){
        userDisplay = <button onClick={props.logOut}>LogOut</button>
    } else {
        signIn = <h1>Sign In<LogIn logInSubmitHandler={props.logInSubmitHandler} /></h1>
        signUp = <h1>or Sign Up<SignUp signUpSubmitHandler={props.signUpSubmitHandler} /> </h1>
    }

    return(
        <div className='UserContainer'>
            {props.loggedInUser.id ? <h1>Logged In User: {props.loggedInUser.name} </h1> : <h1>Log in or sign up!</h1>}
            {signIn}
            {signUp}
            {userDisplay}
        </div>
    );
}

export default UserContainer;