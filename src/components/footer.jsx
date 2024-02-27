import React from "react";
import "../CSS/footer.css";

const Footer = () => {
  return (
    <div id="footer-container">
      <p className="e-name">
        Shop<span className="span-nav">Swiftly</span>
      </p>

      <div className="nav--flex">
        <div className="nav--list i">
          <p className="nav---list">Home</p>
          <p className="nav---list">Clothes</p>
          <p className="nav---list">Accessories</p>
          <p className="nav---list">Contacts</p>
        </div>

        <div className="nav--list ii">
          <p className="nav---list">FAQ</p>
          <p className="nav---list">Shipping & Returns</p>
          <p className="nav---list">Store Policy</p>
          <p className="nav---list">Payment Methods</p>
        </div>

        <div className="nav--list iii">
          <p className="nav---list">Instagram</p>
          <p className="nav---list">Pinterest</p>
          <p className="nav---list">Facebook</p>
          <p className="nav---list">Twitter</p>
        </div>

        <div className="nav--list vi">
        <i className="fa-brands fa-pinterest"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fa-brands fa-facebook"></i>
          </div>

        <div className="nav--list v">
          <p className="nav----list">Join our mailing list</p>
          <p className="nav--list-">and get 10% off</p>
          <input
            type="text"
            placeholder="Enter your email here*"
            className="nav--input"
          />
          <br />
          <button className="nav-list--button">Subscribe Now</button>
        </div>
      </div>
      <p className="credits">Designed by &#10084; Abinesh</p>
    </div>
  );
};

export default Footer;
