import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; //Navigate
import { PersistGate } from "redux-persist/es/integration/react";
import { persistor } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/main/Home";
import Profile from "./pages/profile/profile";
import InvalidRoute from "./pages/redirects/InvalidRoute.js";
import UnAuthorize from "./pages/redirects/UnAuthorize.js";
import Signup from "./pages/starter/Signup";
import Login from "./pages/starter/Login";
import Forgotpassword from "./pages/starter/ForgotPassword";
import History from "./pages/history";
import Booking from "./pages/booking/booking";
import PublicRoute from "./components/PublicRoute";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ScrollToTop />
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpassword" element={<Forgotpassword />} />
          </Route>
          <Route path="history" element={<History />} />
          <Route path="profile" element={<Profile />} />

          <Route path="404" element={<InvalidRoute />} />
          <Route path="403" element={<UnAuthorize />} />
          <Route path="*" exact element={<Navigate to="404" />} />
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Router>
    </PersistGate>
  );
}

export default App;
