import React from 'react';
import './Cart.css';

export default function Cart(props) {
    let items = props.items;
    var total = 0;
    for ( let i = 0; i < items.length; i++ ) {
        if(items[i].price) {
            let newPrice = (items[i].price).replace('$', '');
            newPrice = parseFloat(newPrice);
            total = total + newPrice;
        }
        total = Math.floor( total * 100 ) / 100;
    }
    return(
        <React.Fragment>
            <div className="container cartCont">
                <h2 className="pageHeaders">Cart</h2>
                { items.length > 0 ?
                  items.map(item => (
                    item.id ?
                    <div className="row" style={{ marginBottom:'25px' }}>
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
                { total > 0 ? <h2 className="pageHeaders">Total: ${ total }</h2> : '' }
                
            </div>
        </React.Fragment>
    )
}