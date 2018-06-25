import React, {Component} from 'react'



class SignIn extends Component {
    state = {
        email: "",
        password: "",
    }

    signIn = (event) =>{
        event.preventDefault()
        this.props.signIn(
            this.state.email,
            this.state.password
        )
        this.props.closeModal()
    }
    handleChange = (event) =>{
        const newState = {...this.state}
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    render(){
        return(
            <div>
                <form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input type="text" name="password" onChange={this.handleChange} value={this.state.password}/>
                    </div>
                    <div>
                        <button onClick={this.signIn}>SignIn</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn