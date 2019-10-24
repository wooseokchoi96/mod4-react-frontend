import React from 'react'

class Signup extends React.Component {
    state = {
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
        this.props.logInSubmitHandler(this.state)
        this.setState({
            login_id: "",
            password: ""
        })
    }

    render() {
        return (
            <>
                Login
            <br />
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="login_id" value={this.state.username} placeholder="enter username" onChange={this.changeHandler} />
                    <input type="text" name="password" value={this.state.password} placeholder="enter password" onChange={this.changeHandler} />
                    <input type="submit" value="submit" />

                </form>
            </>
        )
    }
}

export default Signup