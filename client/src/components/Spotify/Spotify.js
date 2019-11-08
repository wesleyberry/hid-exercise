import React, { Component } from 'react';
import './Spotify.css';
import SpotifyAPI from 'spotify-web-api-js';

const spotifyWebApi = new SpotifyAPI();

class Spotify extends Component {
    state = {
        searchedTracks: [],
        APIImage: ''
    };

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
    
      searchAPI() {
        spotifyWebApi.searchTracks('artist:Punch Brothers').then(
          data => {
            let searchedTracks = [];
            for( let i = 0; i < 5; i++) {
              searchedTracks.push({ name: data.tracks.items[i].name, preview_url: data.tracks.items[0].preview_url });
            }
            let APIImage = data.tracks.items[0].album.images[0].url;
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
            <div className="container-fluid SpotifyContainer">
            <div className="container SpotifySubContainer">
              <h2 className="SpotifyHeader">Comin' to Spotify Soon!</h2>
              <div className="row">
                <p>In the mean time, check out this band. Punch Brothers has been an inspiration to us and our music.</p>
              </div>
              <div className="row" >
                <p>First, login with Spotify:</p>
                <a href="http://localhost:8080">
                  <button className="btn inlineButton">Login with Spotify</button>
                </a>
              </div>
              <div className="row" >
                <p>Second, check Spotify:</p>
                <button onClick={() => this.searchAPI()} className="btn inlineButton">
                  Search API
                </button>
              </div>
              <div className="row" >
                <p>Our Recommendation:  <strong>Punch Brothers</strong></p>
              </div>
              <div className="row" >
                <div className="col-xs-12 col-md-6">
                  <img src={ this.state.APIImage } style={{ width: '280px', marginBottom: '25px' }}/>
                </div>
                <div className="col-xs-12 col-md-6">
                { this.state.searchedTracks.length > 1 ? <p>Click any of these song names for a preview (will open a new tab in the browser) </p> : ''}
                <ul>
                  { this.state.searchedTracks.map(track => (
                    <React.Fragment>
                      <li>
                        <a href={ track.preview_url } rel='noopener' target="_target">
                          {track.name}
                        </a>
                      </li>
                    </React.Fragment>
                  )) }
                </ul>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Spotify;