import React from 'react';
import './RelatedProduct.css';
import data_product from '../../Assets/data';
import Item from '../Item';

const RelatedProduct = ({ productId }) => {
  return (
    <div className="relatedproduct container">
      <h1 className="text-center">Related Products</h1>
      <hr/>
      <div className="row">
        {data_product.map((item, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Item 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProduct;
