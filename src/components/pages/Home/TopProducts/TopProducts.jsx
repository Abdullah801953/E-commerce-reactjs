import React from "react";
import "../TopProducts/TopProducts.css";
import assets from "../../../../assets/Cat_img";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
function TopProducts(props) {
  const [value, setValue] = React.useState();
  return (
    <div className="topSelling">
      <h3>{props.cat}</h3>
      <div className="item-sell d-flex align-items-center row">
        <img src={assets.Thumbnail1} alt="" className="sell-pic col-md-4" style={{borderRadius:"15px"}} />
        <div className="info-sell col-md-8">
          <Link>
            <h6>Nestle Original Coffee-Mate Coffee Creamer</h6>
          </Link>
          <Rating
            id="rating-sell"
            defaultValue={3.5}
            precision={0.5}
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <div className="d-flex align-items-center gap-2">
            <span className="price bg-green">$28.85</span>
            <span className="oldPrice">$32.8</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
