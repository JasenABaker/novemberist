import React, {Component} from 'react'
import {SignInUpForm, NewsInputStyle, InputDiv,ImagePreview, CloseBtn, TopDiv} from './styled_components/Inputs'
import {SignSubmitBtn} from './styled_components/buttons'



class SignUp extends Component {
    state = {
        email: "",
        password: "",
        password_confirmation: "",
        name: "",
        nickname: "",
        image: "",

    }

    signUp = (event) =>{
        event.preventDefault()
    
        if((this.state.password === this.state.password_confirmation)&& (this.state.password.length >= 6)) {
        this.props.signUp(
            this.state.email,
            this.state.password,
            this.state.password_confirmation,
            this.state.name,
            this.state.nickname,
            this.state.image
        )
        this.props.closeModal()
    } else if (this.state.password.length < 6){
        alert('Password is too short. Must have atleast 6 characters!')
    }
    else if(!(this.state.password === this.state.password_confirmation)){
        alert('Passwords much match!')
    }
    }
    handleChange = (event) =>{
        const newState = {...this.state}
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    render(){
        let image = this.state.image
        let imagePreview = null
        if(image){
            imagePreview = (<img src={image} alt="you"/>)
        }else {
            imagePreview =(<img src='https://i.pinimg.com/originals/0e/ca/cf/0ecacf1245c5e8c723414ea1a19407cf.jpg' alt="batman!"/>)
        }
        return(
            <div>
                <SignInUpForm>
                    <TopDiv>
                    <h2>Sign Up</h2>
                    <CloseBtn onClick={this.props.closeModal}>X</CloseBtn>
                    </TopDiv>
                    <ImagePreview>{imagePreview}</ImagePreview>
                    <InputDiv>
                        <label htmlFor="name">Full Name</label>
                        <NewsInputStyle type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
                    </InputDiv>
                    <InputDiv>
                        <label htmlFor="nickname">User Name</label>
                        <NewsInputStyle type="text" name="nickname" onChange={this.handleChange} value={this.state.nickname}/>
                    </InputDiv>
                    <InputDiv>
                        <label htmlFor="image">Photo Url</label>
                        <NewsInputStyle type="text" name="image" onChange={this.handleChange} value={this.state.image}/>
                    </InputDiv>
                    <InputDiv>
                        <label htmlFor="email">Email</label>
                        <NewsInputStyle type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
                    </InputDiv>
                    <InputDiv>
                        <label htmlFor="password">password</label>
                        <NewsInputStyle type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
                    </InputDiv>
                    <InputDiv>
                        <label htmlFor="password_confirmation">Comfirm Password</label>
                        <NewsInputStyle type="password" name="password_confirmation" onChange={this.handleChange} value={this.state.password_confirmation}/>
                    </InputDiv>
                    <div>
                        <SignSubmitBtn onClick={this.signUp}>Sign In</SignSubmitBtn>
                    </div>
                </SignInUpForm>
            </div>
        )
    }
}

export default SignUp