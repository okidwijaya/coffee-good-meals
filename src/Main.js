import './App.css';
// import {Redirect} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'; //Navigate
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistor} from './redux/store';
// import { connect } from "react-redux";
// import { ToastContainer } from "react-toastify";

// import Footer from './components/footer';
// import Forgotpassword from './pages/starter/ForgotPassword.js';
import Product from './pages/product/Product';
import Home from './pages/main/Home';
import ProductList from './pages/productlist/productlist';
import Profile from './pages/profile/profile';
// import EditPassword from './components/editpassword/editpassword';
import InvalidRoute from './pages/redirects/InvalidRoute.js';
import Footer from "./components/Footer";
import Signup from "./pages/starter/Signup";
import Login from "./pages/starter/Login";
import Forgotpassword from "./pages/starter/ForgotPassword";
// import EditPassword from "./components/editpassword/editpassword";
// import ProductList from "./pages/productlist/productlist";
// import Profile from "./pages/profile/profile";
import Addproduct from './pages/admin/product/AddProduct';
import Editproduct from './pages/admin/product/EditProduct';
import Payment from './pages/payment';


function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Routes>
          <Route path='404' element={<InvalidRoute />} />
          <Route path='*' exact element={<Navigate to='404' />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/products" element={<Product />} />
          <Route path="profile" element={<Profile />} />
            {/* <Route path="edit-password" element={<EditPassword />}/>
          </Route> */}
          <Route path="/product/detail" element={<ProductList />} />
          <Route path="/add"  element={<Addproduct />} />
          <Route path="/edit"  element={<Editproduct />} />
          <Route path="/payment" element={<Payment />} />
          {/* 
    <Router>
      <Routes>
        <Route path="/register" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/forgotpassword" element={<Forgotpassword />}/>
        <Route path="/products" element={<Product />}/> 
        <Route path="/products/list" element={<ProductList />}/>
        <Route path="/profile" element={<Profile />} />
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
