import React, {Component} from 'react'
import {ContactCon, SideBySide, SideBySideCon} from './styled_components/container'
import { NewsInputStyle} from './styled_components/Inputs'
import {SignSubmitBtn} from './styled_components/buttons'




class Contact extends Component {



    render(){
        return(
            <ContactCon>
            <h1>Say Hello</h1>
            <SideBySideCon>
            <SideBySide>
                <NewsInputStyle type="text" name="name" placeholder="Name"/>
                <NewsInputStyle type="text" name="email" placeholder="Email Address"/>
                <textarea name="message"  cols="30" rows="10" placeholder="give me a message" style={{width:"95%"}}></textarea>
                <SignSubmitBtn>Submit</SignSubmitBtn>
            </SideBySide>
            <SideBySide></SideBySide>
            </SideBySideCon>
            </ContactCon>
        )
    }
}


export default Contact