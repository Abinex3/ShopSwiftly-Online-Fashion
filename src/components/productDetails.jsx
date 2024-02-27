import { useState } from "react";
import React from "react";
import '../CSS/productDetails.css';
import Navbar from "./navbar";
import Footer from "./footer";
import { useParams, useNavigate } from "react-router-dom";
import { addToCartR } from "../store/cart.slice";
import {useDispatch} from 'react-redux';
import API from "../API/api.service";

const ProductDetails = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const [quantity, setQuantity] = useState(1);    //Increase" quantity"
    const [productView, setProductView] = useState(null);  //fetch product data
    // Product increment and decrement
    const handleDegrement = () => {
        if (quantity > 1) {
            setQuantity(prevCount => prevCount - 1);
        }
    }

    const handleIncrement = () => {
        if (quantity < productView.quantity) {
            setQuantity(prevCount => prevCount + 1);
        }
    }
    // -------------------------------------

    const {productId} = useParams(); 

    React.useEffect(() => {
        API.getById('products', productId)
        .then((res) => {
            setProductView(res.data);
            
        })
        .catch((err) => {
            console.error("Error fetching data:", err);
        })
    }, [productId]);


    const addToCart = (product) => {
        console.log(product);
        dispatch(addToCartR(productView))
        navigate('/cart')
    }


    

  


    return (
        <>
        <div>
            <Navbar></Navbar>
            <div id="productDetails-container">
                {productView ? (
                <div className="product-flex">
                    <div className="product-details">
                        <img src={productView.image} className="product-image-1" alt="view"></img>
                    </div>


                    <div className="product--details">
                        <p className="product-name--">{productView.name}</p>
                        <p className="product--sub">{productView.subName}</p>
                        <p className="product--desc">{productView.description}</p>
                        <p className="product--price">MRP &#8377;{productView.price}<span className="tax">Inclusive of all taxes</span></p>
                        <p className="product--size">Size:</p>
                        <div className="size-container">
                            <input type="radio" name="size" id="small" />
                            <label className="sizelabel" htmlFor="small">S</label>
                            <input type="radio" name="size" id="medium" />
                            <label className="sizelabel" htmlFor="medium">M</label>
                            <input type="radio" name="size" id="large" />
                            <label className="sizelabel" htmlFor="large">L</label>
                            <input type="radio" name="size" id="x-large" />
                            <label className="sizelabel" htmlFor="x-large">XL</label>
                        </div>
                        

                        <p className="product--size">Quantity:</p>
                        <div className="quan--container">
                            <button className="add-button" onClick={handleDegrement}><i className="fa-solid fa-minus"></i></button>
                            <p className="product-quan-1">{quantity}</p>
                            <button className="add-button" onClick={handleIncrement}><i className="fa-solid fa-plus"></i></button>
                        </div>

                        <button className="add--card" onClick={() => addToCart(productView)}>Add To Card</button>
                    </div>
                
                </div>
                ) : (
                    <p>Loading...</p>
            )}
            </div>
            <Footer></Footer>
        </div>
        </>
    )
}

export default ProductDetails;