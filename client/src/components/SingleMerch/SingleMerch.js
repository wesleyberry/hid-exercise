import React from 'react';
import './SingleMerch.css';
import { NavLink } from 'react-router-dom';

export default function SingleMerch(props) {
    let url_id = props.match.params.id;
    let items = props.items;
    return (
        <React.Fragment>
            { items.map(item => (
                item.id === url_id ? 
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xs-12 col-md-6 col1">
                                    <img src={ item.image } alt={ item.title } className="smImage"/>
                                </div>
                                <div className="col-xs-12 col-md-6 col2">
                                    <h1 className="smTitle">{ item.title }</h1>
                                    <h2 className="smPrice">{ item.price }</h2>
                                    <button onClick={ props.action} className="btn inlineButton" id={ item.id }>Add to Cart</button>
                                    <NavLink className="btn goToCart" to={ '/cart' } >Go To Cart</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                : ''
            )) }
        </React.Fragment>
    )
}