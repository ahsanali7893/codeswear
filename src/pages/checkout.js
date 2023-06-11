import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";

const CheckOut = () => {
  return( 
    <div>
    <Navbar/>
    <div className="container m-auto">
    <h1 className="font-bold text-3xl my-8 text-center">CheckOut</h1>
    <h2>1. Delivery Details</h2>
    <div className="mx-auto">
      <div className="px-2 w-1/2"></div>
    </div>
  </div>
  <Footer/>
  </div>
  )
};

export default CheckOut;
