import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import axios from 'axios'
import Modal from 'react-modal'
import { Header, TitleDiv, NavBar } from './components/styled_components/header'
import { Page, Aside, AsideImg, InsideAside } from './components/styled_components/container'
import Image from './components/styled_components/images/me.jpg'
import Home from './components/Home'
import NewsInput from './components/NewsInput'
import SignIn from './components/SignIn'
import './App.css';

class App extends Component {
  state = {
    user: {},
    blogs: [],
    shorts: [],
    signedIn: false,
    isAdmin: false,
    modal:false
  }
  async componentWillMount() {
    try {
    const resBlog = await axios.get('/api/blogs')
    const resShorts = await axios.get('/api/shorts')
    this.setState({blogs: resBlog.data, shorts: resShorts.data})
    }
    catch(err){
      console.log(err)
    }

  }
  openModal = () => {
    this.setState({modal: true});
  }
  closeModal = ()=> {
    this.setState({modal: false});
  }

  signIn = async (email,password)=>{
    try{
      const payload = {
        email,
        password
      }
      const resUser = await axios.post('/auth/sign_in', payload)
      this.setState({signedIn: true, user: resUser.data, isAdmin: resUser.data.admin})
    }catch(error){
      console.log(error)
    }
  }
  render() {
    const HomePage = () => {
      return(
        <Home shorts={this.state.shorts} blogs={this.state.blogs} />
      )
    }
    return (
      <div>
        <Header>
          <TitleDiv>
            <h2>The</h2>
            <h1>Novemberist</h1>
          </TitleDiv>
          <NavBar>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Shorts</a></li>
            <li><a href="#">Blog</a></li>
            <li><a onClick={this.openModal}>SignIn</a></li>
          </NavBar>
        </Header>
        <Page>
          <Router>
            <Switch>
              <Route exact path='/' render={HomePage} />
            </Switch>
          </Router>
          <Aside>
            <InsideAside>
              <h4>About the Author</h4>
              <AsideImg>
                <img src={Image} alt="The Novemberist"/>
              </AsideImg>
              <p><a href="#">The Novemberist</a>, Jasen Baker,(<a href="https://twitter.com/RiseNovemberist">@RiseNovemberist</a>) is writer living in Sugar Hill, GA.<a href="#"> Read More...</a></p>
              <h4>Subscribe to my newsletter</h4>
              <NewsInput/>
            </InsideAside>
          </Aside>
        </Page>
        <Modal isOpen={this.state.modal}>
          <SignIn signIn={this.signIn}
                  closeModal={this.closeModal} />
        </Modal>
      </div>
    );
  }
}

export default App;
