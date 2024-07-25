import React from "react";
import "../Listing/Listing.css";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import SideBar from "../../../SideBar/SideBar"
const Listing = () => {
  return (
    <section className="listing-page">
      <div className="container-fluid">
        <div className="bread-crumb">
          <h1>Snack</h1>
          <ul className="list list-inline">
            <li className="list-inline-item">
              <Link className="bg-green">
                <HomeOutlinedIcon /> Home
              </Link>
            </li>
            <li className="list-inline-item">
              <ChevronRightOutlinedIcon />
              Shop
            </li>
            <li className="list-inline-item">
              <ChevronRightOutlinedIcon />
              Snack
            </li>
          </ul>
        </div>
        <div className="listing-data">
          <div className="row">
            <div className="col-md-3">
            <SideBar/>
            </div>
            <div className="col-md-9">

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
