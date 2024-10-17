import { React, useState } from "react";
import "../Cat Slider/CatSlider.css";
import Slider from "react-slick";
import assets from "../../assets/Cat_img";
const CatSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplayspeed: 3000,
    fade: false,
    responsive:[
    {
      breakpoint:1024,
      settings:{
        slidesToShow:2,
        slidesToScroll:1,
        infinite:true
      }
    }
    ]
  };
  const [itemsBg, setitemsBg] = useState([
    "#f2fce4",
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
  ]);
  return (
    <>
      <div className="catslider">
        <div className="container-fluid">
          <h2 className="hd">Featured Categories</h2>
          <Slider {...settings} className="cat_slider_main">
            {itemsBg.map((item, index) => (
              <div className="items" key={1}>
                <div className="info items" style={{ background: item }}>
                  <img src={assets.Cat13} alt="" />
                  <h6>Cake and Milk</h6>
                  <p>26 items</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CatSlider;
