import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //Navigate
import { PersistGate } from "redux-persist/es/integration/react";
import { persistor } from "./redux/store";
// import { connect } from "react-redux";

import Footer from "./components/footer";
import Signup from "./pages/starter/Signup";
import Login from "./pages/starter/Login";

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </PersistGate>
  );
}

export default App;
