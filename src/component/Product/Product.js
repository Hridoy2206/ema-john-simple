import React from "react";
import "./Product.css";

const Product = (props) => {
  // console.log(props)
  const { name, img, seller, price, stock, } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <h4 className="product-name">{name} </h4>
        <p><small>By{seller} </small></p>
        <h4>$ {price}</h4>
        <p><small>only {stock} left in stock -order soon</small></p>
        <button
        onClick={()=>props.handleAddProduct(props.product)}
         className="add-to-cart"
         > add to cart</button>
      </div>
    </div>
  );
};

export default Product;
