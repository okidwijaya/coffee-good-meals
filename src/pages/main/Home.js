import React from "react";
import "./style.css";
import homeBg from "../../assets/home-bg.png";
import teamImg from "../../assets/home-content-img.png";
import cardImg from "../../assets/chicken-wings.png";
import mapImg from "../../assets/home-map-img.png";
import netflix from "../../assets/netflix.png";
import amazon from "../../assets/amazon.png";
import spotify from "../../assets/spotify.png";
import reddit from "../../assets/reddit.png";
import discord from "../../assets/disscoprd.png";
import userTestimonial from "../../assets/user-icon.png";
import Navactive from "../../components/navigation/Nav";
import { connect } from "react-redux";
// import SignupCard from "../../components/Auth";

const Home = (props) => {
  // pagination Function
  // $(function () {
  //   var button = $(".button");

  //   function switchToNext() {
  //     var _this = $(this);

  //     if (_this.hasClass("active")) return false;
  //     else {
  //       $(".button.active").removeClass("active");
  //       _this.addClass("active");
  //     }
  //   }

  //   button.on("click", switchToNext);
  // });
  // console.log(props.auth.userData.token)
  const token = props.auth.userData.token;

  return (
    <>
      <Navactive />
      {/* top header */}
      <div className="header-wrapper">
        <div>
          <img src={homeBg} className="bgHeader" alt="bgHeader" />
          <div className="row header-description-wrapper">
            <div className="col-8 col-md-7">
              <p className="header-title">
                Start Your Day with <br />
                Coffee and Good Meals
              </p>
              <p className="header-text">
                We provide high quality beans, good taste, and healthy <br />
                meals made by love just for you. Start your day with us <br />
                for a bigger smile!
              </p>
              <button className="col-8 col-md-4 h-20 btn btn-get-started">
                Get Started
              </button>
            </div>
          </div>
          {token === null && (
            <div className="col-4">
              <form className="form-inline my-2 my-lg-0 search-box-home">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                />
              </form>
            </div>
          )}
        </div>
        {/* middle section card */}
        <div className="row company-info-header align-items-center justify-content-center">
          <div className="col col-md-3 card-info-header">
            <div className="row">
              <img
                src={userTestimonial}
                className="header-company-info-icon"
                alt="card-testimonial"
              />
              <div className="col header-info-company">
                <p className="header-company-count">90+</p>
                <p className="header-company-people-info">staff</p>
              </div>
            </div>
          </div>
          <div className="col col-md-3 card-info-header">
            <div className="row">
              <img
                src={userTestimonial}
                className="header-company-info-icon"
                alt="card-testimonial"
              />
              <div className="col header-info-company">
                <p className="header-company-count">30+</p>
                <p className="header-company-people-info">store</p>
              </div>
            </div>
          </div>
          <div className="col col-md-3 card-info-header">
            <div className="row">
              <img
                src={userTestimonial}
                className="header-company-info-icon"
                alt="card-testimonial"
              />
              <div className="col header-info-company">
                <p className="header-company-count">800+</p>
                <p className="header-company-people-info">customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* nd section header*/}
        <div className="row header-desc-section d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-5 header-desc-section-li">
            <img src={teamImg} className="home-Map-Img" alt="st img" />
          </div>
          <div className="col col-md-5 header-desc-section-li">
            <p className="team-work-section">
              We Provide Good Coffee and Healthy Meals
            </p>
            <p className="team-work-section-desc">
              You can explore the menu that we provide with fun and
              <br /> have their own taste and make your day better.
            </p>

            <ul className="list-group team-work-section-li bg-white">
              <li className="list-group-item bg-white">
                <i className="bi bi-check-circle-fill"></i>High quality beans
              </li>
              <li className="list-group-item bg-white">
                <i className="bi bi-check-circle-fill"></i>
                Healthy meals, you can request the ingredients
              </li>
              <li className="list-group-item bg-white">
                <i className="bi bi-check-circle-fill"></i>
                Chat with our staff to get better experience for ordering
              </li>
              <li className="list-group-item bg-white">
                <i className="bi bi-check-circle-fill"></i>
                Free member card with a minimum purchase of IDR 200.000.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* home nd section */}
      <div className="width-based">
        <p className="home-product-wrapper-title">Here is People's Favorite</p>
        <p className="home-product-wrapper-desc">
          Let's choose and have a bit taste of poeple's favorite. It might be
          yours too!
        </p>

        <div className="row home-favourite-product">
          <div className="col-8 col-md home-card-popular">
            {/* carsd perlu dibesarkan */}
            <div className="card">
              <img className="card-img-top" src={cardImg} alt="Card cap" />
              <div className="card-body home-li-wrapper">
                <p className="card-title home-card-product-title">
                  Hazelnut Latte
                </p>
                <ul className="list-group home-card-product-li">
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill"></i>Hazelnut Syrup
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill"></i>Wanilla Whiped
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill"></i>Ice /Hot
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill"></i>Sliced Banana on
                    Top
                  </li>
                </ul>
              </div>
              <p className="card-text home-card-product-price">IDR 25.000</p>
              <button className="btn btn-outline-warning btn-order-now">
                Order Now
              </button>
            </div>
          </div>

          <div className="col-8 col-md home-card-popular">
            {/* carsd perlu dibesarkan */}
            <div className="card">
              <img className="card-img-top" src={cardImg} alt="Card cap" />

              <div className="card-body home-li-wrapper">
                <p className="card-title home-card-product-title">
                  Pinky Promise
                </p>
                <ul className="list-group home-card-product-li">
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill"></i>One Shot Coffee
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill"></i>Vanilla Whiped
                    Cream
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill"></i>Strawberry Syrup
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill"></i>Slice Strawberry
                    on top
                  </li>
                </ul>
              </div>
              <p className="card-text home-card-product-price">IDR 30.000</p>
              <button className="btn btn-outline-warning btn-order-now">
                Order Now
              </button>
            </div>
          </div>

          <div className="col-8 col-md home-card-popular">
            {/* carsd perlu dibesarkan */}
            <div className="card">
              <img className="card-img-top" src={cardImg} alt="Card cap" />
              <div className="card-body home-li-wrapper">
                <p className="card-title home-card-product-title">
                  Chicken Wings
                </p>
                <ul className="list-group home-card-product-li">
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill"></i>Wings
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill"></i>Dump Sticks
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill"></i>Mayoniase and
                    Lemon
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill"></i>Secret Recipe
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill"></i>Buy 1 Get 1 only
                    for Dine in
                  </li>
                </ul>
              </div>
              <p className="card-text home-card-product-price">IDR 40.000</p>
              <button className="btn btn-outline-warning btn-order-now">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* fourth section */}
      <div className="width-based">
        <p className="home-product-wrapper-title">
          ProductVisit Our Store in the
          <br /> Spot on the Map Below
        </p>
        <p className="home-product-wrapper-desc">
          See our store in every city on the spot and spen your good day there.
          <br />
          See you soon!
        </p>
        <img src={mapImg} className="home-Map-Img" alt="fourth img" />
      </div>

      <div className="width-based">
        <p className="home-product-wrapper-title">Our Partner</p>
        <div className="row width-based-product">
          <div className="col-4 col-md-2 width-based-product">
            <img
              src={netflix}
              className="img-partener-thumbnail"
              alt="partner img"
            />
          </div>
          <div className="col-4 col-md-2 width-based-product">
            <img
              src={discord}
              className="img-partener-thumbnail"
              alt="partner img"
            />
          </div>
          <div className="col-4 col-md-2 width-based-product">
            <img
              src={reddit}
              className="img-partener-thumbnail"
              alt="partner img"
            />
          </div>
          <div className="col-4 col-md-2 width-based-product">
            <img
              src={amazon}
              className="img-partener-thumbnail"
              alt="partner img"
            />
          </div>
          <div className="col-4 col-md-2 width-based-product">
            <img
              src={spotify}
              className="img-partener-thumbnail"
              alt="partner img"
            />
          </div>
        </div>
      </div>

      <div className="section-bottom-home">
        <p className="home-product-wrapper-title">
          Loved by Thousands of
          <br /> Happy Customer
        </p>
        <p className="home-product-wrapper-desc">
          These are the stories of our customers who have visited us with great
          <br /> pleasure.
        </p>
        <div className="row testimonial-section-wrapper">
          <div className="col-10 col-md col-lg card-testimonial-wrapper">
            <div className="row">
              <img
                src={userTestimonial}
                className="user-testimonial-card"
                alt="card-testimonial"
              />

              <div className="col">
                <p className="testimonial-name-title">Viezh Robert</p>
                <p className="testimonial-name-place">Warsaw, Poland</p>
              </div>
              <div className="col-2 col-md-3 rate-testimonial">
                <p style={{ float: "left" }}>4.5</p>
                <i className="bi bi-star-fill" style={{ float: "right" }}></i>
              </div>
            </div>
            <p className="testimonial-card-description">
              “Wow... I am very happy to spend my whole day here. the Wi-fi is
              good, and the coffee and meals tho. I like it here!! Very
              recommended!
            </p>
          </div>

          <div className="col-10 col-md col-lg card-testimonial-wrapper">
            <div className="row">
              <img
                src={userTestimonial}
                className="user-testimonial-card"
                alt="card-testimonial"
              />

              <div className="col">
                <p className="testimonial-name-title">Yessica Christy</p>
                <p className="testimonial-name-place">Shanxi, China</p>
              </div>
              <div className="col-2 col-md-3 rate-testimonial">
                <p style={{ float: "left" }}>4.5</p>
                <i className="bi bi-star-fill" style={{ float: "right" }}></i>
              </div>
            </div>
            <p className="testimonial-card-description">
              “I like it because I like to travel far and still can make my day
              better just by drinking their Hazelnut Latte
            </p>
          </div>

          <div className="col-10 col-md col-lg card-testimonial-wrapper">
            <div className="row">
              <img
                src={userTestimonial}
                className="user-testimonial-card"
                alt="card-testimonial"
              />

              <div className="col">
                <p className="testimonial-name-title">Kim Young Jou</p>
                <p className="testimonial-name-place">Seoul, South Korea</p>
              </div>
              <div className="col-2 col-md-3 rate-testimonial">
                <p style={{ float: "left" }}>4.5</p>
                <i className="bi bi-star-fill" style={{ float: "right" }}></i>
              </div>
            </div>
            <p className="testimonial-card-description">
              “This is very unusual for my taste, I haven’t liked coffee before
              but their coffee is the best! and yup, you have to order the
              chicken wings, the best in town!
            </p>
          </div>
        </div>
        <div className="row width-based">
          <div className="col d-flex justify-content-start">
            <div className="paginationDot">
              <div className="buttonDot active"></div>
              <div className="buttonDot"></div>
              <div className="buttonDot"></div>
              <div className="buttonDot"></div>
            </div>
          </div>
          <div className="col d-flex justify-content-end">
            <button className="home-left-btn">
              <i className="bi bi-arrow-left"></i>
            </button>
            <button className="home-right-btn">
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* signpucard inject */}
        <div className="d-inline-flex signupCard justify-content-center align-items-center">
          <div className="mx-auto">
            <p className="promo-card-signup-home">
              Get your member
              <br />
              card now!
            </p>
            <p className="promo-card-signup-text-home">
              Let's join with our member and enjoy the deals.
            </p>
          </div>
          <div className="btn btn-warning mx-auto btn-card-promo-signup-home">
            Create Now
          </div>
        </div>
      </div>

      {/* footer */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Home);
