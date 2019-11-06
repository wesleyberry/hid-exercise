import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import imageHeader from '../../Images/Squirrel_Whisperers.png';

export default function Navbar() {
    return (
        <React.Fragment>
            <div className="container headerContainer">
                <img src={ imageHeader } alt="Squirrel Whisperers" id="headerImage"/>
            </div>
            <nav className="navbar navbar-expand-md navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="music">Music</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="shop">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="tour">Tour</Link>
                    </li>
                    </ul>
                </div>
            </nav>
            <div className="socialContainer">
                <i className="fa fa-facebook-f"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-youtube"></i>
                <i className="fa fa-soundcloud"></i>
                <i className="fa fa-spotify"></i>
            </div>
        </React.Fragment>
    );
}