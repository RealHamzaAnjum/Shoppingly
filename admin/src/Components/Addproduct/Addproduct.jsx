import React, { useState } from 'react';
import './Addproduct.css';
import upload from "../../assets/uploadimg.webp";

const Addproduct = () => {
  const [img, setImg] = useState(false); 
  const [productDetail, setProductDetail] = useState({
    name: "",
    image: "",
    category: 'women',
    new_price: '',
    old_price: ''
  });

  const imgHandler = (e) => {
    setImg(e.target.files[0]);
  }

  const changeHandler = (e) => {
    setProductDetail({ ...productDetail, [e.target.name]: e.target.value });
  }

  const add_Product = async () => {
    if (!img) {
      alert("Please select an image to upload.");
      return;
    }

    let responseData;
    let product = productDetail;

    let formData = new FormData();
    formData.append('images', img); 

    try {
      const response = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      }).then((response)=>response.json()).then((data)=>{responseData=data})

      if (responseData.success) {
        product.image = responseData.Image_url;
        setProductDetail(product);
        console.log(product);
        alert("Product added successfully!");

        // /add img to mongodb
        let result = await fetch("http://localhost:4000/addproduct", {
          method: "post",
          body: JSON.stringify(product),
          headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
          },
        });
        result = await result.json();
        console.log(result);
  }

      
    } catch (error) {
      console.error("Error uploading the image:", error);
      alert("An error occurred while uploading the image.");
    }
  }

  return (
    <div className='add-product container'>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="addproduct-items">
            <p>Product title</p>
            <input
              value={productDetail.name}
              onChange={changeHandler}
              type='text'
              name="name"
              className="form-control"
              placeholder='Type here'
            />
          </div>
          <div className="addproduct-itemfield">
            <p>Price</p>
            <input
              value={productDetail.old_price}
              onChange={changeHandler}
              type='text'
              name='old_price'
              className="form-control"
              placeholder='Type here'
            />
          </div>
          <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input
              value={productDetail.new_price}
              onChange={changeHandler}
              type='text'
              name='new_price'
              className="form-control"
              placeholder='Type here'
            />
          </div>
          <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select
              name='category'
              value={productDetail.category}
              onChange={changeHandler}
              className='form-select add-product-selector'
            >
              <option value="women">Women</option>
              <option value="Men">Men</option>
              <option value="kid">Kid</option>
            </select>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 text-center">
          <div className="addproduct-itemfield">
            <label htmlFor='file-input'>
              <img
                src={img ? URL.createObjectURL(img) : upload}
                className='addproduct-img img-fluid'
                alt="Upload"
              />
            </label>
            <input onChange={imgHandler} type="file" name='image' id='file-input' hidden />
          </div>
          <button onClick={add_Product} className='addproduct-button btn btn-primary'>ADD</button>
        </div>
      </div>
    </div>
  );
}

export default Addproduct;
