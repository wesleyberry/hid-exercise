import React, { useEffect, useState } from 'react';
import './Spotify.css';
import axios from 'axios';

function Spotify() {
    const [artists, setArtists] = useState([]);
    const [token, setToken] = useState([]);

    useEffect(() => {

    }, []);


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