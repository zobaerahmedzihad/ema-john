import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faCartPlus } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = (props) => {
 
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div>
        <h3  className="product-name">{name}</h3>
        <br></br>
        <p>
          <small>By: {seller}</small>
        </p>
        <p>Price:$ {price}</p>
        <br></br>
        <p>
          <small>Only {stock} left in stok - Order soon.</small>
        </p>
        <button onClick = {() => props.handleAddProduct(props.product)} className ='btn-style '><FontAwesomeIcon icon={ faCartPlus }  /> Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
