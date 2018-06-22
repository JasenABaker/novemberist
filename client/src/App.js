import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import {Header, TitleDiv, NavBar} from './components/styled_components/header'
import {Page, Aside} from './components/styled_components/container'
import Home from './components/Home'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
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
              <li><a href="#">SignIn</a></li>
            </NavBar>
        </Header>
        <Page>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
        </Router>
        <Aside>
          Hello from Aside
        </Aside>
        </Page>
      </div>
    );
  }
}

export default App;
