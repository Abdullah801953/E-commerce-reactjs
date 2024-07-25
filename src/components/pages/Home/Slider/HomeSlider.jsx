import React from "react";
import "../Slider/Slider.css";
import Slider from "react-slick";
import Slider1 from "../../../../assets/images/slider-1.png";
import Slider2 from "../../../../assets/images/slider-2.png";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplayspeed: 3000,
    fade: true,
  };
  return (
    <section className="homeslider">
      <div className="container-fluid">
        <Slider {...settings} className="home_slider_main">
          <div>
            <img src={Slider1} alt="" className="w-100 slider1" />
            <div className="info-banner">
              <h1 className="display-2 mb-40">
                Don’t miss amazing
                <br />
                grocery deals
              </h1>
              <p className="mb-65">Sign up for the daily newsletter</p>
            </div>
          </div>
          <div>
            <img src={Slider2} alt="" className="w-100 slider2" />
            <div className="info-banner">
              <h1 className="display-2 mb-40">
                Fresh Vegetables
                <br />
                Big discount
              </h1>
              <p className="mb-65">Save up to 50% off on your first order</p>
            </div>
          </div>
        </Slider>
        <div className="newsletter">
          <SendIcon className="sendIcon" /> <input type="text" placeholder="Your emaill address" />
          <Button className="bg-g">Subscribe</Button>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
