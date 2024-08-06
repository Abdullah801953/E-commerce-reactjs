import React from "react";
import "../Listing/Listing.css";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import SideBar from "../../../SideBar/SideBar";
import Products from "../../../Products/Products";
import "../../../Products/Products.css";
import Slider from "react-slick";
const Listing = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    fade: false,
  };
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
              <SideBar />
            </div>
            <div className="homeProducts pt-0 productrow2 col-md-9">
              <div className="">
                <div className="homeProducts homeProductsRow2 pt-0">
                  <Slider {...settings} className="prodSlider">
                    <div className="productsRow">
                      <div className="productitem2 sale">
                        <Products tag={"Sale"} />
                      </div>
                    </div>
                    <div className="productsRow">
                      <div className="productitem2 best-sale">
                        <Products tag={"Best sale"} />
                      </div>
                    </div>
                    <div className="productsRow">
                      <div className="productitem2 save">
                        <Products tag={"Save 35%"} />
                      </div>
                    </div>
                    <div className="productsRow">
                      <div className="productitem2 save">
                        <Products tag={"Save 15%"} />
                      </div>
                    </div>
                   
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
