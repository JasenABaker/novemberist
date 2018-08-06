import React, {Component} from 'react'
import {Icon} from 'react-materialize'
import {ContactCon, SideBySide, SideBySideCon, IconCon, InfoCon, TextCon} from './styled_components/container'
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
            <SideBySide>
            <InfoCon>
            <IconCon>
                <Icon medium>email</Icon>
                <Icon medium>phone</Icon>
                <Icon medium>room</Icon>
            </IconCon>
            <TextCon>
            <h3>RiseNovemberist@gmail.com</h3>
                <h3>470.635.1438</h3>
                <h3> Sugar Hill, GA</h3>
            </TextCon>
            </InfoCon>
            </SideBySide>
            </SideBySideCon>
            </ContactCon>
        )
    }
}


export default Contact