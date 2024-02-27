import React from "react";
import '../CSS/menpage.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProductCard from "../components/productCart";
import API from "../API/api.service";

 
const Menpage = () => {

    const [menProducts, setMenProducts] = React.useState([]);

    React.useEffect(() => {
      API.get("products")
      .then((res) => {
          const menData = res.data.filter(product => product.gender === 'men');
          setMenProducts(menData);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
    },[])
         
    return (
        <div id="accs-container">
              <Navbar></Navbar>
        <div className="header-thumb-3">
            <p className="header-accs">man's</p>
        </div>

        <p className="collection-title">Men's Fashions</p>

        <div className="filter-container">
            <div className="filter-box">
                <p className="Cat">Size<i class="fa-solid fa-angle-down"></i></p>
                <p className="Cat">Price<i class="fa-solid fa-angle-down"></i></p>
            </div>
            
{menProducts.map((e,index) => (
               <ProductCard datas={e} key={e.id} i={index}></ProductCard>
          ))}

        </div>
        <Footer></Footer>
    </div>
    )
}

export default Menpage;