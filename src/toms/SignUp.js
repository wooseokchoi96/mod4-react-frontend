import React from 'react'

class SignUp extends React.Component {
    state = {
        username: "",
        password: ""
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = (event) => {
        event.preventDefault()
        this.props.submitHandler(this.state)
        this.setState({
            username: "",
            password: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" name="username" value={this.state.username} placeholder="enter username" onChange={this.changeHandler} />
                <input type="text" name="password" value={this.state.password} placeholder="enter password" onChange={this.changeHandler} />
                <input type="submit" value="submit" />

            </form>
        )
    }
}

export default SignUp