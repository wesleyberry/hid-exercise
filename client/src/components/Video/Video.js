import React, { Component } from 'react';
import './Video.css';

export class Video extends Component {
    render() {
        return (
            <div className="container">
                <div className="videoWrapper">
                    <iframe 
                        title={ this.props.title }
                        id={ this.props.id } 
                        src={ this.props.src }
                        frameBorder='0'
                        allow='accelerometer'
                        autoPlay 
                        encryptedmedia="true" 
                        gyroscope="true"
                        picture-in-picture="true" 
                        allowFullScreen={ true }>
                    </iframe>
                </div>
            </div>
        );
    }
}

export default Video;