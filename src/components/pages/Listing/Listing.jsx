import React, { useState } from "react";
import "../Listing/Listing.css";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import SideBar from "../../../SideBar/SideBar";
import Product from "../../../Products/Products";
import "../../../Products/Products.css";
import { Button } from "@mui/material";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import DoneIcon from '@mui/icons-material/Done';
const Listing = () => {
  const [show, setShow] = useState(false);
  const [short, setShort] = useState(false);
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
            <div className="col-md-9 right-content homeProducts pt-0">
              <div className="top-strip d-flex align-items-center">
                <h6>
                  We Found <span className="bg-green">29</span> For you
                </h6>

                <div className="ms-auto d-flex align-items-center">
                  <ClickAwayListener
                    onClickAway={() => {
                      setShow(false);
                    }}
                  >
                    <div
                      className="tab_"
                      onClick={() => {
                        setShow(!show);
                      }}
                    >
                      <Button className="btn">
                        <GridViewOutlinedIcon /> show: 50
                        <KeyboardArrowDownOutlinedIcon />
                      </Button>
                      {show ? (
                        <ul className="dropdownMenue">
                          <li>
                            <Button><DoneIcon/>50</Button>
                          </li>
                          <li>
                            <Button>100</Button>
                          </li>
                          <li>
                            <Button>150</Button>
                          </li>
                          <li>
                            <Button>200</Button>
                          </li>
                          <li>
                            <Button>All</Button>
                          </li>
                        </ul>
                      ) : null}
                    </div>
                  </ClickAwayListener>
                  <ClickAwayListener
                    onClickAway={() => {
                      setShort(false);
                    }}
                  >
                  <div
                    className="tab_"
                    onClick={() => {
                      setShort(!short);
                    }}
                  >
                    <Button className="btn mx-3">
                      <AutoAwesomeMosaicOutlinedIcon />
                      Sort by: Featured <KeyboardArrowDownOutlinedIcon />
                    </Button>
                    {short ? (
                      <ul className="dropdownMenue1">
                        <li>
                          <Button><DoneIcon/>Featured</Button>
                        </li>
                        <li>
                          <Button>Price:Low to High</Button>
                        </li>
                        <li>
                          <Button>Price:High to Low</Button>
                        </li>
                        <li>
                          <Button>Release Date</Button>
                        </li>
                        <li>
                          <Button>Avg.Rating</Button>
                        </li>
                        
                      </ul>
                    ) : null}
                  </div>
                  </ClickAwayListener>
                </div>
              </div>
              <div className="productsRow pt-0 listing-row">
                <div className="productitem listing-prod">
                  <Product />
                </div>
                <div className="productitem listing-prod">
                  <Product />
                </div>
                <div className="productitem listing-prod">
                  <Product />
                </div>
                <div className="productitem listing-prod">
                  <Product />
                </div>
                <div className="productitem listing-prod">
                  <Product />
                </div>
                <div className="productitem listing-prod">
                  <Product />
                </div>
                <div className="productitem listing-prod">
                  <Product />
                </div>
                <div className="productitem listing-prod">
                  <Product />
                </div>
                <div className="productitem listing-prod">
                  <Product />
                </div>
                <div className="productitem listing-prod">
                  <Product />
                </div>
                <div className="productitem listing-prod">
                  <Product />
                </div>
                <div className="productitem listing-prod">
                  <Product />
                </div>
                <div className="productitem listing-prod">
                  <Product />
                </div>
                <div className="productitem listing-prod">
                  <Product />
                </div>
                <div className="productitem listing-prod">
                  <Product />
                </div>
                <div className="productitem listing-prod">
                  <Product />
                </div>
                <div className="productitem listing-prod">
                  <Product />
                </div>
                <div className="productitem listing-prod">
                  <Product />
                </div>
                <div className="productitem listing-prod">
                  <Product />
                </div>
                <div className="productitem listing-prod">
                  <Product />
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
