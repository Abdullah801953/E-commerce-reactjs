import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import PageFirst from "./components/pages/Home/PageFirst";
import Listing from "./components/pages/Home/Listing/Listing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/pages/NotFound/NotFound";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<PageFirst />} />
          <Route path="/listing" element={<Listing/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
