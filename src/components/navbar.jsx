import React, { useState } from "react";
import "../CSS/navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const cartItems = useSelector((state) => state.cart.products);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <div id="nav-container">
      <nav>
        <div className="company-name">
          <Link to="/home">
            <p className="e-name">
              Shop<span className="span-nav">Swiftly</span>
            </p>
          </Link>
          <div className="search-bar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="list-logo">
          <ul className={showMenu ? "menu active" : "menu"}>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/menpage">Men's</Link>
            </li>
            <li>
              <Link to="/womenPage">Women's</Link>
            </li>
            <li>
              <Link to="/accs">Accessories</Link>
            </li>
            <li>
              <Link to='/newArrival'>New Arrivals</Link>
            </li>
          </ul>

          <div className="nav-icons">
            <Link to="/Login">
              <i className="fa-regular fa-user"></i>
            </Link>
            <Link to="/Cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <button className="burger-menu" onClick={toggleMenu}>
              <i className="fa-solid fa-bars"></i>
            </button>
            <p className="product-count">{cartItems.length}</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
