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
import SpotifyAPI from 'spotify-web-api-js';
import TShirt from './Images/sq_shirt_1.png';
import Cap from './Images/sw_hat_1.png';
import Hoodie from './Images/sw_hoodie_2_cropped.png';
import Album from './Images/oak_tree_special.png';
import Merch from './components/Merch/Merch';

const spotifyWebApi = new SpotifyAPI();

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
    ],
    loggedIn: true,
    nowPlaying: {},
    merchItems: [
      {
        id:27,
        title: 'T-Shirt',
        price: '$19.99',
        image: TShirt
      },
      {
        id:28,
        title: 'Ball Cap',
        price: '$9.99',
        image: Cap
      },
      {
        id:29,
        title: 'Hoodie',
        price: '$29.99',
        image: Hoodie
      },
      {
        id: 30,
        title: 'Album',
        price: '$19.99',
        image: Album
      },
    ],
    searchedTracks: [],
    APIImage: ''
  }
  constructor() {
    super();
    const params = this.getHashParams();
    this.setState({
      loggedIn: params.access_token ? true : false,
      nowPlaying: {
        name: 'Not Checked',
        image: ''
      }
    });
    if(params.access_token) {
      spotifyWebApi.setAccessToken(params.access_token);
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  getNowPlaying() {
    spotifyWebApi.getMyCurrentPlaybackState()
      .then(response => {
        this.setState({
          nowPlaying: {
            name: response.item.name,
            image: response.item.album.images[0].url
          }
        })
      })
  }

  searchAPI() {
    spotifyWebApi.searchTracks('artist:Punch Brothers').then(
      data => {
        let searchedTracks = [];
        for( let i = 0; i < 5; i++) {
          searchedTracks.push(data.tracks.items[i].name);
        }
        let APIImage = data.tracks.items[0].album.images[0].url;
        console.log(APIImage);
        this.setState({
          searchedTracks,
          APIImage
        });
      },
      err => console.log('Something went wrong!', err)
    );
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
              <div className="container">
                <h2 style={{ textAlign: 'center'}}>Comin' to Spotify Soon! In the mean time, Check Out Our Recommendation...</h2>
                <div className="row" style={{ display:'flex', marginBottom: '25px' }}>
                  <p>First, login with Spotify:</p>
                  <a href="http://localhost:8080">
                    <button className="btn inlineButton">Login with Spotify</button>
                  </a>
                </div>
                <div className="row" style={{ display:'flex', marginBottom: '25px' }}>
                  <p>Third, check your spotify:</p>
                  {/* <button onClick={() => this.getNowPlaying()} className="btn inlineButton">
                    Check Now Playing
                  </button> */}
                  <button onClick={() => this.searchAPI()} className="btn inlineButton">
                    Search API
                  </button>
                </div>
                <div className="row" style={{ display:'flex', marginBottom: '25px' }}>
                  <p>Our Recommendation:  <strong>Punch Brothers</strong></p>
                </div>
                <div className="row" style={{ display:'flex', marginBottom: '25px' }}>
                  <img src={ this.state.APIImage } style={{ width: '280px' }}/>
                </div>
                <div className="row">
                  <ul>
                    { this.state.searchedTracks.map(track => (
                      <li style={{ fontSize:'20px', marginBottom:'20px' }}>{ track }</li>
                    )) }
                  </ul>
                </div>
              </div>
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
        </Switch>
      </Router>
    );
  }
}

export default App;
