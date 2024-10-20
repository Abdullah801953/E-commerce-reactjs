import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import PageFirst from "./components/pages/Home/PageFirst";
import Listing from "./components/pages/Listing/Listing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/pages/NotFound/NotFound";
import Details from "./components/pages/Details/Details";
import Cart from "./components/pages/Cart/Cart"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<PageFirst />} />
          <Route path="/listing" element={<Listing/>} />
          <Route path="product/details" element={<Details/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
