import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import axios from 'axios'
import Modal from 'react-modal'
import Dialog from 'react-dialog'
import { Header, TitleDiv, NavBar } from './components/styled_components/header'
import { Page, Aside, AsideImg, InsideAside } from './components/styled_components/container'
import Image from './components/styled_components/images/me.jpg'
import Home from './components/Home'
import About from './components/About'
import NewsInput from './components/NewsInput'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import './App.css';
import { saveAuthTokens, setAxiosDefaults, userIsLoggedIn, clearAuthTokens } from './util/SessionHeaderUtil'

class App extends Component {
  state = {
    user: {},
    blogs: [],
    shorts: [],
    signedIn: false,
    isAdmin: false,
    modal: false,
    modal2: false
  }
  async componentWillMount() {
    try {
      const signedIn = userIsLoggedIn()
      if (signedIn) {
        setAxiosDefaults()
      }
      const resBlog = await axios.get('/api/blogs')
      const resShorts = await axios.get('/api/shorts')
      this.setState({ blogs: resBlog.data, shorts: resShorts.data, signedIn })

    }
    catch (err) {
      console.log(err)
    }

  }

  signOut = async (event) => {
    try {
      event.preventDefault()

      await axios.delete('/api/auth/sign_out')
      clearAuthTokens()

      this.setState({ signedIn: false })
    } catch (error) {
      console.log(error)
    }
  }
  openModal2 = () => {
    this.setState({ modal2: true })
  }
  closeModal2 = () => {
    this.setState({ modal2: false })
  }
  openModal = () => {
    this.setState({ modal: true });
  }
  closeModal = () => {
    this.setState({ modal: false });
  }

  signIn = async (email, password) => {
    try {
      const payload = {
        email,
        password
      }
      const resUser = await axios.post('/api/auth/sign_in', payload)
      saveAuthTokens(resUser.headers)
      if (resUser.data.data.admin) {
        console.log(resUser.data)
        this.setState({ signedIn: true, user: resUser.data.data, isAdmin: true })
      } else {
        console.log(resUser.data)
        this.setState({ signedIn: true, user: resUser.data.data, isAdmin: false })
      }
    } catch (error) {
      console.log(error)
    }
  }
  signUp = async (email, password, password_comfirmation, name, nickname, image) => {
    try {
  
      const res = await axios.post('/api/auth', {
        user: {
        email: email,
        password: password,
        password_confirmation: password_comfirmation,
        name: name,
        nickname: nickname,
        image: image
        }
      })
      this.signIn(email, password)
      alert(`Hey ${name}! Thanks for joining me! You can now login using ${email}`)
    } catch (error) {
      console.log(error)
      alert('Failed to create new user!')
    }
  }
  render() {
    const HomePage = () => {
      return (
        <Home shorts={this.state.shorts} blogs={this.state.blogs} />
      )
    }
    return (
      <div>
        <Header>
        <a href="/">
          <TitleDiv>
            <h2>The</h2>
            <h1>Novemberist</h1>
          </TitleDiv>
          </a>
          <NavBar>
            <li><a href="/about">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Shorts</a></li>
            <li><a href="#">Blog</a></li>
            <li>{this.state.signedIn ?
              <a onClick={this.signOut}>SignOut</a> :
              <a onClick={this.openModal}>SignIn</a>}</li>
          </NavBar>
        </Header>
        <Page>
          <Router>
            <div>
            <Switch>
              <Route exact path='/' render={HomePage} />
              <Route exact path='/about' component={About}/>
            </Switch>
            </div>
          </Router>
          <Aside>
            <InsideAside>
              <h4>About the Author</h4>
              <AsideImg>
                <img src={Image} alt="The Novemberist" />
              </AsideImg>
              <p><a href="#">The Novemberist</a>, Jasen Baker!(<a href="https://twitter.com/RiseNovemberist">@RiseNovemberist</a>) is writer living in Sugar Hill, GA.<a href="#"> Read More...</a></p>
              <h4>Subscribe to my newsletter</h4>
              <NewsInput />
            </InsideAside>
          </Aside>
        </Page>
        {this.state.modal &&
          <Dialog modal={true}
            width={392}>
            <SignIn signIn={this.signIn}
              closeModal={this.closeModal}
              openModal2={this.openModal2} />
          </Dialog>
        }
        {this.state.modal2 &&
          <Dialog modal={true}
            width={392}>
            <SignUp signUp={this.signUp}
              closeModal={this.closeModal2} />
          </Dialog>}
      </div>
    );
  }
}

export default App;
