import React, {useEffect, useState } from 'react';
import './Popular.css';
import Item from '../../Components/Item';

const Popular = () => {
  const [popularproducts, setPopularProducts] = useState([]);

  const getProducts= async ()=>{
    let result = await fetch('http://localhost:4000/womwnpopular');
    result = await result.json();
    setPopularProducts(result);
}

  // fetch all product from mongodb
  useEffect(()=>{
    getProducts();
 }, [])

  return (
    <div className="Popular container">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="row">
        {popularproducts.map((item, i) => (
          <div key={i} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 ">
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
};

export default Popular;
