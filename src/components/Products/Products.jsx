import React from "react";
import "../../components/Products/Products.css";
import assets from "../../assets/Cat_img";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Tooltip from "@mui/material/Tooltip";
const Products = (props) => {
  const [value, setValue] = React.useState(2);
  return (
    <div className="productThumb imgWrapper">
      {props.tag ? <span className="badge">{props.tag}</span> : null}
      <Link>
        <img src={assets.Product1} />
        <div className="overlay">
          <ul className="list list-inline mb-0">
            <li>
              <Tooltip title="Add to Wishlist" placement="top">
                <FavoriteBorderOutlinedIcon />
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Compare" placement="top">
                <CompareArrowsOutlinedIcon />
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Quick view" placement="top">
                <VisibilityOutlinedIcon />
              </Tooltip>
            </li>
          </ul>
        </div>
      </Link>

      <div className="infoproduct">
        <span className="d-block catName">Snack</span>
        <h4 className="title">
          <Link>Seeds of Change Organic Quinoa, Brown, & Red Rice</Link>
        </h4>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <span className="brand d-block">
          <Link href="" className="bg-green">
            NestFood
          </Link>
        </span>
        <div className="d-flex align-items-center gap-2 mb-3 mt-3">
          <span className="price bg-green">$28.85</span>
          <span className="oldPrice">$32.8</span>
          <Button className="add ms-auto">
            <ShoppingCartOutlinedIcon />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
