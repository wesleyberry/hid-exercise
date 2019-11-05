import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Video from './components/Video/Video';

class App extends Component {
  state = {
    videos: [
      {
        id: 1,
        src: 'https://www.youtube.com/embed/45cYwDMibGo'
      },
      {
        id: 2,
        src: 'https://www.youtube.com/embed/QDYfEBY9NM4'
      },
      {
        id: 3,
        src: 'https://www.youtube.com/embed/2Q_ZzBGPdqE'
      },
    ]
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={ props => (
            <React.Fragment>
              { this.state.videos.map( video => (
                <Video 
                  key={ video.id }
                  src={ video.src }
                />
              )) }
            </React.Fragment>
          )}/>
          <Route exact path="/music" />
          <Route exact path="/shop" />
          <Route exact path="/tour" />
        </Switch>
      </Router>
    );
  }
}

export default App;
