import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Video from './components/Video/Video';
import Table from './components/Table/Table';
import Nuts from './components/Nuts/Nuts';
import SignUp from './components/SignUp/SignUp';
import Discography from './components/Discography/Discography';

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
    ],
    OakTreeSpecial: [
      {
        id: 7,
        title: 'Up The Oak Tree',
        time: '3:00'
      },
      {
        id: 8,
        title: 'Sweet Home Hickory',
        time: '2:50'
      },
      {
        id: 9,
        title: 'Fox on the Chase',
        time: '7:05'
      },
      {
        id: 10,
        title: 'Can\'t you hear me Diggin',
        time: '4:12'
      },
      {
        id: 11,
        title: 'Midnight Owl',
        time: '3:43'
      },
      {
        id: 12,
        title: 'Your Love is Like a Nut',
        time: '4:00'
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
              <SignUp />
            </React.Fragment>
          )}/>
          <Route exact path="/music" render={ props=> (
            <React.Fragment>
              <h2 className='pageHeaders'>Discography</h2>
              <Discography tracks={ this.state.OakTreeSpecial}/>
            </React.Fragment>
          )}/>
          <Route exact path="/shop" />
          <Route exact path="/tour" />
        </Switch>
      </Router>
    );
  }
}

export default App;
