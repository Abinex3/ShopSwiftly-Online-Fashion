import React from "react";
import Navbar from "../components/navbar";
import ProductCard from "../components/productCart";
import API from "../API/api.service";
import Footer from "../components/footer";

const NewArrival = () => {


const [newArrivals, setNewArrivals] = React.useState([]);

    React.useEffect(() => {
      API.get("products")
      .then((res) => {
          const menData = res.data.filter(product => product.category === 'new arrival');
          setNewArrivals(menData);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
    },[])
         
    return (
        <div>
            <Navbar></Navbar>
            <div className="new-arrival-container">
        <div className="new-heading">
          <p className="arrival shop">New Arrivals</p>
          <div></div>
        </div>
        </div>

        {newArrivals.map((e,index) => (
     <ProductCard datas={e} key={e.id} i={index}></ProductCard>
))}
<Footer></Footer>
        </div>
    )
}

export default NewArrival;