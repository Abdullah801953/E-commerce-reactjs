import { React, useState } from "react";
import "../Cart/Cart.css";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Checkbox from "@mui/material/Checkbox";
import assets from "../../../assets/Cat_img";
import { Button, Rating } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Cart = () => {
  const [addCart, setAddCart] = useState(0);
  const [addCart1, setAddCart1] = useState(0);
  const [addCart2, setAddCart2] = useState(0);

  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const addCartItem = () => {
    setAddCart(addCart + 1);
  };
  const removeCartItem = () => {
    if (addCart !== 0) {
      setAddCart(addCart - 1);
    }
  };
  const addCartItem1 = () => {
    setAddCart1(addCart1 + 1);
  };
  const removeCartItem1 = () => {
    if (addCart1 !== 0) {
      setAddCart1(addCart1 - 1);
    }
  };
  const addCartItem2 = () => {
    setAddCart2(addCart2 + 1);
  };
  const removeCartItem2 = () => {
    if (addCart2 !== 0) {
      setAddCart2(addCart2 - 1);
    }
  };

  return (
    <div className="cart">
      <div className="container-fluid">
        <div className="bread-crumb">
          <ul className="list list-inline mb-0">
            <li className="list-inline-item">
              <Link className="bg-green reply">
                <HomeOutlinedIcon />
                Home
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="bg-green reply">
                <ChevronRightOutlinedIcon />
                Vegetables & Tubers
              </Link>
            </li>
            <li className="list-inline-item">
              <ChevronRightOutlinedIcon />
              Snack
            </li>
          </ul>
        </div>
        <div className="cart-heading mb-4">
          <h1>Your Cart</h1>
          <div className="cart-bott d-flex align-items-center">
            <span>
              There are <span className="bg-green">3</span> products in your
              cart
            </span>
            <span className="ms-auto d-flex align-items-center">
              <DeleteOutlineOutlinedIcon />
              Clear Cart
            </span>
          </div>
        </div>
        <div className="row">
          <div className="cart-container col-md-8 table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <Checkbox />
                    Product
                  </th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3">
                    <div className="d-flex align-items-center">
                      <div className="img">
                        <Checkbox /> <img src={assets.Cat1} alt="" />
                      </div>
                      <div className="info-cart ps-4">
                        <Link>
                          <h6>Field Roast Chao Cheese Creamy Original</h6>
                        </Link>
                        <Rating
                          name="half-rating-read"
                          defaultValue={3.5}
                          precision={0.5}
                          readOnly
                          size="small"
                        />
                        <span>(4.5)</span>
                      </div>
                    </div>
                  </td>
                  <td className="unit-price">$2.51</td>
                  <td>
                    <div className="add-cart d-flex align-items-center">
                      <div className="cart-counter">
                        <input
                          type="number"
                          value={addCart}
                          onChange={() => {
                            function inputHandler(e) {
                              e.preventDefault();
                            }
                          }}
                        />
                        <div className="up" onClick={addCartItem}>
                          <KeyboardArrowUpIcon />
                        </div>
                        <div className="down" onClick={removeCartItem}>
                          <KeyboardArrowDownIcon />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="full-price">$2.51</td>
                  <td className="text-center">
                    <DeleteOutlineOutlinedIcon />
                  </td>
                </tr>
                <tr>
                  <td className="px-3">
                    <div className="d-flex align-items-center">
                      <div className="img">
                        <Checkbox /> <img src={assets.Cat3} alt="" />
                      </div>
                      <div className="info-cart ps-4">
                        <Link>
                          <h6>Field Roast Chao Cheese Creamy Original</h6>
                        </Link>
                        <Rating
                          name="half-rating-read"
                          defaultValue={3.5}
                          precision={0.5}
                          readOnly
                          size="small"
                        />
                        <span>(4.5)</span>
                      </div>
                    </div>
                  </td>
                  <td className="unit-price">$2.51</td>
                  <td>
                    <div className="add-cart d-flex align-items-center">
                      <div className="cart-counter">
                        <input
                          type="number"
                          value={addCart1}
                          onChange={() => {
                            function inputHandler(e) {
                              e.preventDefault();
                            }
                          }}
                        />
                        <div className="up" onClick={addCartItem1}>
                          <KeyboardArrowUpIcon />
                        </div>
                        <div className="down" onClick={removeCartItem1}>
                          <KeyboardArrowDownIcon />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="full-price">$2.51</td>
                  <td className="text-center">
                    <DeleteOutlineOutlinedIcon />
                  </td>
                </tr>
                <tr>
                  <td className="px-3">
                    <div className="d-flex align-items-center">
                      <div className="img">
                        <Checkbox /> <img src={assets.Cat2} alt="" />
                      </div>
                      <div className="info-cart ps-4">
                        <Link>
                          <h6>Field Roast Chao Cheese Creamy Original</h6>
                        </Link>
                        <Rating
                          name="half-rating-read"
                          defaultValue={3.5}
                          precision={0.5}
                          readOnly
                          size="small"
                        />
                        <span>(4.5)</span>
                      </div>
                    </div>
                  </td>
                  <td className="unit-price">$2.51</td>
                  <td>
                    <div className="add-cart d-flex align-items-center">
                      <div className="cart-counter">
                        <input
                          type="number"
                          value={addCart2}
                          onChange={() => {
                            function inputHandler(e) {
                              e.preventDefault();
                            }
                          }}
                        />
                        <div className="up" onClick={addCartItem2}>
                          <KeyboardArrowUpIcon />
                        </div>
                        <div className="down" onClick={removeCartItem2}>
                          <KeyboardArrowDownIcon />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="full-price">$2.51</td>
                  <td className="text-center">
                    <DeleteOutlineOutlinedIcon />
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
            <div className="cart-checkout-btn d-flex">
              <div className="checkout-btn-left">
                <Button variant="contained">
                  <ArrowBackOutlinedIcon />
                  Countinue Shopping
                </Button>
              </div>
              <div className="checkout-btn-right">
                <Button variant="contained">
                  <UpdateOutlinedIcon />
                  Update Cart
                </Button>
              </div>
            </div>
          </div>
          <div className="cart-checkout col-md-4">
            <div className="card p-4 border">
              <div className="cart-checkout-detail border mb-3 p-3">
                <div className="d-flex align-items-center mb-4">
                  <h6 className="mb-0 sub-total text-bold">Subtotal</h6>
                  <h5 className="mb-0 ms-auto bg-green">$12.31</h5>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <h6 className="mb-0 sub-total text-bold">Shipping</h6>
                  <h5 className="mb-0 ms-auto ">Free</h5>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <h6 className="mb-0 sub-total text-bold">Estimate for</h6>
                  <h5 className="mb-0 ms-auto">India</h5>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <h6 className="mb-0 sub-total text-bold">Total</h6>
                  <h5 className="mb-0 ms-auto bg-green">$12.31</h5>
                </div>
              </div>

              <Button variant="contained">Proceed To ChekOut</Button>
            </div>
          </div>
          <div className="shipping mt-5">
            <div className="row">
              <div className="col-md-5 calc-shipping">
                <div className="card p-5">
                  <h4>Calcuate Shipping</h4>
                  <h6>
                    Flat rate:<span className="bg-green">5%</span>
                  </h6>
                  <div>
                    <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                      <Select
                        multiple
                        displayEmpty
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput />}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return <em>India</em>;
                          }

                          return selected.join(", ");
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem disabled value="">
                          <em>Country</em>
                        </MenuItem>
                        {names.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <form className="row mt-3 shipping-form">
                    <div className="col-md-6 shipping-inp1">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="State/Country"
                      />
                    </div>
                    <div className="col-md-6 shipping-inp2">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="PostCode/ZIP"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 apply-coupn ms-5 pt-5">
                <h4>Apply Coupon</h4>
                <h5>Using A Promo Code?</h5>
                <div className="row mt-3">
                  <div className="col-md-3 coupn-input">
                  <input type="text" className="form-control" placeholder="Enter Your Code"/>
                  </div>
                 <div className="col-md-9 apply-coupn-btn">
                  <Button variant="contained">Apply</Button>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
