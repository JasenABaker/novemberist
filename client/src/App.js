import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {Header, TitleDiv, NavBar} from './components/styled_components/header'
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
        Hello from App
      </div>
    );
  }
}

export default App;
