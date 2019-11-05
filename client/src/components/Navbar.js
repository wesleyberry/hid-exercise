import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <React.Fragment>
            <h1 className="mainHeader">Squirrel Whisperers</h1>
            <nav className="navbar navbar-expand-md navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Music</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tour</a>
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
                <i className="fa fa-itunes"></i>
            </div>
        </React.Fragment>
    );
}