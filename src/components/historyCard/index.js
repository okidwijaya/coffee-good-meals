import React from "react";
import "./index.css";

import imageVegie from "../../assets/vegie.png";

function CardHistory() {
  return (
    <>
      <div className="row col-12 w-100">
        <div className="col-md-4 card-history">
          <div className="row col-md-12 card-history-cek w-100">
            <div className="row w-100">
              <div className="col col-md-4">
                <img
                  src={imageVegie}
                  alt="imageHistory"
                  className="image-vegie"
                />
              </div>
              <div className="col col-md-8">
                <p className="brand-history mt-2">Veggie tomato mix</p>
                <p className="priced-history">IDR 34.000</p>
                <div className="row w-100">
                  <div className="col col-md-8 delivered-history">
                    Delivered
                  </div>
                  <div className="col col-md-4 checkbox-history">
                    <input type="checkbox" className="check-history-select" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 card-history">
          <div className="row col-md-12 w-100 card-history-cek">
            <div className="row w-100">
              <div className="col col-md-4">
                <img
                  src={imageVegie}
                  alt="imageHistory"
                  className="image-vegie"
                />
              </div>
              <div className="col col-md-8">
                <p className="brand-history mt-2">Veggie tomato mix</p>
                <p className="priced-history">IDR 34.000</p>
                <div className="row w-100">
                  <div className="col col-md-8 delivered-history">
                    Delivered
                  </div>
                  <div className="col col-md-4 checkbox-history">
                    <input type="checkbox" className="check-history-select" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 card-history">
          <div className="row col-md-12 w-100 card-history-cek">
            <div className="row w-100">
              <div className="col col-md-4">
                <img
                  src={imageVegie}
                  alt="imageHistory"
                  className="image-vegie"
                />
              </div>
              <div className="col col-md-8">
                <p className="brand-history mt-2">Veggie tomato mix</p>
                <p className="priced-history">IDR 34.000</p>
                <div className="row w-100">
                  <div className="col col-md-8 delivered-history">
                    Delivered
                  </div>
                  <div className="col col-md-4 checkbox-history">
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
