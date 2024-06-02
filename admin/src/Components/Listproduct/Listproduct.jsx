import React, { useEffect, useState } from 'react'
import './Lisproduct.css'
import crossicon from "../../assets/cart_cross_icon.png";
import { Link } from 'react-router-dom';
const Listproduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  // /function to fetch  the data//////
  const fetchInfo = async ()=>{
    let result = await fetch('http://localhost:4000/allproducts');
    result = await result.json();
    setAllProducts(result);

  }
  useEffect(()=>{
    fetchInfo();
  },[])

  // ////delet product with id////
  const deleteProduct =async(id)=>{
    console.log(id);
    let result =await fetch(`http://localhost:4000/removeproduct/${id}`,{
        method:"Delete"

    });
    result =await result.json();
    if(result){
      fetchInfo();
    }
};
  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format">
        <p>Product</p>
        <p>Title</p>
        <p>Old price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-all">
        <hr />
        {/* //list all product from mongodb here */}
        {allproducts.map((product,index)=>{
          return <> <div key={index} className="listproduct-format  listproduct-main">
            <img src={product.image} alt="" className="listproduct-producticon w-50" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <li className="update-link d-flex align-items-center">
            <img className='listproduct-removeitem' src={crossicon} onClick={()=>deleteProduct(product._id)}/>
            <p><Link to={'/update/'+ product._id}>update</Link></p>
            </li>
          </div>
          <hr />
          </>

        })}
      </div>

      
    </div>
  )
}

export default Listproduct
