import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Video from './components/Video/Video';
import Table from './components/Table/Table';
import Nuts from './components/Nuts/Nuts';

class App extends Component {
  state = {
    videos: [
      {
        id: 1,
        src: 'https://www.youtube.com/embed/u1iiGNgznu0',
        title: 'song1'
      },
      {
        id: 2,
        src: 'https://www.youtube.com/embed/XOZedVhHP-o',
        title: 'song2'
      },
      {
        id: 3,
        src: 'https://www.youtube.com/embed/7iqf5ytps5c',
        title: 'song2'
      },
    ],
    upcomingTours: [
      {
        id: 4,
        date: 'November 20, 2019',
        name: 'Squeek Squeek Celebration',
        location: 'Squirrel City, AL'
      },
      {
        id: 5,
        date: 'November 23, 2019',
        name: 'Nut, Nut, Acorn',
        location: 'Almond, North Carolina'
      },
      {
        id: 6,
        date: 'November 25, 2019',
        name: 'Berry Bananza',
        location: 'Cashew City, Bermuda'
      }
    ]
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={ props => (
            <React.Fragment>
              <Nuts />
              { this.state.videos.map( video => (
                <Video 
                  key={ video.id }
                  src={ video.src }
                />
              )) }
              <Table events={ this.state.upcomingTours }/>
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
