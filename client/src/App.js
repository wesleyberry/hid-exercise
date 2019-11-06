import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Video from './components/Video/Video';
import Table from './components/Table/Table';
import Nuts from './components/Nuts/Nuts';
import NutsTour from './components/NutsTour/NutsTour';
import SignUp from './components/SignUp/SignUp';
import Discography from './components/Discography/Discography';
import TourArchive from './components/TourArchive/TourArchive';
import Spotify from './components/Spotify/Spotify';

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
    ],
    TourOne: [
      {
        id: 13,
        location: 'Houston',
        date: 'June 10, 2018'
      },
      {
        id: 14,
        location: 'Dallas',
        date: 'June 13, 2018'
      },
      {
        id: 15,
        location: 'Austin',
        date: 'June 14, 2018'
      },
      {
        id: 16,
        location: 'San Antonio',
        date: 'June 17, 2018'
      },
      {
        id: 17,
        location: 'El Paso',
        date: 'June 23, 2018'
      },
      {
        id: 18,
        location: 'Fort Worth',
        date: 'June 28, 2018'
      },
      {
        id: 19,
        location: 'Arlington',
        date: 'June 30, 2018'
      }
    ],
    TourTwo: [
      {
        id: 20,
        location: 'Austin',
        date: 'June 1, 2019'
      },
      {
        id: 21,
        location: 'Odessa',
        date: 'June 5, 2019'
      },
      {
        id: 22,
        location: 'Waco',
        date: 'June 6, 2019'
      },
      {
        id: 23,
        location: 'Lubbock',
        date: 'June 10, 2019'
      },
      {
        id: 24,
        location: 'Corpus Chrisi',
        date: 'June 12, 2019'
      },
      {
        id: 25,
        location: 'Galveston',
        date: 'June 15, 2019'
      },
      {
        id: 26,
        location: 'Houston',
        date: 'June 19, 2019'
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
              <Discography tracks={ this.state.OakTreeSpecial } />
              <Spotify />
            </React.Fragment>
          )}/>
          <Route exact path="/shop" />
          <Route exact path="/tour" render={ props=> (
            <React.Fragment>
              <NutsTour />
              <h2 className='pageHeaders'>Tour Archive</h2>
              <h3 className='subHeaderTour'>Nut Fin Jubilee</h3>
              <TourArchive tours={ this.state.TourOne } />
              <h3 className='subHeaderTour'>High Plains Digger</h3>
              <TourArchive tours={ this.state.TourTwo } />
            </React.Fragment>
          )}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
