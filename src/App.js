import Cart from "./PAGES/cart";
import HomePage from "./PAGES/home";
import Login from "./USERS/login";
import WomenPage from "./PAGES/womenPage";
import Accs from "./PAGES/accs";
import Menpage from "./PAGES/menpage";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/productDetails";
import NewArrival from "./PAGES/newArrival";
import Title from "./components/pageHeading";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="/shopnow" element={<shopNow></shopNow>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/womenPage" element={<WomenPage></WomenPage>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/menpage" element={<Menpage></Menpage>}></Route>
        <Route path="/accs" element={<Accs></Accs>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/productDetails/:productId"element={<ProductDetails></ProductDetails>}></Route>
        <Route path="/pageHeading" element={<Title></Title>}></Route>
        <Route path="/newArrival" element={<NewArrival></NewArrival>}></Route>
      </Routes>
    </div>
  );
}

export default App;
