import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";

const CheckOut = () => {
  return (
    <div>
      <Navbar />
      <div className="container m-auto">
        <h1 className="font-bold text-3xl my-8 text-center">CheckOut</h1>
        <h2 className="font-bold text-xl">1. Delivery Details</h2>
        <div className="mx-auto flex">
          <div className="px-2 w-1/2">
            <div class="mb-4">
              <label htmlFor="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="name"
                id="email"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div class="mb-4">
              <label htmlFor="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            </div>
          </div>
          <div className="px-2 w-full">
            <div class="mb-4">
              <label htmlFor="address" class="leading-7 text-sm text-gray-600">
                Address
              </label>
              <textarea
                id="Address"
                name="Address"
                rows='2'
                cols='30'
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckOut;
