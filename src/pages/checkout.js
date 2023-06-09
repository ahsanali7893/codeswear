import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import Link from "next/link";

const CheckOut = ({cart, clearCart, subTotal}) => {
  return (
    <div>
      <Navbar />
      <div className="container px-2 sm:m-auto">
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
                class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
              rows="2"
              cols="30"
              class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <div className="mx-auto flex">
            <div className="px-2 w-1/2">
              <div class="mb-4">
                <label htmlFor="phone" class="leading-7 text-sm text-gray-600">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div class="mb-4">
                <label htmlFor="city" class="leading-7 text-sm text-gray-600">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto flex">
            <div className="px-2 w-1/2">
              <div class="mb-4">
                <label
                  htmlFor="province"
                  class="leading-7 text-sm text-gray-600"
                >
                  Province
                </label>
                <input
                  type="text"
                  id="province"
                  name="province"
                  class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div class="mb-4">
                <label
                  htmlFor="pincode"
                  class="leading-7 text-sm text-gray-600"
                >
                  PinCode
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
        <h2 className="font-bold text-xl">2. Review Cart Items & Pay</h2>
        <div className="sideCart bg-pink-100 p-8 m-4">
          <span className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"></span>
          <ol className="list-decimal font-semibold">
            {cart &&
              typeof cart === "object" &&
              Object.keys(cart).length === 0 && (
                <div className="my-4 font-semibold">Your Cart is Empty!</div>
              )}
            {cart &&
              typeof cart === "object" &&
              Object.keys(cart).map((k) => {
                return (
                  <li key={k}>
                    <div className="item flex my-5">
                      <div className="w-2/3 font-semibold">{cart[k].name}</div>
                      <div className="w-1/3 font-semibold flex items-center justify-center text-lg">
                        <AiFillMinusCircle className="cursor-pointer text-pink-500" />
                        <span className="mx-2">{cart[k].qty}</span>
                        <AiFillPlusCircle className="cursor-pointer text-pink-500" />
                      </div>
                    </div>
                  </li>
                );
              })}
          </ol>
              <span className="total">Subtotal: ₨{subTotal}</span>
        </div>
        <div className="mx-4">
        <Link href="/checkout"><button className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
            <BsFillBagCheckFill className="m-1" />
            Pay ₨ {subTotal}
          </button></Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckOut;
