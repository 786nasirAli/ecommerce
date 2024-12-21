"use client";
// components/Navbar.tsx
import { useState } from "react";
import { GoPersonFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link"; // Already imported
import { FiSearch } from "react-icons/fi";
import Sidebar from "./sidebar";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";


const Navbar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="flex flex-col bg-white">
        <nav
          className="px-4 sm:px-8 md:px-16 lg:px-20 py-6 sm:py-9 w-full bg-amber-100"
          aria-label="Main navigation"
        >
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex flex-col w-full sm:w-[64%]">
              <div className="flex flex-row sm:flex-row gap-4 sm:gap-5 justify-between self-stretch my-auto text-sm sm:text-base font-medium text-black">
                <button
                  onClick={toggleSidebar}
                  className="mt-4 sm:mt-0  text-black px-4 py-2 rounded-md focus:outline-none"
                >
                  <BsReverseLayoutTextSidebarReverse />

                </button>
                <Link
                  href="/"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  href="/Shop"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-200"
                >
                  Shop
                </Link>
                <Link
                  href="/Blog"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-200"
                >
                  Blog
                </Link>
                <Link
                  href="/Contact"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-200"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex justify-center sm:justify-start w-full sm:w-[36%] gap-10 pl-20">
              <Link href="/Myacount">
                <GoPersonFill size={30} />
              </Link>
              <Link href="/Product">
                <FiSearch size={30} />
              </Link>
              <Link href="/Shop">
                <GoHeart size={30} />
              </Link>
              <Link href="/Cart">
                <AiOutlineShoppingCart size={30} />
              </Link>
            </div>
          </div>
          
        </nav>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />{" "}
        {/* Add Sidebar */}
        {/* Rest of the component */}
      </div>
    </div>
  );
};

export default Navbar;
