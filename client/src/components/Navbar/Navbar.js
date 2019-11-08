import React from 'react';
import { NavLink } from 'react-router-dom';
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
                            <NavLink className="nav-link" to={ "/" } exact activeClassName={'active'}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={ "/music" } exact activeClassName={'active'}>Music</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={ "/tour" } exact activeClassName={'active'}>Tour</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={ "/shop" } exact activeClassName={'active'}>Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={ "/cart" } exact activeClassName={'active'}> Cart</NavLink>
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