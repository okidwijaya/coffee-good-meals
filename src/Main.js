import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'; //Navigate
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistor} from './redux/store';
// import { connect } from "react-redux";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Product from './pages/product/Product';
import Home from './pages/main/Home';
import ProductList from './pages/productlist/productlist';
import Profile from './pages/profile/profile';
import InvalidRoute from './pages/redirects/InvalidRoute.js';
import UnAuthorize from './pages/redirects/UnAuthorize.js';
import Footer from './components/Footer';
import Signup from './pages/starter/Signup';
import Login from './pages/starter/Login';
import Forgotpassword from './pages/starter/ForgotPassword';
import Chat from './pages/Chat/Chat';
import RoomChat from './pages/Chat/RoomChat';
import Addproduct from './pages/admin/product/AddProduct';
import Editproduct from './pages/admin/product/EditProduct';
import Payment from './pages/payment';
import History from './pages/history';
import ProductFavourite from './components/ProductFavourite';
import ProductAddOn from './components/ProductAddOn';
import ProductCoffee from './components/ProductCoffee';
import ProductNonCoffee from './components/ProductNonCoffee';
import ProductFoods from './components/ProductFoods';
import ManageOrder from './pages/manageorder';
import Addpromo from './pages/admin/promo/AddPromo';
import Editpromo from './pages/admin/promo/EditPromo';
// import Dashboard from './pages/dashboard';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import AdminOnly from './components/AdminOnly';
import UserOnly from './components/UserOnly';
import Dashboard from './pages/admin/Dashboard';

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <ToastContainer />
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forgotpassword' element={<Forgotpassword />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route element={<AdminOnly />}>
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='add' element={<Addproduct />} />
              <Route path='edit' element={<Editproduct />} />
              <Route path='order' element={<ManageOrder />} />
              <Route path='addpromo' element={<Addpromo />} />
              <Route path='editpromo' element={<Editpromo />} />
            </Route>
            <Route path='dashboard' element={<Dashboard />} />
            <Route element={<UserOnly />}>
              <Route path='payment' element={<Payment />} />
            </Route>
            <Route path='profile' element={<Profile />} />
            <Route path='chat' element={<Chat />} />
            <Route path='room-chat' element={<RoomChat />} />
            <Route path='history' element={<History />} />
          </Route>

          <Route path='404' element={<InvalidRoute />} />
          <Route path='403' element={<UnAuthorize />} />
          <Route path='*' exact element={<Navigate to='404' />} />
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Product />}>
            <Route path='favourite' element={<ProductFavourite />} />
            <Route path='coffee' element={<ProductCoffee />} />
            <Route path='noncoffee' element={<ProductNonCoffee />} />
            <Route path='foods' element={<ProductFoods />} />
            <Route path='addon' element={<ProductAddOn />} />
          </Route>
          <Route path='product/detail/:id' element={<ProductList />} />
          {/* </Route> */}

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
