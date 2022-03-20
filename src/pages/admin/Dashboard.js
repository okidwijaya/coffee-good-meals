import React from "react";
import "./style.css";
import Navactive from "../../components/navigation/Nav";
import Stackchart from "../../components/chart/Stackchart";
import Goalschart from "../../components/chart/Goalschart";
import Staffchart from "../../components/chart/Staffchart";

const Dashboard = () => {
  return (
    <>
      <Navactive />
      <p>See How your stotr proggress so far</p>
      <div className="container mx-auto w-100 my-5">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label">Dayily</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label className="form-check-label">Weekly</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label className="form-check-label">Monthly</label>
        </div>
      </div>
      <div className="row dashboard-content">
        <section className="col col-md-8">
          <Stackchart />
          <button className="btn btn-downlaod-report">Download Report</button>
        </section>
        <aside className="col col-md-4 mx-auto">
            <p className="title-dashboard">Best Staff of the Month</p>
          <div className="col-5 mx-auto">
            <Staffchart />
          </div>
            <p className="title-dashboard-desc">Achieved 3.5M of total 5M 478 Customer</p>
          <div className="col mx-auto">
            <p className="title-dashboard">Goals</p>
            <p className="title-dashboard-desc">Your goals is still on 76%. Keep up the good work!</p>
            <div className="col-7 mx-auto">
            <Goalschart />
            </div>
          </div>
          <button className="btn btn-downlaod-report">Share Report</button>
        </aside>
      </div>
    </>
  );
};

export default Dashboard;
