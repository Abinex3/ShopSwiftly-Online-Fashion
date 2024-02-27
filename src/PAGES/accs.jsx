import React from "react";
import '../CSS/accs.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProductCard from "../components/productCart";
import API from "../API/api.service";

const Accs = () => {

    const [accsProducts, setAccsProducts] = React.useState([]);

    React.useEffect(() => {
      API.get("products")
      .then((res) => {
          const accsData = res.data.filter(product => product.gender === 'accs');
          setAccsProducts(accsData);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
    },[])
    return (
        
        <div id="accs-container">
            <Navbar></Navbar>
            <div className="header-thumb-1">
                <p className="header-accs">Accessories</p>
            </div>

            <p className="collection-title">Accs's style</p>

            <div className="filter-container">
                <div className="filter-box">
                    <p className="Cat">Categories<i class="fa-solid fa-angle-down"></i></p>
                    <p className="Cat">Price<i class="fa-solid fa-angle-down"></i></p>
                </div>

                {accsProducts.map((e,index) => (
               <ProductCard datas={e} key={e.id} i={index}></ProductCard>
          ))}

            </div>
            <Footer></Footer>
        </div>
    )
}

export default Accs;