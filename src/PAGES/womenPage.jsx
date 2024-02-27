import React, { useState } from "react";
import '../CSS/womenPage.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProductCard from "../components/productCart";
import API from "../API/api.service";


const WomenPage = () => {

    const [womenProducts, setWomenProducts] = useState([]);

  React.useEffect(() => {
    API.get("products")
    .then((res) => {
        const womenData = res.data.filter(product => product.gender === 'women');
        setWomenProducts(womenData);
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
  },[])
       

    return (
        <div id="cart-container">
              <Navbar></Navbar>
            <div className="header-thumb">
                <p className="header-women">Woman</p>
            </div>

            <p className="collection-title">Women's Fashions</p>

            <div className="filter-container">
                <div className="filter-box">
                    <p className="Cat">Size<i class="fa-solid fa-angle-down"></i></p>
                    <p className="Cat">Price<i class="fa-solid fa-angle-down"></i></p>
                </div>
 
                {womenProducts.map((e,index) => (
               <ProductCard datas={e} key={e.id} i={index}></ProductCard>
          ))}
               
            </div>
            <Footer></Footer>
        </div>
    )
}

export default WomenPage;
