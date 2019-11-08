import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import uuid from 'uuid';
import Navbar from './components/Navbar/Navbar';
import Video from './components/Video/Video';
import Table from './components/Table/Table';
import Nuts from './components/Nuts/Nuts';
import NutsTour from './components/NutsTour/NutsTour';
import SignUp from './components/SignUp/SignUp';
import Discography from './components/Discography/Discography';
import TourArchive from './components/TourArchive/TourArchive';
import Spotify from './components/Spotify/Spotify';
import TShirt from './Images/sq_shirt_1.png';
import Cap from './Images/sw_hat_1.png';
import Hoodie from './Images/sw_hoodie_2_cropped.png';
import Album from './Images/oak_tree_special.png';
import Merch from './components/Merch/Merch';
import SingleMerch from './components/SingleMerch/SingleMerch';


class App extends Component {
  state = {
    videos: [
      {
        id: uuid.v4(),
        src: 'https://www.youtube.com/embed/u1iiGNgznu0',
        title: 'song1'
      },
      {
        id: uuid.v4(),
        src: 'https://www.youtube.com/embed/XOZedVhHP-o',
        title: 'song2'
      },
      {
        id: uuid.v4(),
        src: 'https://www.youtube.com/embed/7iqf5ytps5c',
        title: 'song2'
      },
    ],
    upcomingTours: [
      {
        id: uuid.v4(),
        date: 'November 20, 2019',
        name: 'Squeek Squeek Celebration',
        location: 'Squirrel City, AL'
      },
      {
        id: uuid.v4(),
        date: 'November 23, 2019',
        name: 'Nut, Nut, Acorn',
        location: 'Almond, North Carolina'
      },
      {
        id: uuid.v4(),
        date: 'November 25, 2019',
        name: 'Berry Bananza',
        location: 'Cashew City, Bermuda'
      }
    ],
    OakTreeSpecial: [
      {
        id: uuid.v4(),
        title: 'Up The Oak Tree',
        time: '3:00'
      },
      {
        id: uuid.v4(),
        title: 'Sweet Home Hickory',
        time: '2:50'
      },
      {
        id: uuid.v4(),
        title: 'Fox on the Chase',
        time: '7:05'
      },
      {
        id: uuid.v4(),
        title: 'Can\'t you hear me Diggin',
        time: '4:12'
      },
      {
        id: uuid.v4(),
        title: 'Midnight Owl',
        time: '3:43'
      },
      {
        id: uuid.v4(),
        title: 'Your Love is Like a Nut',
        time: '4:00'
      }
    ],
    TourOne: [
      {
        id: uuid.v4(),
        location: 'Houston',
        date: 'June 10, 2018'
      },
      {
        id: uuid.v4(),
        location: 'Dallas',
        date: 'June 13, 2018'
      },
      {
        id: uuid.v4(),
        location: 'Austin',
        date: 'June 14, 2018'
      },
      {
        id: uuid.v4(),
        location: 'San Antonio',
        date: 'June 17, 2018'
      },
      {
        id: uuid.v4(),
        location: 'El Paso',
        date: 'June 23, 2018'
      },
      {
        id: uuid.v4(),
        location: 'Fort Worth',
        date: 'June 28, 2018'
      },
      {
        id: uuid.v4(),
        location: 'Arlington',
        date: 'June 30, 2018'
      }
    ],
    TourTwo: [
      {
        id: uuid.v4(),
        location: 'Austin',
        date: 'June 1, 2019'
      },
      {
        id: uuid.v4(),
        location: 'Odessa',
        date: 'June 5, 2019'
      },
      {
        id: uuid.v4(),
        location: 'Waco',
        date: 'June 6, 2019'
      },
      {
        id: uuid.v4(),
        location: 'Lubbock',
        date: 'June 10, 2019'
      },
      {
        id: uuid.v4(),
        location: 'Corpus Chrisi',
        date: 'June 12, 2019'
      },
      {
        id: uuid.v4(),
        location: 'Galveston',
        date: 'June 15, 2019'
      },
      {
        id: uuid.v4(),
        location: 'Houston',
        date: 'June 19, 2019'
      }
    ],
    loggedIn: true,
    merchItems: [
      {
        id: uuid.v4(),
        title: 'T-Shirt',
        price: '$19.99',
        image: TShirt
      },
      {
        id: uuid.v4(),
        title: 'Ball Cap',
        price: '$9.99',
        image: Cap
      },
      {
        id: uuid.v4(),
        title: 'Hoodie',
        price: '$29.99',
        image: Hoodie
      },
      {
        id:  uuid.v4(),
        title: 'Album',
        price: '$19.99',
        image: Album
      },
    ],
    currentItem: {}
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
          <Route exact path="/shop" render={ props=> (
            <div className="container">
              <h2 className="pageHeaders">Merchandise</h2>
              <div className="row">
                { this.state.merchItems.map(merch => (
                  <Merch 
                    title={ merch.title }
                    price={ merch.price }
                    id={ merch.id }
                    image={ merch.image }
                  />
                ))}
              </div>
            </div>
          )}/>
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
          <Route exact path="/shop/:id" render={ props => (
          <SingleMerch 
            {...props} 
            items={ this.state.merchItems }
          />)}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
