import { React, useEffect, useState, useRef } from "react";
import "../header/header.css";
import Select from "../selectDrop/Select";
import Logo from "../../assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconCompare from "../../assets/images/icon-compare.svg";
import Heart from "../../assets/images/icon-heart.svg";
import Cart from "../../assets/images/icon-cart.svg";
import User from "../../assets/images/icon-user.svg";
import Button from "@mui/material/Button";
import axios from "axios";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Nav from "./Nav/Nav";

import { Link } from "react-router-dom";
const Header = () => {
  const counryList = [];
  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  });
  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res != null) {
          res.data.data.map((items, index) => {
            counryList.push(items.country);
          });
        }
      });
    } catch (error) {
      console.log(`something wrong ${error}`);
    }
  };
  const [isDropDown, setisDropDown] = useState(false);

  return (
    <div className="header">
      <div className="container-fluid">
        <div
          className="row align-items-center"
          style={{ paddingBottom: "30px" }}
        >
          <div className="ham-burger col-sm-4 d-lg-none">
            <MenuIcon fontSize="large" />
          </div>
          <div className="col-sm-4 col-lg-4 col-xl-2">
            <Link to={"/"}>
              {" "}
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="like-cart col-sm-2 d-lg-none ms-auto">
          <ShoppingCartOutlinedIcon fontSize="large" className="me-3"/>
          <FavoriteBorderOutlinedIcon fontSize="large"/>
          </div>
          {/* header search start here */}
          <div className="d-flex align-items-center col-lg-8 col-xl-5 d-sm-none d-lg-block">
            <div className="headerSearch d-flex align-items-center ">
              <Select
                items={[
                  "All Categories",
                  "Milks and Dairies",
                  "Wines & Alcohol",
                  "Clothing & Beauty",
                  "Pet Foods & Toy",
                  "Fast food",
                  "Baking material",
                  "Vegetables",
                  "Fresh Seafood",
                  "Noodles & Rice",
                  "Ice cream",
                ]}
                placeholder={"All Categories"}
                icon={false}
              />
              <div className="search d-flex align-items-center">
                <input
                  className="itemsInput"
                  type="text"
                  placeholder="Search for items..."
                />
                <SearchIcon className="searchIcon" />
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center col-xl-5">
            <div className="ms-auto d-flex align-items-center d-md-none d-xl-block">
              <div className="countryList">
                <Select
                  items={counryList}
                  placeholder={"Your Location"}
                  icon={
                    <LocationOnIcon
                      style={{ position: "absolute", right: "130px" }}
                    />
                  }
                />
              </div>

              <ul className="list list-inline mb-0 headerTabs">
                <li className="list-inline-item compare">
                  <span>
                    <span className="bedge rounded-circle">
                      <p className="text-center text-white">3</p>
                    </span>
                    <img src={IconCompare} alt="" />
                    Compare
                  </span>
                </li>
                <li className="list-inline-item wishlist">
                  <span>
                    <span className="bedge rounded-circle">
                      <p className="text-center text-white">6</p>
                    </span>
                    <img src={Heart} alt="" />
                    Wishlist
                  </span>
                </li>
                <li className="list-inline-item cart">
                  <span>
                    <span className="bedge rounded-circle">
                      <p className="text-center text-white">2</p>
                    </span>
                    <img src={Cart} alt="" />
                    <Link to={"/cart"}>Cart</Link>
                  </span>
                </li>
                <ClickAwayListener
                  onClickAway={() => {
                    setisDropDown(false);
                  }}
                >
                  <li className="list-inline-item">
                    <span
                      onMouseEnter={() => {
                        setisDropDown(!isDropDown);
                      }}
                    >
                      <img src={User} alt="" />
                      Account
                    </span>
                    {isDropDown ? (
                      <ul className="dropdownMenue">
                        <li>
                          <Button>
                            <PersonOutlineOutlinedIcon />
                            My Account
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <LocationOnOutlinedIcon />
                            Order Tracking
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <LocalActivityOutlinedIcon />
                            My Voucher
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <FavoriteBorderOutlinedIcon />
                            My Wishlist
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <SettingsOutlinedIcon />
                            Setting
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <ExitToAppOutlinedIcon />
                            Sign out
                          </Button>
                        </li>
                      </ul>
                    ) : null}
                  </li>
                </ClickAwayListener>
              </ul>
            </div>
          </div>

          {/* header search end here */}
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
