import React from "react";
import HomeSlider from "./Slider/HomeSlider";
import CatSlider from "../../Cat Slider/CatSlider";
import Banner from "../../Banner/Banner";
import Products from "../../Products/Products";
import "../Home/Home.css";
import "../../Products/Products.css";
import assets from "../../../assets/Cat_img";
import Slider from "react-slick";
import TopProducts from "./TopProducts/TopProducts";
import NewsLetter from "../../NewsLetter/NewsLetter";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
const PageFirst = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplayspeed: 7000,
    fade: false,
  };
  return (
    <div className="pageFirst">
      <HomeSlider />
      <CatSlider />
      <Banner />
      {/* products section start*/}
      <section className="homeProducts py-5 pb-1">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">Popular Products</h2>
            <ul className="list-inline ms-auto filterTab">
              <li className="list-inline-item">
                <a href="" className="cursor">
                  All
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Milks & Dairies
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Coffes & Teas
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Pet Foods
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Meats
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Vegetables
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Fruits
                </a>
              </li>
            </ul>
          </div>
          <div className="productsRow">
            <div className="productitem hot">
              <Products tag={"Hot"} />
            </div>
            <div className="productitem sale">
              <Products tag={"Sale"} />
            </div>
            <div className="productitem new">
              <Products tag={"New"} />
            </div>
            <div className="productitem">
              <Products />
            </div>
            <div className="productitem disc">
              <Products tag={"-14%"} />
            </div>
            <div className="productitem">
              <Products />
            </div>
            <div className="productitem">
              <Products />
            </div>
            <div className="productitem sale">
              <Products tag={"sale"} />
            </div>
            <div className="productitem hot">
              <Products tag={"Hot"} />
            </div>
            <div className="productitem">
              <Products />
            </div>
          </div>
        </div>
      </section>
      {/* product section end */}

      {/* daily best sell start*/}
      <section className="homeProducts pt-0 productrow2">
        <div className="container-fluid">
          <div className="d-flex align-items-center pb-3">
            <h2 className="hd mb-0 mt-0">Daily Best Sells</h2>
            <br />
            <br />
            <ul className="list-inline ms-auto filterTab">
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Featured
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Popular
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  New added
                </a>
              </li>
            </ul>
          </div>
          <div className="row homeProducts homeProductsRow2 pt-0">
            <div className="col-md-3">
              <img src={assets.Banner4} alt="" className="rounded-4" />
            </div>
            <div className="col-md-9">
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
      </section>
      {/* daily best sell end */}

      {/* top selling start */}
      <section className="topProductsSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col box">
              <TopProducts cat={"Top Selling"} />
            </div>
            <div className="col box">
              <TopProducts cat={"Trending Products"} />
            </div>
            <div className="col box">
              <TopProducts cat={"Recently added"} />
            </div>
            <div className="col box">
              <TopProducts cat={"Top Rated"} />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col">
              <TopProducts />
            </div>
            <div className="col">
              <TopProducts />
            </div>
            <div className="col">
              <TopProducts />
            </div>
            <div className="col">
              <TopProducts />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col">
              <TopProducts />
            </div>
            <div className="col">
              <TopProducts />
            </div>
            <div className="col">
              <TopProducts />
            </div>
            <div className="col">
              <TopProducts />
            </div>
          </div>
        </div>
      </section>
      {/* top selling end */}
    </div>
  );
};

export default PageFirst;
