import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 item">
            <Link to={`/Product/${props.id}`}>
                <img src={props.image} alt={props.name} onClick={() => window.scrollTo(0, 0)} />
            </Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${props.new_price}
                </div>
                <div className="item-price-old">
                    ${props.old_price}
                </div>
            </div>
        </div>
    );
}

export default Item;
