import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import MainBody from "./MainBody";
import Card from "./Card";


const Body = () => {
  return (
    <div className='body_container'>
      <Navbar />
      <MainBody />
      <Card/>
    </div>
  );
};

export default Body;
