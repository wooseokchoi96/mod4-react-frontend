import React from 'react'

class SignUp extends React.Component {
    state = {
        name: "",
        login_id: "",
        password: "",
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = (event) => {
        event.preventDefault()
        this.props.signUpSubmitHandler(this.state)
        this.setState({
          name: "",
          login_id: "",
          password: "",
        })
    }


    render() {
        return (
          <>
            <form onSubmit={this.submitHandler}>
                <input type="text" name="name" value={this.state.name} placeholder="enter your first name" onChange={this.changeHandler} />
                <input type="text" name="login_id" value={this.state.login_id} placeholder="enter username" onChange={this.changeHandler} />
                <input type="text" name="password" value={this.state.password} placeholder="enter password" onChange={this.changeHandler} />
                <input type="submit" value="submit" />

            </form>
            </>
        )
    }
}

export default SignUp