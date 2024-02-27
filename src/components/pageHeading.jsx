import React from "react";
import '../CSS/shopAll.css';
import Navbar from "../components/navbar";
import API from "../API/api.service";
import ProductCard from "../components/productCart";
import Footer from "../components/footer";

const Title = () => {

    const [products, setProduct] = React.useState([]);
 
    React.useEffect(() => {
      API.get("products")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
    },[])
  
    console.log(products);
  
    return (
        <div id="title-component">
        <Navbar></Navbar>
        <div className="new-arrival-container">
        <div className="new-heading">
          <p className="arrival shop">Shop All</p>
          <div></div>
        </div>
        </div>


        <div className="new-products">

{products.map((e,index) => (
     <ProductCard datas={e} key={e.id} i={index}></ProductCard>
))}

</div>
<Footer></Footer>
        </div>
    )
}
export default Title;