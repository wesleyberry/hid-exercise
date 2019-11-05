import React, { Component } from 'react';
import logo from './logo.svg';
import Foundation from 'react-foundation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/" />
      </Router>
    );
  }
}

export default App;
