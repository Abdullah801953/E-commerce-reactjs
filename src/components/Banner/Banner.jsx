import React from "react";
import "../Banner/Banner.css";
import assets from "../../assets/Cat_img";
const Banner = () => {
  return (
    <>
      <div className="bannerSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <img src={assets.Banner1} alt="" className="w-100 transition" />
            </div>
            <div className="col">
              <img src={assets.Banner2} alt="" className="w-100 transition" />
            </div>
            <div className="col">
              <img src={assets.Banner3} alt="" className="w-100 transition" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
