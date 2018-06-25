import React, {Component} from 'react'
import {SignInUpForm, NewsInputStyle} from './styled_components/Inputs'



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
        console.log(`signed in with ${this.state.email} and ${this.state.password}`)
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
                <SignInUpForm>
                    <h2>Sign In</h2>
                    <div>
                        <label htmlFor="email">Email</label>
                        <NewsInputStyle type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <NewsInputStyle type="text" name="password" onChange={this.handleChange} value={this.state.password}/>
                    </div>
                    <div>
                        <button onClick={this.signIn}>SignIn</button>
                    </div>
                </SignInUpForm>
            </div>
        )
    }
}

export default SignIn