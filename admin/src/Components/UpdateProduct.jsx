import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import upload from "../assets/uploadimg.webp";

const UpdateProduct = () => {
    const [img, setImg] = useState(false); 
    const [productDetail, setProductDetail] = useState({
        name: "",
        image: "",
        category: 'women',
        new_price: '',
        old_price: ''
      });
    const navigate = useNavigate();
  
    // /////////for prefil the data by getting id
    const param = useParams();
    useEffect(() => {
      getProductdInfo();
    }, []);
  
      
  const imgHandler = (e) => {
    setImg(e.target.files[0]);
  }

  const changeHandler = (e) => {
    setProductDetail({ ...productDetail, [e.target.name]: e.target.value });
  }

    const getProductdInfo = async () => {
      let result = await fetch(`http://localhost:4000/product/${param.id}`);
      result = await result.json();
      // Prefill the product details
      setProductDetail({
        name: result.name,
        image: result.image,
        category: result.category,
        new_price: result.new_price,
        old_price: result.old_price
    });
    };

    const uploadImage = async () => {
        const formData = new FormData();
        formData.append("image", img);
    
        let result = await fetch('http://localhost:4000/upload', {
          method: "POST",
          body: formData,
        });
    
        result = await result.json();
        return result.Image_url;
      }
    
    
    const UpdateProducts = async () => {
        let imageUrl = productDetail.image;

          
    if (img) {
        imageUrl = await uploadImage();
      }
  
      const updatedProductDetail = {
        ...productDetail,
        image: imageUrl,
      };


        console.log(updatedProductDetail);
        // //update values in inputs
        let result = await fetch(`http://localhost:4000/product/${param.id}`, {
          method: "PUT", 
          body: JSON.stringify(updatedProductDetail),
          headers: {
            "Content-Type": "application/json", 
          },
        });
        result = await result.json();
        if (result) {
          //after update navigate to list
          navigate("/listproduct");
        }
      };
      
 
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
                src={img ? URL.createObjectURL(img) : productDetail.image}
                className='addproduct-img img-fluid'
                alt="Upload"
              />
            </label>
            <input onChange={imgHandler} type="file" name='image' id='file-input' hidden />
          </div>
              <button onClick={UpdateProducts} className='addproduct-button btn btn-primary'>Update</button>
          </div>
        </div>
        </div>
      );
    }

export default UpdateProduct
