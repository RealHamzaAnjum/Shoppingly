import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Assets/dropdown_icon.png';
import Item from '../Components/Item';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    return (
        <div className="shop-category container">
            <img 
                className="img-fluid my-4" 
                src={props.banner} 
                alt='' 
            />
            <div className="shopcategory-indexSort row">
                <div className="col-12 col-md-6">
                    <p>
                        <span>Showing 1-12</span> out of 36 Products
                    </p>
                </div>
                <div className="col-12 col-md-6 text-md-right">
                    <div className="shopcategory-sort">
                        sort by <img src={dropdown_icon} alt=''/>
                    </div>
                </div>
            </div>
            <div className="shopcategory-products row">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={i}>
                                <Item 
                                    id={item.id} 
                                    name={item.name}
                                    image={item.image} 
                                    new_price={item.new_price} 
                                    old_price={item.old_price} 
                                    category={item.category}
                                />
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore text-center my-4">
                <button className="btn btn-primary">Explore More</button>
            </div>
        </div>
    );
}

export default ShopCategory;
