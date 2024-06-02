import React from 'react';
import './Breadcrums.css';
import arrow_icon from '../../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const { product } = props;
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 breadcrum d-flex flex-wrap align-items-center">
                    <div className="breadcrum-item">HOME</div>
                    <img className="breadcrum-icon" src={arrow_icon} alt='' />
                    <div className="breadcrum-item">SHOP</div>
                    <img className="breadcrum-icon" src={arrow_icon} alt='' />
                    {product.category && (
                        <>
                            <div className="breadcrum-item">{product.category}</div>
                            <img className="breadcrum-icon" src={arrow_icon} alt='' />
                        </>
                    )}
                    {product.name && <div className="breadcrum-item">{product.name}</div>}
                </div>
            </div>
        </div>
    );
}

export default Breadcrum;
