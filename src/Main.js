import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //Navigate
import Footer from "./components/footer";
import Signup from "./pages/starter/Signup";
import Login from "./pages/starter/Login";
import Forgotpassword from "./pages/starter/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/forgotpassword" element={<Forgotpassword />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
