import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import PageFirst from "./components/pages/Home/PageFirst";
import Listing from "./components/pages/Home/Listing/Listing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<PageFirst />} />
          <Route path="/listing" element={<Listing/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
