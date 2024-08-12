import React from "react";
import "../Footer/Footer.css";
import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import assets from "../../assets/Cat_img";
import Payment from "../../assets/images/payment-method.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import NewsLetter from "../NewsLetter/NewsLetter";
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import Icon4 from "../../assets/images/icon-4.svg";
import Icon5 from "../../assets/images/icon-5.svg";
const Footer = () => {
  return (
    <div className="footer pt-2 container-fluid">
      {/* news letter start here */}
      <section className="newsLetterSection pt-2">
        <div className="container-fluid">
          <div className="box d-flex row">
            <div className="news-info col-md-6">
              <h1>Stay home & get your daily needs from our shop</h1>
              <p>
                Start You'r Daily Shopping with{" "}
                <span className="bg-green">Nest Mart</span>
              </p>
            </div>
            <div className="news-img col-md-6">
              <img src={assets.NewsLetter} alt="" className="w-100" />
            </div>
          </div>
          <NewsLetter />
        </div>
      </section>
      {/* news letter end here */}

      {/* featured section start here */}
      <section className="featured pb-5">
        <div className="container-fluid">
          <div className="featured-items d-flex">
            <div className="f-item row align-items-center justify-content-center">
              <div className="feature-icon col-md-3">
                <img src={Icon1} alt="" />
              </div>
              <div className="feature-info col-md-9">
                <h5>Best prices & offers</h5>
                <p>Orders $50 or more</p>
              </div>
            </div>
            <div className="f-item row align-items-center">
              <div className="feature-icon col-md-3">
                <img src={Icon2} alt="" />
              </div>
              <div className="feature-info col-md-9">
                <h5>Free delivery</h5>
                <p>24/7 amazing services</p>
              </div>
            </div>
            <div className="f-item row align-items-center">
              <div className="feature-icon col-md-3">
                <img src={Icon3} alt="" />
              </div>
              <div className="feature-info col-md-9">
                <h5>Great daily deal</h5>
                <p>When you sign up</p>
              </div>
            </div>
            <div className="f-item row align-items-center">
              <div className="feature-icon col-md-3">
                <img src={Icon4} alt="" />
              </div>
              <div className="feature-info col-md-9">
                <h5>Wide assortment</h5>
                <p>Mega Discounts</p>
              </div>
            </div>
            <div className="f-item row align-items-center">
              <div className="feature-icon col-md-3">
                <img src={Icon5} alt="" />
              </div>
              <div className="feature-info col-md-9">
                <h5>Easy returns</h5>
                <p>Within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* featured section end here */}
      <div className="row">
        <div className="col">
          <div className="logo mb-4">
            <Link>
              {" "}
              <img src={Logo} alt="" />
            </Link>
          </div>
          <p>Awesome grocery store website template</p>
          <p className="mb-3">
            <FmdGoodOutlinedIcon className="bg-green" />{" "}
            <span className="fw-bold">Address:</span>5171 W Campbell Ave
            undefined Kent, Utah 53127 United States
          </p>
          <p className="mb-3">
            <HeadsetMicOutlinedIcon className="bg-green" />{" "}
            <span className="fw-bold">Call Us:</span>(+91) - 540-025-124553
          </p>
          <p className="mb-3">
            <EmailOutlinedIcon className="bg-green" />{" "}
            <span className="fw-bold">Email:</span>sale@Nest.com
          </p>
          <p className="mb-3">
            <AccessTimeOutlinedIcon className="bg-green" />{" "}
            <span className="fw-bold">Hours:</span>10:00 - 18:00, Mon - Sat
          </p>
          <h3>Install App</h3>
          <p>From App Store or Google Play</p>
          <div className="row stroe">
            <div className="col-md-6">
              <img src={assets.Appstore} alt="" className="w-100" />
            </div>
            <div className="col-md-6">
              <img src={assets.Playstore} alt="" className="w-100" />
            </div>
          </div>
          <p>Secured Payment Gateways</p>
          <span>
            <img src={Payment} alt="" />
          </span>
        </div>
        <div className="col">
          <p>company</p>
          <p>About Us</p>
          <p>Delivery Information</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Contact Us</p>
          <p>Support Center</p>
          <p>Careers</p>
        </div>
        <div className="col">
          <h4>Account</h4>
          <p>Sign In</p>
          <p>View Cart</p>
          <p>My Wishlist</p>
          <p>Track My Order</p>
          <p>Help Ticket</p>
          <p>Shipping Details</p>
          <p>Compare products</p>
        </div>
        <div className="col">
          <h4>Corporate</h4>
          <p>Become a Vendor</p>
          <p>Affiliate Program</p>
          <p>Farm Business</p>
          <p>Farm Careers</p>
          <p>Our Suppliers</p>
          <p>Accessibility</p>
          <p>Promotions</p>
        </div>
        <div className="col">
          <h4>Popular</h4>
          <p>Milk & Flavoured Milk</p>
          <p>Butter and Margarine</p>
          <p>Eggs Substitutes</p>
          <p>Marmalades</p>
          <p>Sour Cream and Dips</p>
          <p>Tea & Kombucha</p>
          <p>Cheese</p>
        </div>
      </div>
      <hr />
      <div className="row footer-bottom">
        <div className="col-md-4">
          <p>
            © 2022, <span className="bg-green">Nest</span> - HTML Ecommerce
            Template
          </p>
          <p>All rights reserved</p>
        </div>
        <div className="col-md-4">
          <span className="bg-green">
            <LocalPhoneIcon />
            1900 - 6666
          </span>

          <span className="bg-green">
            <LocalPhoneIcon />
            1900 - 8888
          </span>
        </div>
        <div className="col-md-4">
          <span>
            Follow Us <FacebookOutlinedIcon /> <XIcon /> <InstagramIcon />{" "}
            <PinterestIcon /> <YouTubeIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
