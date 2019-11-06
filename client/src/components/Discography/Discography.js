import React from 'react';
import OakTreeSpecial from '../../Images/oak_tree_special.png';
import './Discography.css';

function Discography(props) {
    const tracks = props.tracks;
    return(
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-6 col-lg-4 imageContainer">
                    <img src={ OakTreeSpecial } alt="Oak Tree Special" className="trackImage"/>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-8 trackRow">
                    { tracks.map(track => (
                        <div className="row singleRow">
                            <div className="col-6"><p style={{ textAlign:'center', marginTop:'1rem'}}><i>{ track.title }</i></p></div>
                            <div className="col-6"><p style={{ textAlign:'center', marginTop:'1rem' }}>{ track.time }</p></div>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    );
}

export default Discography;