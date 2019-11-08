import React, { Component } from 'react';
import './Merch.css';
import { NavLink } from 'react-router-dom';

export class Merch extends Component {

    render() {
        const props = this.props;
        return(
            <div className="col-xs-12 col-md-6 outerBox">
                <div className="box">
                    <NavLink to={ `/shop/${props.id}` }>
                        <div className="imgBox">
                            <img src={props.image} />
                        </div>
                        <div className="details">
                            <div className="content">
                                <h2>{ props.title }</h2>
                                <p>{ props.price }</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        )
    }  
}

export default Merch;