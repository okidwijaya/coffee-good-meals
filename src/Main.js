import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //Navigate
import Footer from "./components/footer";
import Signup from "./pages/starter/Signup";
import Login from "./pages/starter/Login";
import Forgotpassword from "./pages/starter/ForgotPassword";
import Product from "./pages/product/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/forgotpassword" element={<Forgotpassword />}/>
        <Route path="/products" element={<Product />}/> 
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
  );
}

export default App;
