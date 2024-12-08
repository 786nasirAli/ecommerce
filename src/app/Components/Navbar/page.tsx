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
            <div className="flex justify-between items-center px-10 py-4 bg-yellow-100">
      {/* Left Side - Links */}
      
<div className="flex space-x-8">
  <Link href="/" className="text-black font-medium">Home</Link>
  <Link href="/shop" className="text-black font-medium">Shop</Link>
  <Link href="/about" className="text-black font-medium">About</Link>
  <Link href="/contact" className="text-black font-medium">Contact</Link>
</div>
                <div className="flex space-x-6">
                    <a href="#" className="text-black"><MdOutlinePersonAddAlt1 />
                    </a>
                    <a href="#" className="text-black"><FiSearch />
                    </a>
                    <a href="#" className="text-black"><AiOutlineHeart />
                    </a>
                    <a href="#" className="text-black"><HiOutlineShoppingCart />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;