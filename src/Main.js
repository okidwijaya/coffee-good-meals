import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //Navigate
import Footer from "./components/footer";
import Signup from "./pages/starter/Signup";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
