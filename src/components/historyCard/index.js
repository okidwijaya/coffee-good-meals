import React from "react";
import "./index.css";

import imageVegie from "../../assets/vegie.png";

function CardHistory() {
  return (
    <>
      <div className="row col-12">
        <div className="col-md-4 card-history">
          <div className="row col-md-11 card-history-cek">
            <div className="row">
              <div className="col col-md-4">
                <img
                  src={imageVegie}
                  alt="imageHistory"
                  className="image-vegie"
                />
              </div>
              <div className="col col-md-8">
                <p className="brand-history">Veggie tomato mix</p>
                <p className="priced-history">IDR 34.000</p>
                <div className="row">
                  <div className="col col-md-8 delivered-history">
                    Delivered
                  </div>
                  <div className="col col-md-4">
                    <input type="checkbox" className="check-history-select" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 card-history">
          <div className="row col-md-11 card-history-cek">
            <div className="row">
              <div className="col col-md-4">
                <img
                  src={imageVegie}
                  alt="imageHistory"
                  className="image-vegie"
                />
              </div>
              <div className="col col-md-8">
                <p className="brand-history">Veggie tomato mix</p>
                <p className="priced-history">IDR 34.000</p>
                <div className="row">
                  <div className="col col-md-8 delivered-history">
                    Delivered
                  </div>
                  <div className="col col-md-4">
                    <input type="checkbox" className="check-history-select" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 card-history">
          <div className="row col-md-11 card-history-cek">
            <div className="row">
              <div className="col col-md-4">
                <img
                  src={imageVegie}
                  alt="imageHistory"
                  className="image-vegie"
                />
              </div>
              <div className="col col-md-8">
                <p className="brand-history">Veggie tomato mix</p>
                <p className="priced-history">IDR 34.000</p>
                <div className="row">
                  <div className="col col-md-8 delivered-history">
                    Delivered
                  </div>
                  <div className="col col-md-4">
                    <input type="checkbox" className="check-history-select" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardHistory;
