import React, {Component} from 'react'
import {SignInUpForm, NewsInputStyle, InputDiv} from './styled_components/Inputs'
import {SignSubmitBtn} from './styled_components/buttons'



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
    signUp = () =>{
        this.props.closeModal()
        this.props.openModal2()
    }

    render(){
        return(
            <div>
                <SignInUpForm>
                    <h2>Sign In</h2>
                    <InputDiv>
                        <label htmlFor="email">Email</label>
                        <NewsInputStyle type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
                    </InputDiv>
                    <InputDiv>
                        <label htmlFor="password">password</label>
                        <NewsInputStyle type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
                    </InputDiv>
                    <div>
                        <SignSubmitBtn onClick={this.signIn}>Sign In</SignSubmitBtn>
                    </div>
                    <div>
                        <p>Would you like to leave comments and receive updates? <a onClick={this.signUp}>Register here.</a></p>
                    </div>
                </SignInUpForm>
            </div>
        )
    }
}

export default SignIn