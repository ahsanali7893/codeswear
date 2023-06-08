"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import "../src/app/globals.css";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subtotal }) => {
  console.log(cart, addToCart, removeFromCart, clearCart, subtotal);
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = useRef();
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center mb-1 py-2 shadow-md">
      <div className="logo mx-5">
        <Link href={"/"}>
          <Image
            width={200}
            height={40}
            src="/logo.webp"
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-4 font-bold md:text-md">
          <Link href={"/tshirts"}>
            <li>Tshirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/stickers"}>
            <li>Stickers</li>
          </Link>
          <Link href={"/mugs"}>
            <li>Mugs</li>
          </Link>
        </ul>
      </div>
      <div
        className="cursor-pointer cart absolute right-0 top-4 mx-5"
        onClick={toggleCart}
      >
        <AiOutlineShoppingCart className="text-xl md:text-2xl" />
      </div>
      <div
        ref={ref}
        className="sideCart w-72 h-full absolute top-0 right-0 bg-pink-100 px-8 p-10 transform transition-transform translate-x-full"
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"
          onClick={toggleCart}
        >
          <AiFillCloseCircle />
        </span>
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
        <div className="flex">
          <button className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
            <BsFillBagCheckFill className="m-1" />
            Checkout
          </button>
          <button
            onClick={clearCart}
            className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
