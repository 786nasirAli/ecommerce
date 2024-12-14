"use client"
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";

import React from 'react';
import 'tailwindcss/tailwind.css';
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-yellow-100 py-4">
  <div className="flex justify-between items-center px-5 md:px-10 py-4 bg-yellow-100">

    {/* Left Side - Links */}
    <div className="flex space-x-8 md:flex-row flex-col md:space-x-8 space-y-4 md:space-y-0">
      <Link href="/" className="text-black font-medium">Home</Link>
      <Link href="/Shop" className="text-black font-medium">Shop</Link>
      <Link href="/Cart" className="text-black font-medium">About</Link>
      <Link href="/Contact" className="text-black font-medium">Contact</Link>
    </div>

    {/* Right Side - Icons */}
    <div className="flex space-x-6 items-center">
      <a href="#" className="text-black text-2xl"><MdOutlinePersonAddAlt1 /></a>
      <a href="#" className="text-black text-2xl"><FiSearch /></a>
      <a href="#" className="text-black text-2xl"><AiOutlineHeart /></a>
      <a href="#" className="text-black text-2xl"><HiOutlineShoppingCart /></a>
    </div>

    {/* Mobile Menu Toggle */}
    <div className="md:hidden flex items-center">
      <button className="text-black text-2xl">
        {/* Add a hamburger icon or menu toggle functionality */}
        &#9776;
      </button>
    </div>
  </div>

  {/* Mobile Menu (Hidden on medium and larger screens) */}
  <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
    <Link href="/" className="text-black font-medium">Home</Link>
    <Link href="/Shop" className="text-black font-medium">Shop</Link>
    <Link href="/Cart" className="text-black font-medium">About</Link>
    <Link href="/Contact" className="text-black font-medium">Contact</Link>
  </div>
</nav>

    );
};

export default Navbar;
