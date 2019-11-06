import React, { useEffect, useState } from 'react';
import './Spotify.css';
import axios from 'axios';

function Spotify() {
    const [artists, setArtists] = useState([]);
    const [token, setToken] = useState([]);

    useEffect(() => {
        // fetchArtist();
    }, []);

    // async function fetchArtist() {
    //     let accessToken = await fetch('/api/token');

    //     let url = 'https://api.spotify.com/v1/search?q=bluegrass&type=artist&limit=6';
    //     console.log(accessToken);
    //     fetch(url, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${accessToken}`
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         setArtists(data.artists.items)
    //     }).catch(err => console.log(err));
    // }

    return (
        <div className="container">
            <div className="row">
                { artists.map(
                    (artist, index) => 
                     
                    <div key={ index } className="col-xs-12 col-md-6 col-lg-4 artistContainer">
                        <img src={ artist.images[0].url } alt={ artist.name } className="artistImage"/>
                        <p style={{ padding:'25px 0 0 0' }}>{ artist.name }</p>
                    </div>)}
                </div>
        </div>
    );
}

export default Spotify;