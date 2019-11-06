import React, { Component } from 'react';
import './Video.css';

export class Video extends Component {
    render() {
        return (
            <div className="container">
                <div className="videoWrapper">
                    <iframe 
                        id={ this.props.id } 
                        src={ this.props.src }
                        frameborder='0'
                        allow='accelerometer'
                        autoplay 
                        encrypted-media 
                        gyroscope 
                        picture-in-picture 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        );
    }
}

export default Video;