import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import imgProfile from "../../assets/profile-bg.png";

// export default
function NavActive(props) {
  const [searchParams] = useSearchParams();
  const [keyword, setKeyword] = useState("");
  const host = process.env.REACT_APP_HOST;
  const photo = host + "/" + props.image;
  const location = useLocation();
  console.log("photo", photo);
  const [image, setImage] = useState(photo);
  console.log("props:", props.image);
  useEffect(() => {
    console.log(typeof image);
    if (image === null) {
      console.log("null");
      setImage(imgProfile);
    }
  }, [image]);
  useEffect(() => {
    setKeyword(searchParams.get("keyword") || "");
  }, [location.search]);
  console.log("nav location", location);
  return (
    <>
      <button className="btn btn-profile-nav">
        <Link to="/profile">
          <img
            src={image}
            className="profile-img-nav"
            alt="chat icon"
            onError={({ currentTarget }) => {
              console.log(currentTarget);
              currentTarget.onerror = null;
              currentTarget.src = require("../../assets/avatar.jpg");
            }}
          />
        </Link>
      </button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    image: state.auth.userData.photo,
  };
};
export default connect(mapStateToProps)(NavActive);
