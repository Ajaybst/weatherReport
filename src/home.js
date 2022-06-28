import React from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import global from "./images/global.png";
let Home = () => {
  return (
    <>
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-md-5 Container_height d-flex flex-column justify-content-center align-items-center order-1 order-lg-0">
              <h1>Welcome to the </h1>
              <span>
                <h1 className="logo_nav">weatherReport</h1>
              </span>

              <p>Perfect and accurtate weather reports</p>

              <button className="btn_about">
                <NavLink to={"./services"}>About US</NavLink>
              </button>
            </div>
            <div className="col-md-7 Container_height d-flex flex-column justify-content-center align-items-center ">
              <div>
                <img src={global} className="global_image" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
