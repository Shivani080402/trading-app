import React from "react";
import "../landingPage/SideNavbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faHouse,
  faUser,
  faGift,
  faUserPlus,
  faBoxArchive,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";

function SideNavbar() {
  return (
    <div class="">
      <div className="">
        <div className=" sidenav ">
          <div>
            <div className="m-3 d-flex justify-content-start">
              <Link className="text-decoration-none" to="/">
                <img
                  src="media/Images/tradeterminal.png"
                  alt="Capitalmind"
                  style={{ width: "18%", marginLeft: "25%" }}
                />
              </Link>
            </div>
            <div>
              <form className="mt-4" role="search">
                <ul className="navbar-nav">
                  <li className="nav-item p-1">
                    <Link
                      className="text-decoration-none text-black"
                      aria-current="page"
                      to="/trading-app"
                    >
                      <div style={{ display: "flex" }}>
                        <FontAwesomeIcon
                          icon={faHouse}
                          className="p-2 text-secondary"
                        />
                        <h6 className="p-1">Home</h6>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item  p-1">
                    <Link
                      className="text-decoration-none text-black"
                      to="/trading-app/portfolios"
                    >
                      <div style={{ display: "flex" }}>
                        <FontAwesomeIcon
                          icon={faSuitcase}
                          className="p-2 text-secondary"
                        />
                        <h6 className="p-1">Portfolios</h6>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item  p-1">
                    <Link
                      className="text-decoration-none text-black"
                      to="/experimentals"
                    >
                      <div style={{ display: "flex" }}>
                        <FontAwesomeIcon
                          icon={faFlask}
                          className="p-2 text-secondary"
                        />

                        <h6 className="p-1">Experimentals</h6>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item   p-1">
                    <Link
                      className="text-decoration-none text-black"
                      to="/stackarchives"
                    >
                      <div style={{ display: "flex" }}>
                        <FontAwesomeIcon
                          icon={faBoxArchive}
                          className="p-2 text-secondary"
                        />
                        <h6 className="p-1">Stack Archives</h6>
                      </div>
                    </Link>
                  </li>{" "}
                  <li className="nav-item   p-1">
                    <Link
                      className="text-decoration-none text-black"
                      to="/referafriend"
                    >
                      <div style={{ display: "flex" }}>
                        <FontAwesomeIcon
                          icon={faUserPlus}
                          className="p-2 text-secondary"
                        />
                        <h6 className="p-1">Refer a friend</h6>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item  p-1">
                    <Link
                      className="text-decoration-none text-black"
                      to="/giftasubscription"
                    >
                      <div style={{ display: "flex" }}>
                        <FontAwesomeIcon
                          icon={faGift}
                          className="p-2 text-secondary"
                        />
                        <h6 className="p-1">Gift a subscription</h6>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item   p-1">
                    <Link
                      className="text-decoration-none text-black "
                      to="/account"
                    >
                      <div style={{ display: "flex" }}>
                        <FontAwesomeIcon
                          icon={faUser}
                          className="p-2 text-secondary"
                        />
                        <h6 className="p-1">Account</h6>
                      </div>
                    </Link>
                  </li>
                </ul>
              </form>
            </div>
            <div></div>
            <div
              className="d-flex justify-content-between"
              style={{
                padding: "1px 1px 0px 1px ",
                marginLeft: "10px",
                fontSize: "14px",
                position: "fixed",
                bottom: "0",
                left: "0",
                zIndex: "1000",
                width: "15%",
              }}
            >
              <p
                className=" text-center mt-1 p-2 "
                style={{
                  backgroundColor: "green",
                  textAlign: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                SP
              </p>
              <div
                className="text-muted text-end "
                style={{ fontSize: "12px" }}
              >
                <p className="mb-1">CMP1Y</p>
                <p className="mb-1">Valid till Apr 19,2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
