import React, { useEffect, useState } from 'react';
import './Newcollection.css';
import Item from '../Item';

const Newcollection = () => {
  const [newcollection, setNewCollection] = useState([]);

  const getProducts= async ()=>{
    let result = await fetch('http://localhost:4000/newcollection');
    result = await result.json();
    setNewCollection(result);
}

  // fetch all product from mongodb
  useEffect(()=>{
    getProducts();
 }, [])


  return (
    <div className="new-collection container">
      <h1 className="text-center my-4">NEW COLLECTIONS</h1>
      <hr/>
      <div className="row">
        {newcollection.map((item, i) => (
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

export default Newcollection;
