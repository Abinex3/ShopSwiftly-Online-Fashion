import React from "react";
import "../CSS/home.css";
import blog1 from "../assets/blog1.png.webp";
import blog2 from "../assets/blog2.png.webp";
import blog3 from "../assets/blog3.png.webp";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import ProductCard from "../components/productCart";
import API from "../API/api.service";

const HomePage = () => {

  const [productCategory, setProductCategory] = useState([]);
 
  useEffect(() => {
    API.get("products")
    .then((res) => {
        const homeData = res.data.filter(product => product.category === 'best seller');
        setProductCategory(homeData);
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
  },[])

  console.log(productCategory);

  return (
    <div id="container">
      <Navbar></Navbar>
      <div id="home-container">
        <div className="home-content">
          <p className="collections">spring / winter collections</p>
          <p className="new-off">Get up to 30% Off New Arrivals</p>
          <Link to="/pageHeading">
            <button className="shopNow-button">shop now</button>
          </Link>
        </div>
      </div>

      <div className="gender-cat">
        <div className="clothes-genders">
          <div className="women">
            <Link to="/womenPage">
              <p className="heading">WOMEN'S</p>
            </Link>
          </div>

          <div className="accs">
            <Link to="/accs">
              <p className="heading">ACCESSORIES'S</p>
            </Link>
          </div>

          <div className="men">
            <Link to="/menpage">
              <p className="heading">MEN'S</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="new-arrival-container">
        <div className="new-heading">
          <p className="arrival">Best Sellers</p>
          <div></div>
        </div>


        <div className="new-products down">

          {productCategory.map((e,index) => (
               <ProductCard datas={e} key={e.id} i={index}></ProductCard>
          ))}

    <Link to="/pageHeading">
            <p className="shopNow down">Shop All&gt;&gt;</p>
          </Link>
         
        </div>

        <div className="new-products"></div>

        <div className="shipping-container">
          <div className="shipping-content">
            <i className="fa-solid fa-truck-front"></i>
            <div>
              <p className="shipping--title">FREE SHIPPING</p>
              <p className="shipping--sub">Suffered Alteration in Some Form</p>
            </div>
          </div>

          <div className="shipping-content">
            <i className="fa-solid fa-money-bill-1"></i>
            <div>
              <p className="shipping--title">CACH ON DELIVERY</p>
              <p className="shipping--sub">The Internet Tend To Repeat</p>
            </div>
          </div>

          <div className="shipping-content">
            <i className="fa-solid fa-rotate-right"></i>
            <div>
              <p className="shipping--title">45 DAYS RETURN</p>
              <p className="shipping--sub">Making it Look Like Readable</p>
            </div>
          </div>

          <div className="shipping-content">
            <i className="fa-solid fa-clock"></i>
            <div>
              <p className="shipping--title">OPENING ALL WEEK</p>
              <p className="shipping--sub">8AM - 09PM</p>
            </div>
          </div>
        </div>

        <div className="blog-container">
          <div className="new-heading">
            <p className="arrival">Blogs</p>
            <div></div>
          </div>

          <div className="blog-flex">
            <div className="blog--border">
              <img src={blog1} className="blog-thumb" alt="blog-1"></img>
              <p className="blog--title">
                The Richland Center Shooping News and weekly shooper
              </p>
              <p className="blog--sub">
                Let one fifth i bring fly to divided face for bearing divide
                unto seed. Winged divided light Forth.
              </p>
              <p className="read--more">
                Read More<i className="fa-solid fa-arrow-right"></i>
              </p>
            </div>

            <div className="blog--border">
              <img src={blog2} className="blog-thumb" alt="blog-2"></img>
              <p className="blog--title">
                The Shopping News also offers top-quality printing services
              </p>
              <p className="blog--sub">
                Let one fifth i bring fly to divided face for bearing divide
                unto seed. Winged divided light Forth.
              </p>
              <p className="read--more">
                Read More<i className="fa-solid fa-arrow-right"></i>
              </p>
            </div>

            <div className="blog--border">
              <img src={blog3} className="blog-thumb" alt="blog-3"></img>
              <p className="blog--title">
                Professional design staff and efficient equipment you’ll find we
                offer
              </p>
              <p className="blog--sub">
                Let one fifth i bring fly to divided face for bearing divide
                unto seed. Winged divided light Forth.
              </p>
              <p className="read--more">
                Read More<i className="fa-solid fa-arrow-right"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;