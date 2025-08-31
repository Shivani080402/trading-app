import React from "react";
import HomePage from "./HomePage";
import SideNavbar from "./SideNavbar";
import "../landingPage/SideNavbar.css";
import TradingPage from "./TradingPage";
import { Route, Routes } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div class="container-fluid">
        <div className="row">
          <div className="col-2">
            <SideNavbar />
          </div>
          <div
            className="col-10 border"
            style={{ backgroundColor: "#f6f6feff" }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolios" element={<TradingPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
