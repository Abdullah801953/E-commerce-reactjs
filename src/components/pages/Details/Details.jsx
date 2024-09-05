import React, { useState } from "react";
import "../../pages/Details/Details.css";
import "../../pages/Listing/Listing.css";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Button, ButtonBase, Rating } from "@mui/material";
import Chip from "@mui/material/Chip";
import { ZoomImage } from "react-image-zoom-on-hover";
import Slider from "react-slick";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import SideBar from "../../SideBar/SideBar";
import GradeIcon from "@mui/icons-material/Grade";
import Products from "../../Products/Products"
const Details = () => {
  const [selectWeight, SetSelectWeight] = useState(2);
  const [selectImg, setSelectImg] = useState(3);
  const [addCart, setAddCart] = useState(1);
  const [tabActive, setTabActive] = useState(0);
  const [value0, setValue1] = React.useState(5);
  const [value1, setValue2] = React.useState(4);
  const [value2, setValue3] = React.useState(3);
  const [reply, setReply] = useState(null);

  const goto = (index) => {
    setSelectImg(index);
  };
  const WeightIndex = (index) => {
    SetSelectWeight((Prev) => (Prev === index ? "All" : index));
  };
  const addCartItem = () => {
    setAddCart(addCart + 1);
  };
  const removeCartItem = () => {
    if (addCart !== 0) {
      setAddCart(addCart - 1);
    }
  };
  const replyIndex = (index) => {
    setReply(index);
  };
  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplayspeed: 3000,
  };
  return (
    <section className="details-page">
      <div className="container-fluid">
        <div className="bread-crumb">
          <ul className="list list-inline">
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
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 part-1">
            <div className="row">
              <div className="col-md-6 ">
                <div className="product-zoom">
                  <ZoomImage
                    imageUrl={`https://www.jiomart.com/images/product/original/493839312/apple-iphone-15-128gb-blue-digital-o493839312-p604568766-${selectImg}-202309141252.jpeg?im=Resize=(420,420)`}
                    imageZoomPosition="center"
                  />
                </div>
                <Slider {...settings} className="zoom-slider">
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/493839312/apple-iphone-15-128gb-blue-digital-o493839312-p604568766-1-202309141252.jpeg?im=Resize=(150,150)`}
                      alt=""
                      className="w-100"
                      onClick={() => {
                        goto(1);
                      }}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/493839312/apple-iphone-15-128gb-blue-digital-o493839312-p604568766-2-202309141252.jpeg?im=Resize=(150,150)`}
                      alt=""
                      className="w-100"
                      onClick={() => {
                        goto(2);
                      }}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/493839312/apple-iphone-15-128gb-blue-digital-o493839312-p604568766-3-202309141252.jpeg?im=Resize=(150,150)`}
                      alt=""
                      className="w-100"
                      onClick={() => {
                        goto(3);
                      }}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/493839312/apple-iphone-15-128gb-blue-digital-o493839312-p604568766-4-202309141252.jpeg?im=Resize=(150,150)`}
                      alt=""
                      className="w-100"
                      onClick={() => {
                        goto(4);
                      }}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/493839312/apple-iphone-15-128gb-blue-digital-o493839312-p604568766-5-202309141252.jpeg?im=Resize=(150,150)`}
                      alt=""
                      className="w-100"
                      onClick={() => {
                        goto(5);
                      }}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/493839312/apple-iphone-15-128gb-blue-digital-o493839312-p604568766-6-202309141252.jpeg?im=Resize=(150,150)`}
                      alt=""
                      className="w-100"
                      onClick={() => {
                        goto(6);
                      }}
                    />
                  </div>
                </Slider>
              </div>
              <div className="col-md-6 product-info">
                <Chip label="Sale Off" />
                <h1>Seeds of Change Organic Quinoa, Brown</h1>
                <div className="d-flex align-items-center rating-info">
                  <Rating
                    name="half-rating-read"
                    defaultValue={3.5}
                    precision={0.5}
                    readOnly
                  />
                  <span className="review-count">(32 reviews)</span>
                </div>
                <div className="price-section d-flex align-items-center">
                  <span className="bg-green reply">$38</span>
                  <span className="d-block">
                    <h6>26% Off</h6>
                    <h3>$52</h3>
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam rem officia, corrupti reiciendis minima nisi modi,
                  quasi, odio minus dolore impedit fuga eum eligendi.
                </p>
                <div className="prod-weight d-flex align-items-center mb-3">
                  <span className="text-bold">Size/Weight:</span>
                  <ul className="list list-inline mb-0 ">
                    <li className="list-inline-item">
                      <a
                        className={`tag ${selectWeight === 0 ? "active" : ""}`}
                        onClick={() => {
                          WeightIndex(0);
                        }}
                      >
                        50g
                      </a>
                    </li>
                    <li
                      className="list-inline-item"
                      onClick={() => {
                        WeightIndex(1);
                      }}
                    >
                      <a
                        className={`tag ${selectWeight === 1 ? "active" : ""}`}
                      >
                        60g
                      </a>
                    </li>
                    <li
                      className="list-inline-item"
                      onClick={() => {
                        WeightIndex(2);
                      }}
                    >
                      <a
                        className={`tag ${selectWeight === 2 ? "active" : ""}`}
                      >
                        80kg
                      </a>
                    </li>
                    <li
                      className="list-inline-item"
                      onClick={() => {
                        WeightIndex(3);
                      }}
                    >
                      <a
                        className={`tag ${selectWeight === 3 ? "active" : ""}`}
                      >
                        100g
                      </a>
                    </li>
                    <li
                      className="list-inline-item"
                      onClick={() => {
                        WeightIndex(4);
                      }}
                    >
                      <a
                        className={`tag ${selectWeight === 4 ? "active" : ""}`}
                      >
                        150g
                      </a>
                    </li>
                  </ul>
                </div>
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
                  <div className="btn-cart">
                    <Button variant="contained">
                      <AddShoppingCartOutlinedIcon />
                      Add to cart
                    </Button>
                  </div>
                </div>
                <div className="prod-detail d-flex align-items-center pt-5">
                  <div className="left-detail">
                    <ul>
                      <li>
                        Type: <span className="bg-green reply">Organic</span>
                      </li>
                      <li>
                        MFG: <span className="bg-green reply">Jun 4.2022</span>
                      </li>
                      <li>
                        LIFE: <span className="bg-green reply">70 days</span>
                      </li>
                    </ul>
                  </div>

                  <div className="right-detail">
                    <ul>
                      <li>
                        SKU: <span className="bg-green reply">FWM15VKT</span>
                      </li>
                      <li>
                        Tags:{" "}
                        <span className="bg-green reply">
                          Snack, Organic, Brown
                        </span>
                      </li>
                      <li>
                        Stock:{" "}
                        <span className="bg-green reply">8 Items In Stock</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-4 p-5 desc">
              <div className="custom-tab">
                <ul className="list list-inline tabs">
                  <li className="list-inline-item">
                    <Button
                      onClick={() => {
                        setTabActive(0);
                      }}
                      className={tabActive===0?"btn-g":""}
                    >
                      Description
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button
                      onClick={() => {
                        setTabActive(1);
                      }}
                      className={tabActive===1?"btn-g":""}
                    >
                      Additional info
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button
                      onClick={() => {
                        setTabActive(2);
                      }}
                      className={tabActive===2?"btn-g":""}
                    >
                      Reviews (3)
                    </Button>
                  </li>
                </ul>
              </div>
              {tabActive === 0 ? (
                <div className="tab-desc mt-4">
                  <p>
                    Uninhibited carnally hired played in whimpered dear gorilla
                    koala depending and much yikes off far quetzal goodness and
                    from for grimaced goodness unaccountably and meadowlark near
                    unblushingly crucial scallop tightly neurotic hungrily some
                    and dear furiously this apart.
                  </p>
                  <p>
                    Spluttered narrowly yikes left moth in yikes bowed this that
                    grizzly much hello on spoon-fed that alas rethought much
                    decently richly and wow against the frequent fluidly at
                    formidable acceptably flapped besides and much circa far
                    over the bucolically hey precarious goldfinch mastodon
                    goodness gnashed a jellyfish and one however because.
                  </p>
                  <div className="tab-desc-list d-flex">
                    <ul className="left-side-disc">
                      <li>Type Of Packing</li>
                      <li>Color</li>
                      <li>Quantity Per Case</li>
                      <li>Ethyl Alcohol</li>
                      <li>Piece In One</li>
                    </ul>
                    <ul className="right-side-disc">
                      <li>Bottle</li>
                      <li>Green, Pink, Powder Blue, Purple</li>
                      <li>100ml</li>
                      <li>70%</li>
                      <li>Carton</li>
                    </ul>
                  </div>
                  <hr />
                  <p>
                    Laconic overheard dear woodchuck wow this outrageously taut
                    beaver hey hello far meadowlark imitatively egregiously
                    hugged that yikes minimally unanimous pouted flirtatiously
                    as beaver beheld above forward energetic across this jeepers
                    beneficently cockily less a the raucously that magic upheld
                    far so the this where crud then below after jeez enchanting
                    drunkenly more much wow callously irrespective limpet.
                  </p>
                  <h4>Packaging & Delivery</h4>
                  <hr />
                  <p>
                    Less lion goodness that euphemistically robin expeditiously
                    bluebird smugly scratched far while thus cackled sheepishly
                    rigid after due one assenting regarding censorious while
                    occasional or this more crane went more as this less much
                    amid overhung anathematic because much held one exuberantly
                    sheep goodness so where rat wry well concomitantly.
                  </p>
                  <p>
                    Scallop or far crud plain remarkably far by thus far iguana
                    lewd precociously and and less rattlesnake contrary caustic
                    wow this near alas and next and pled the yikes articulate
                    about as less cackled dalmatian in much less well jeering
                    for the thanks blindly sentimental whimpered less across
                    objectively fanciful grimaced wildly some wow and rose
                    jeepers outgrew lugubrious luridly irrationally attractively
                    dachshund.
                  </p>
                  <h4 className="pb-3">Suggested Use</h4>
                  <ul>
                    <li>Refrigeration not necessary.</li>
                    <li>Stir before serving</li>
                  </ul>
                  <h4 className="pb-3">Other Ingredients</h4>
                  <ul>
                    <li>Organic raw pecans, organic raw cashews.</li>
                    <li>
                      This butter was produced using a LTG (Low Temperature
                      Grinding) process
                    </li>
                    <li>
                      Made in machinery that processes tree nuts but does not
                      process peanuts, gluten, dairy or soy
                    </li>
                  </ul>
                  <h4 className="pb-3">Warnings</h4>
                  <ul>
                    <li>
                      Oil separation occurs naturally. May contain pieces of
                      shell.
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {tabActive === 1 ? (
                <table className="font-md mt-4">
                  <tbody className>
                    <tr className="stand-up">
                      <th>Stand Up</th>
                      <td>
                        <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                      </td>
                    </tr>
                    <tr className="folded-wo-wheels">
                      <th>Folded (w/o wheels)</th>
                      <td>
                        <p>32.5″L x 18.5″W x 16.5″H</p>
                      </td>
                    </tr>
                    <tr className="folded-w-wheels">
                      <th>Folded (w/ wheels)</th>
                      <td>
                        <p>32.5″L x 24″W x 18.5″H</p>
                      </td>
                    </tr>
                    <tr className="door-pass-through">
                      <th>Door Pass Through</th>
                      <td>
                        <p>24</p>
                      </td>
                    </tr>
                    <tr className="frame">
                      <th>Frame</th>
                      <td>
                        <p>Aluminum</p>
                      </td>
                    </tr>
                    <tr className="weight-wo-wheels">
                      <th>Weight (w/o wheels)</th>
                      <td>
                        <p>20 LBS</p>
                      </td>
                    </tr>
                    <tr className="weight-capacity">
                      <th>Weight Capacity</th>
                      <td>
                        <p>60 LBS</p>
                      </td>
                    </tr>
                    <tr className="width">
                      <th>Width</th>
                      <td>
                        <p>24″</p>
                      </td>
                    </tr>
                    <tr className="handle-height-ground-to-handle">
                      <th>Handle height (ground to handle)</th>
                      <td>
                        <p>37-45″</p>
                      </td>
                    </tr>
                    <tr className="wheels">
                      <th>Wheels</th>
                      <td>
                        <p>12″ air / wide track slick tread</p>
                      </td>
                    </tr>
                    <tr className="seat-back-height">
                      <th>Seat back height</th>
                      <td>
                        <p>21.5″</p>
                      </td>
                    </tr>
                    <tr className="head-room-inside-canopy">
                      <th>Head room (inside canopy)</th>
                      <td>
                        <p>25″</p>
                      </td>
                    </tr>
                    <tr className="pa_color">
                      <th>Color</th>
                      <td>
                        <p>Black, Blue, Red, White</p>
                      </td>
                    </tr>
                    <tr className="pa_size">
                      <th>Size</th>
                      <td>
                        <p>M, S</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                ""
              )}
              {tabActive === 2 ? (
                <div className="review-tab mt-4">
                  <div className="row">
                    <div className="col-md-8">
                      <h5>Customer questions & answers</h5>
                      <div
                        className="card mt-4 p-3"
                        onMouseEnter={() => {
                          replyIndex(0);
                        }}
                        onMouseLeave={() => {
                          setReply(false);
                        }}
                      >
                        <div className="user-review d-flex">
                          <div className="user-img">
                            <img
                              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"
                              alt=""
                            />
                            <div className="user-name">
                              <span className="bg-green d-block">Sienna</span>
                            </div>
                          </div>
                          <div className="user-msg">
                            <div className="user-info d-flex">
                              <span>December 4, 2022 at 3:12 pm</span>
                              <Rating
                                name="read-only"
                                value={value0}
                                readOnly
                                size="small"
                              />
                            </div>
                            <p className="pt-3">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Delectus, suscipit
                              exercitationem accusantium obcaecati quos
                              voluptate nesciunt facilis itaque modi commodi
                              dignissimos sequi repudiandae minus ab deleniti
                              totam officia id incidunt?{" "}
                              <span className="bg-green reply">
                                {reply === 0 ? "Reply" : ""}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mt-4 p-3"
                        onMouseEnter={() => {
                          replyIndex(1);
                        }}
                        onMouseLeave={() => {
                          setReply(false);
                        }}
                      >
                        <div className="user-review d-flex">
                          <div className="user-img">
                            <img
                              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-3.png"
                              alt=""
                            />
                            <div className="user-name">
                              <span className="bg-green d-block">Brenna</span>
                            </div>
                          </div>
                          <div className="user-msg">
                            <div className="user-info d-flex">
                              <span className="date">
                                December 4, 2022 at 3:12 pm
                              </span>
                              <Rating
                                name="read-only"
                                value={value1}
                                readOnly
                                size="small"
                              />
                            </div>
                            <p className="pt-3">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Delectus, suscipit
                              exercitationem accusantium obcaecati quos
                              voluptate nesciunt facilis itaque modi commodi
                              dignissimos sequi repudiandae minus ab deleniti
                              totam officia id incidunt?{" "}
                              <span className="bg-green reply">
                                {reply === 1 ? "Reply" : ""}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mt-4 p-3"
                        onMouseEnter={() => {
                          replyIndex(2);
                        }}
                        onMouseLeave={() => {
                          setReply(false);
                        }}
                      >
                        <div className="user-review d-flex">
                          <div className="user-img">
                            <img
                              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-4.png"
                              alt=""
                            />
                            <div className="user-name">
                              <span className="bg-green d-block">Gemma</span>
                            </div>
                          </div>
                          <div className="user-msg">
                            <div className="user-info d-flex">
                              <span>December 4, 2022 at 3:12 pm</span>
                              <Rating
                                name="read-only"
                                value={value2}
                                readOnly
                                size="small"
                              />
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Delectus, suscipit
                              exercitationem accusantium obcaecati quos
                              voluptate nesciunt facilis itaque modi commodi
                              dignissimos sequi repudiandae minus ab deleniti
                              totam officia id incidunt?{" "}
                              <span className="bg-green reply">
                                {reply === 2 ? "Reply" : ""}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <form action="" className="review-form">
                        <h4>Add a review</h4>
                        <GradeIcon fontSize="small" htmlColor="gray" />
                        <GradeIcon fontSize="small" htmlColor="gray" />
                        <GradeIcon fontSize="small" htmlColor="gray" />
                        <GradeIcon fontSize="small" htmlColor="gray" />
                        <GradeIcon fontSize="small" htmlColor="gray" />
                        <div className="form-group mb-4 mt-5">
                          <textarea
                            className="form-control"
                            placeholder="Write Comment"
                            style={{ height: "200px" }}
                          ></textarea>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control p-3"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control p-3"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group mt-4">
                          <input
                            type="text"
                            className="form-control p-3"
                            placeholder="Website"
                          />
                        </div>
                        <Button variant="contained" className="mt-3">
                          Submit Review
                        </Button>
                      </form>
                    </div>
                    <div className="col-md-4">
                      <h5>Customer reviews</h5>
                      <div className="overall-rating d-flex align-items-center gap-3 mt-3 mb-4">
                        <Rating
                          name="half-rating-read"
                          defaultValue={3.5}
                          precision={0.5}
                          readOnly
                          size="small"
                        />
                        <strong>4.8 out of 5</strong>
                      </div>

                      <div
                        className="progress mb-3"
                        role="progressbar"
                        aria-label="Example with label"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      
                      >
                        
                        <div className="progress-bar" style={{ width: "50%" }}>
                          50%
                        </div>
                      </div>

                      <div
                        className="progress mb-3"
                        role="progressbar"
                        aria-label="Example with label"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      
                      >
                        <div className="progress-bar" style={{ width: "25%" }}>
                          25%
                        </div>
                      </div>
                      <div
                        className="progress mb-3"
                        role="progressbar"
                        aria-label="Example with label"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      
                      >
                        <div className="progress-bar" style={{ width: "45%" }}>
                          45%
                        </div>
                      </div>
                      <div
                        className="progress mb-3"
                        role="progressbar"
                        aria-label="Example with label"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      
                      >
                        <div className="progress-bar" style={{ width: "65%" }}>
                          65%
                        </div>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Example with label"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      
                      >
                        <div className="progress-bar" style={{ width: "85%" }}>
                          85%
                        </div>
                      </div>
                    </div>
                     
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            <section className="homeProducts pt-0 productrow2">
        <div className="container-fluid">
          <div className="d-flex align-items-center pb-3 mt-5">
            <h4 className="hd mb-0">Related products</h4>
            <br />
            <br />
            
          </div>
          <div className="row homeProducts homeProductsRow2 pt-0">
           
            <div>
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
          </div>
          <div className="col-md-3 part-2">
            <SideBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
