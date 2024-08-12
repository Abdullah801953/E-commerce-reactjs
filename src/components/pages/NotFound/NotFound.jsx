import React from "react";
import "../../pages/NotFound/NotFound.css";
import notFoundImg from "../../../assets/images/page-404.png";
import { Button } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className="not-found">
      <div className="container-fluid">
        <div className="box">
          <img src={notFoundImg} alt="" className="w-50" />
          <br />
          <br />
          <h1>Page Not Found</h1>
          <p>
            The link you clicked may be broken or the page may have been
            removed. visit the <span className="bg-green">Homepage</span> or{" "}
            <span className="bg-green">Contact us</span> about the problem
          </p>
          <div className="btn-notfound">
            <Link to={"/"}>
              <Button variant="contained">
                <HomeOutlinedIcon />
                Back to Home Page
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
