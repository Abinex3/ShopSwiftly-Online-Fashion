import React from "react";
import "../components/productCart.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {


  return (
    <div id="product-cart-container">
      <div className="cart--flex">
        <div className="product--cart">
          <img src={props.datas.image} className="product-thumb thumb-1" alt="dataims"/>
        </div>

        <div className="cart-desc">
          <Link to={"/productDetails/" + props.datas.id} key={props.i}>
            <p className="product-name">{props.datas.name}</p>
          </Link>

          <div className="amt-div">
            <p className="product-price">&#8377;{props.datas.price}</p>
            <p className="discount-amt">{props.datas.discount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
