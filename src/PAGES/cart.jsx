import React, { useState } from "react";
import '../CSS/cart.css';
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useSelector, useDispatch } from 'react-redux';
import { removeProductR } from "../store/cart.slice";

const Cart = () => {
    

    const dispatch = useDispatch()

    const [total, setTotal] = useState(0);
    const products = useSelector(state => state.cart.products) 
    
    console.log(products);

    const[quantity, setQuantity] = useState(1);
   
    const removeProduct = (index) => {
        dispatch(removeProductR({index}));
    };


    const handleDegrement = () => {
        if(quantity > 1){
            setQuantity(prevCount => prevCount - 1);
        }   
    }
    
    const handleIncrement = () => {
        if(quantity < 10){
        setQuantity(prevCount => prevCount + 1);
        }
    }
    


    //Price 
    React.useEffect(() => {
        const Subtotal = products
        .map((e) => e.price * e.quantity)
        .reduce((a, b) => a + b, 0);
        setTotal(Subtotal);
    }, [products]);


    return (
        <div id="cart-container">
              <Navbar></Navbar>
            <div className="padding">
            <div className="my-cart">
                <p className="my-cart-title">My Cart</p>
                <p className="item-count">{products.length} | Items</p>
            </div>

            <div className="cart-menu">
            <div className="cart-menu-1">
                <p className="produts-name">Products</p>
            </div>
            <div className="cart-menu-2">
                <p className="cart-price">Price</p>
                <p className="cart-quantity">Quantity</p>
                <p className="cart-total">Total</p>
                <p className="cart-remove">Remove</p>
            </div>
            </div>
           
            {products.map((item,i) => (
            <div className="cart-product" key={i}> 
                <div className="product-show">

                <img src={item.image} className="product-image" alt="item" />
                <p className="product-name-1">{item.name}</p>
                </div>
            <div className="price-value">
                <p className="product-price-1">&#8377;{item.price}</p>
                    <div className="quan-container">
                   <button className="add-button-" onClick={handleDegrement} ><i className="fa-solid fa-minus"></i></button>
                    <p className="product-quan-1 num">{quantity}</p>
                    <button className="add-button-"  onClick={handleIncrement}><i className="fa-solid fa-plus"></i></button> 
                    </div>
                <p className="product-total">&#8377;{item.price * quantity}</p>
                <div className="trash">
                <i className="fa-solid fa-trash" onClick={() => removeProduct(i)}></i>
                </div>
            </div>
            </div>
             ))}   

            <div className="buttons-container">
                <div className="con-bun">
                </div>
                <div className="flex-buttons">
                    <button className="clear">Clear Cart</button>
                    <Link to="/home"><button className="continue-button">Continue Shopping</button></Link>
                </div>
            </div>

            <div className="shipping-container">
                <div className="shipping-method">
                    <p className="method-heading">Shipping method</p>
                    <p className="select">Select one you want</p>

                    <div className="shipping-cost">
                    <div className="radio-container">
                    <input type="radio" name="method"></input>
                    <span className="radio-type">Next day delivery</span>
                    <p className="radio-amt">&#8377;300</p>
                    </div>

                    <div className="radio-container">
                    <input type="radio" name="method"></input>
                    <span className="radio-type">Standard delivery</span>
                    <p className="radio-amt">&#8377;80</p>
                    </div>

                    <div className="radio-container">
                    <input type="radio" name="method"></input>
                    <span className="radio-type">Personal Pickup</span>
                    <p className="radio-amt">Free</p>
                    </div>
                    </div>

                    <div className="coupen">
                    <p className="method-heading">Coupen Code</p>
                    <p className="select">Enter your coupen code</p>
                    <input type="text" placeholder="Code here"></input>
                    <button className="apply">Apply</button>
                    
                    </div>
                </div>

                <div className="shipping-total">
                    <p className="method-heading">Cart Total</p>
                    <p className="select">Final info</p>

                    <div className="shipping-list">
                        <div className="value-ship">
                            <p className="--">Subtotal</p>
                            <p className="-">&#8377; {total}</p>
                        </div>

                        <div className="value-ship">
                            <p className="--">Shipping</p>
                            <p className="-">&#8377; 80</p>
                        </div>

                        <div className="value-ship">
                            <p className="--">Total</p>
                            <p className="-">&#8377; {total + 80}</p>
                        </div>

                    <button className="address-button">Proceed to checkout</button>

                    </div>
                </div>
            </div>
            </div>
            <Footer></Footer>
            
        </div>
    )
}

export default Cart;










