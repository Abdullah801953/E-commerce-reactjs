import React, { useState, useEffect, useRef } from "react";
import "../Nav/Nav.css";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import bannerMenu from "../../../assets/images/banner-menu.png";
import { Link } from "react-router-dom";
const Nav = () => {
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let position = window.pageYOffset;
      if (position >= 100) {
        headerRef.current.classList.add("fixed");
      } else {
        headerRef.current.classList.remove("fixed");
      }
    });
  }, []);
  return (
    <div className="nav d-flex align-items-center" ref={headerRef}>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-sm-3 part1 d-flex align-items-center"
            style={{ width: "20%" }}
          >
            <Button className="bg-g text-white">
              <WindowOutlinedIcon className="mx-1" />
              Browse All Categories
              <KeyboardArrowDownIcon className="mx-1" />
            </Button>
          </div>
          <div className="col-sm-7 part2 p-0">
            <ul className="list list-inline mb-0">
              <li className="list-inline-item">
                <Button>
                  <Link to={"/home"}>Home</Link>
                </Button>
              </li>
              <li className="list-inline-item">
                <Button>
                  <Link to={"/home"}>About</Link>
                </Button>
              </li>
              <li className="list-inline-item">
                <Button>
                  <Link to={"/home"}>Shop</Link>
                </Button>
              </li>
              <li className="list-inline-item">
                <Button>
                  <Link to={"/home"}>Vendors</Link>
                </Button>
              </li>
              <li className="list-inline-item megaMenueParent">
                <Button>
                  <Link to={"/home"}>
                    Mega menu
                    <KeyboardArrowDownIcon />
                  </Link>
                </Button>
                <div className="megaMenu">
                  <ul>
                    <div className="row">
                      <div className="col megacol">
                        <p className="mega">Fruit & Vegetables</p>
                        <ul>
                          <li>
                            <Link>Meat & Poultry</Link>
                          </li>
                          <li>
                            <Link>Fresh Vegetables</Link>
                          </li>
                          <li>
                            <Link>Herbs & Seasonings</Link>
                          </li>
                          <li>
                            <Link>Cuts & Sprouts</Link>
                          </li>
                          <li>
                            <Link>Exotic Fruits & Veggies</Link>
                          </li>
                          <li>
                            <Link>Packaged Produce</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col megacol">
                        <p className="mega">Breakfast & Dairy</p>
                        <ul>
                          <li>
                            <Link>Milk & Flavoured Milk</Link>
                          </li>
                          <li>
                            <Link>Butter and Margarine</Link>
                          </li>
                          <li>
                            <Link>Eggs Substitutes</Link>
                          </li>
                          <li>
                            <Link>Marmalades</Link>
                          </li>
                          <li>
                            <Link>Sour Cream</Link>
                          </li>
                          <li>
                            <Link>Cheese</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col megacol">
                        <p className="mega">Meat & Seafood</p>
                        <ul>
                          <li>
                            <Link>Breakfast Sausage</Link>
                          </li>
                          <li>
                            <Link>Dinner Sausage</Link>
                          </li>
                          <li>
                            <Link>Chicken</Link>
                          </li>
                          <li>
                            <Link>Sliced Deli Meat</Link>
                          </li>
                          <li>
                            <Link>Wild Caught Fillets</Link>
                          </li>
                          <li>
                            <Link>Crab and Shellfish</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <img src={bannerMenu} alt="" />
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
              <li className="list-inline-item">
                <Button>
                  <Link to={"/home"}>Blog</Link>
                </Button>
              </li>
              <li className="list-inline-item pageDropDown">
                <Button>
                  <Link to={"/home"}>
                    Pages
                    <KeyboardArrowDownIcon />
                  </Link>
                </Button>

                <div className="drop_downMenu">
                  <ul>
                    <li>
                      <Button>
                        <Link>Contact</Link>
                      </Button>
                    </li>
                    <li>
                      <Button>
                        <Link>My Account</Link>
                      </Button>
                    </li>
                    <li>
                      <Button>
                        <Link>Login</Link>
                      </Button>
                    </li>
                    <li>
                      <Button>
                        <Link>Register</Link>
                      </Button>
                    </li>
                    <li>
                      <Button>
                        <Link>Forgot password</Link>
                      </Button>
                    </li>
                    <li>
                      <Button>
                        <Link>Reset password</Link>
                      </Button>
                    </li>
                    <li>
                      <Button>
                        <Link>Purchase Guide</Link>
                      </Button>
                    </li>
                    <li>
                      <Button>
                        <Link>Privacy Policy</Link>
                      </Button>
                    </li>
                    <li>
                      <Button>
                        <Link>Terms of Service</Link>
                      </Button>
                    </li>
                    <li>
                      <Button>
                        <Link>404 Page</Link>
                      </Button>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-inline-item">
                <Button>
                  <Link to={"/home"}>Contact</Link>
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 part3 d-flex align-items-center ms-auto">
            <div className="phNo d-flex align-items-center">
              <span>
                <HeadsetMicOutlinedIcon />
              </span>
              <div className="detail ml-3">
                <h3 className="mb-0">1900 - 888</h3>
                <p className="mb-0">24/7 Support Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
