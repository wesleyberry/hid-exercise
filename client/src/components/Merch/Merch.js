import React from 'react';
import './Merch.css';

export default function Merch(props) {
    return(
        <div className="col-xs-12 col-md-6 outerBox">
            <div className="box">
                <div className="imgBox">
                    <img src={props.image} />
                </div>
                <div className="details">
                    <div className="content">
                        <h2>{ props.title }</h2>
                        <p>{ props.price }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}