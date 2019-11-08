import React from 'react';
import './Cart.css';

export default function Cart(props) {
    let items = props.items;
    console.log(items);
    return(
        <React.Fragment>
            <div className="container cartCont">
                <h2 className="pageHeaders">Cart</h2>
                { items.length > 0 ?
                  items.map(item => (
                    item.id ?
                    <div className="row">
                        <div className="col-xs-6 col-md-4 cartCont">
                            <img src={ item.image } alt={ item.title} className="cartImage"/>
                        </div>
                        <div className="col-xs-6 col-md-4">
                            <h2>{ item.title }</h2>
                        </div>
                        <div className="col-xs-6 col-md-4">
                            <h2>{ item.price }</h2>
                        </div>
                    </div>
                    : ''
                )) :
                <h2 className="pageHeaders">Cart Is Empty</h2>
                }
            </div>
        </React.Fragment>
    )
}