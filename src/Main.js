import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //Navigate
import { PersistGate } from "redux-persist/es/integration/react";
import { persistor } from "./redux/store";
// import { connect } from "react-redux";

import Footer from "./components/Footer";
import Signup from "./pages/starter/Signup";
import Login from "./pages/starter/Login";
import Forgotpassword from "./pages/starter/ForgotPassword";
import Product from "./pages/product/Product";
import ProductList from "./pages/productlist/productlist";


function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
    <Router>
      <Routes>
        <Route path="/register" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/forgotpassword" element={<Forgotpassword />}/>
        <Route path="/products" element={<Product />}/> 
        <Route path="/products/list" element={<ProductList />}/>
{/* 
        <Route path="products" element={<Products />}>
          <Route path="search" element={<Search />} />
          <Route path="favourite" element={< />} />
          <Route path="coffee" element={< />} />
          <Route path="noncoffee" element={< />} />
          <Route path="foods" element={< />} />
          <Route path=":id" element={<ProductDisplay />} />
          
          <Route path="add" element={<AddProduct />} />
          <Route path="addCoupon" element={<AddProduct />} />
        </Route> */}

      </Routes>
      <Footer />
    </Router>
    </PersistGate>

  );
}

export default App;