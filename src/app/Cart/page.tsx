import React from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";


export default function Cart() {
  return (
    
    <div >
      <div className="relative w-full">
          {/* Background Image */}
          <Image
            src="/my account bg.jpg"
            alt="background"
            width={1440}
            height={316}
            className="w-full h-[300px]"
          />

          {/* Overlay with Logo and Text */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex flex-col justify-center items-center "
            style={{ backgroundImage: 'url("/my account bg.jpg")' }}
          >
            {/* Logo */}
            <div className="mb-4">
              <img src="/triangle.png" alt="Logo" className="w-16 h-16" />
            </div>
            {/* Text */}
            <h1 className="font-bold text-3xl ">Cart</h1>
            <p className="text-black   flex">
              Home
              <IoIosArrowForward />
              Contact
            </p>
          </div>
          </div>
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="pb-40 ">
              <ul className=" bg-[#FFF9E5] pt-3 pl-3 pb-3 flex  gap-20 w-[817px] h-[55px] rounded-lg ">
                <li>Product</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Subtotal</li>
              </ul>
              <div className="flex">
                <Image
                  className="bg-yellow-100 rounded-lg"
                  src="/asgard.png"
                  alt="Profile Image"
                  width={112.99}
                  height={92.02}
                />
                <ul className="flex pt-8 gap-8 pl-6 ">
                  <li>Asgaard sofa</li>
                  <li>Rs. 250,000.00</li>
                  <li className="w-[28px] h-[28px] border-gray-700 border-[1px] rounded-sm text-center">1</li>
                  <li className="text-black">Rs. 250,000.00</li>
                  <li className="text-[#FBEBB5]"><FaTrash />
                  </li>
                </ul>
              </div>
            </div>

            
          </div>
          <div className="  border-white bg-[#FFF9E5] border-2 justify-center text-center  w-[393px] h-[390px] py-4 px-8 rounded-lg">
            <h1 className="font-bold text-2xl text-black pb-40">Cart Totals</h1>

            <ul className="flex justify-center text-center gap-4 pb-4">
              <li>Subtota</li>
              <li>s. 250,000.00</li>
            </ul>
            <ul className="flex justify-center text-center gap-4 pb-6">
              <li>Total</li>
              <li className="text-[#B88E2F]">Rs. 250,000.00</li>
            </ul>
            <button className="bg-whitw justify-center text-center px-10 items-center text-black border-2 border-black px-4 py-2 rounded-lg">
              Check Out
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
