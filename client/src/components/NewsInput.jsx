import React, {Component} from 'react'
import {NewsInputCon} from './styled_components/container'
import {NewsInBtn} from './styled_components/buttons'
import {NewsInputStyle} from './styled_components/Inputs'



class NewsInput extends Component {


    render(){
        return(
            <NewsInputCon>
                <NewsInputStyle type="text" name="newsletter" placeholder="email address" />
                <NewsInBtn type="submit" value="subscribe"/>
            </NewsInputCon>
        )
    }
}

export default NewsInput