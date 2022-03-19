import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";
import coffee from "../../assets/coffee.png";
// import notFoundBg from "../../assets/loading-coffee.gif";
import Navactive from "../../components/navigation/Nav";

function InvalidRoute() {
  return (
    <>
      <Navactive />
      {/* <div className="invalid-main"> */}
      {/* <div className="row mx-0 my-0 wrapper text-center">
          <div className="col-12">
            <h1>404</h1>
          </div>
        </div> */}
      <div className="row nfWrapper">
        <div className="col-12 col-sm-12 titleNotFoundImg">
          <div className="row mx-auto">
            <img src={coffee} alt="" className="coffee" />
          </div>
        </div>
        <div className="col-12 col-sm-12 titleNotFound">
          <div className="row mx-0 my-0 wrapper text-center">
            <div className="col-12">
              <h1>404</h1>
            </div>
          </div>
          <h2>WHOOPS!</h2>
          <p>We can't find the page you're looking for.</p>
          <Link to="/">
            <button className="button-404 px-3 py-2 mb-5">Go to Home</button>
          </Link>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}

export default InvalidRoute;
