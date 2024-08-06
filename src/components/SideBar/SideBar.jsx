import React from "react";
import "../SideBar/SideBar.css";
import Icon1 from "../../assets/images/category-1.svg";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import BannerImg from "../../assets/images/banner1.jpg"
function valuetext(value) {
  return `${value}°C`;
}
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const SideBar = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="side-bar">
      <div className="card card-main mb-3">
        <h3 className="mb-5 position-relative">Category</h3>
        <div className="cat-list">
          <div className="cat-items d-flex flex-row align-items-center justify-content-center card card-child">
            <span>
              <img src={Icon1} alt="" className="w-50" />
            </span>
            <h6 className="mb-0">Milks & Dairies</h6>
            <span className="rounded-circle ms-auto h-auto counter">30</span>
          </div>
        </div>
        <div className="cat-list">
          <div className="cat-items d-flex flex-row align-items-center justify-content-center card card-child">
            <span>
              <img src={Icon1} alt="" className="w-50" />
            </span>
            <h6 className="mb-0">Milks & Dairies</h6>
            <span className="rounded-circle ms-auto h-auto counter">30</span>
          </div>
        </div>
        <div className="cat-list">
          <div className="cat-items d-flex flex-row align-items-center justify-content-center card card-child">
            <span>
              <img src={Icon1} alt="" className="w-50" />
            </span>
            <h6 className="mb-0">Milks & Dairies</h6>
            <span className="rounded-circle ms-auto h-auto counter">30</span>
          </div>
        </div>
        <div className="cat-list">
          <div className="cat-items d-flex flex-row align-items-center justify-content-center card card-child">
            <span>
              <img src={Icon1} alt="" className="w-50" />
            </span>
            <h6 className="mb-0">Milks & Dairies</h6>
            <span className="rounded-circle ms-auto h-auto counter">30</span>
          </div>
        </div>
        <div className="cat-list">
          <div className="cat-items d-flex flex-row align-items-center justify-content-center card card-child">
            <span>
              <img src={Icon1} alt="" className="w-50" />
            </span>
            <h6 className="mb-0">Milks & Dairies</h6>
            <span className="rounded-circle ms-auto h-auto counter">30</span>
          </div>
        </div>
      </div>
      <div className="card card-main filter-card">
        <h3 className="mb-5 position-relative">Fill by price</h3>
        <Box sx={{ width: 300 }}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            color="success"
            // min={0}
            // max={1000}
          />
        </Box>

        <div className="d-flex pt-2 pb-2">
          <span>
            From: <strong className="text-success">${value[0]}</strong>
          </span>
          <span className="ms-auto">
            To: <strong className="text-success">${value[1]}</strong>
          </span>
        </div>
        <div className="filter">
          <h6>Color</h6>
          <ul>
            <li>
              <Checkbox {...label} color="success" /> Red (56)
            </li>
            <li>
              <Checkbox {...label} color="success" />
              Green (78)
            </li>
            <li>
              <Checkbox {...label} color="success" />
              Blue (54)
            </li>
            <li>
              <Checkbox {...label} color="success" /> Red (56)
            </li>
            <li>
              <Checkbox {...label} color="success" />
              Green (78)
            </li>
            <li>
              <Checkbox {...label} color="success" />
              Blue (54)
            </li>
            <li>
              <Checkbox {...label} color="success" />
              Green (78)
            </li>
            <li>
              <Checkbox {...label} color="success" />
              Blue (54)
            </li>
            <li>
              <Checkbox {...label} color="success" />
              Green (78)
            </li>
            <li>
              <Checkbox {...label} color="success" />
              Blue (54)
            </li>
            <li>
              <Checkbox {...label} color="success" />
              Green (78)
            </li>
            <li>
              <Checkbox {...label} color="success" />
              Blue (54)
            </li>
            <li>
              <Checkbox {...label} color="success" />
              Green (78)
            </li>
            <li>
              <Checkbox {...label} color="success" />
              Blue (54)
            </li>
          </ul>
        </div>
        <h5 className="mb-5 position-relative">Item Condition</h5>
        <ul>
          <li>
            <Checkbox {...label} color="success" /> Red (56)
          </li>
          <li>
            <Checkbox {...label} color="success" /> Red (56)
          </li>
          <li>
            <Checkbox {...label} color="success" /> Red (56)
          </li>
        </ul>
        <div className="d-flex">
          <Button><FilterAltOutlinedIcon/>Filter</Button>
        </div>
      </div>
      <div className="mt-3 banner">
      <img src={BannerImg} alt="" className="w-100 rounded-3"/>
      </div>
    </div>
  );
};

export default SideBar;
