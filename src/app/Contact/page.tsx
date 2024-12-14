import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function Contact() {
  return (
    <div>
      <div className="w-full ">
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
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex flex-col justify-center items-center"
            style={{ backgroundImage: 'url("/my account bg.jpg")' }}
          >
            {/* Logo */}
            <div className="mb-4">
              <img src="/triangle.png" alt="Logo" className="w-16 h-16" />
            </div>
            {/* Text */}
            <h1 className="font-bold text-3xl ">Contact</h1>
            <p className="text-black   flex">
              Home
              <IoIosArrowForward />
              Contact
            </p>
          </div>
        </div>
      </div>
      <div className="text-center pt-20 ">
        <h1 className="font-bold text-3xl">Get In Touch With Us</h1>
        <ul>
          <li>
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us
          </li>
          <li>
            An Email. Our Staff Always Be There To Help You Out. Do Not
            Hesitate!
          </li>
        </ul>
      </div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex">
          <div className="flex gap-4 text-black">
            <div>
              <ul>
                <li>
                  <h1 className=" font-bold text-2xl flex">
                    <MdLocationOn size={30} />
                    Address
                  </h1>{" "}
                  <br />
                </li>
                <li>236 5th SE Avenue, New</li>
                <li>York NY10000, United</li>
                <li>States</li>
              </ul>
              <ul>
                <li>
                  <h1 className=" font-bold text-2xl flex gap-4 text-center ">
                    <FaPhone size={25} className="" />
                    Phone
                  </h1>{" "}
                  <br />
                </li>
                <li>Mobile: +(84) 546-6789</li>
                <li>Hotline: +(84) 456-6789</li>
              </ul>

              <ul>
                <li>
                  <h1 className=" font-bold text-xl flex gap-4 text-center">
                    <GoClockFill size={25} />
                    Working Time
                  </h1>{" "}
                  <br />
                </li>
                <li>Monday-Friday: 9:00 -</li>
                <li>22:00</li>
                <li>Saturday-Sunday: 9:00 -</li>
                <li>21:00</li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Your name
              </label>
              <input
                type="taxt"
                id="name"
                name="your name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your name"
              />
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your Email"
              />
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Subject
              </label>
              <input
                type="text"
                id="suject"
                name="subject"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="This is on option"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-22 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                placeholder="Hi I,d like ask about"
                defaultValue={""}
              />
            </div>
            <button className="text-gray-800 bg-white border-2 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded-full text-lg w-[150px] h-[48px]">
              Submit
            </button>
          </div>
        </div>
        <div className="flex gap-40 px-20 pb-20  pt-20 bg-[#faf4f4]">
          <ul>
            <li className="font-bold text-xl">Free Delivery</li>
            <li>For all oders over $50, consectetur </li>
            <li>adipim scing elit</li>
          </ul>
          <ul>
            <li className="font-bold text-xl">Free Delivery</li>
            <li>For all oders over $50, consectetur </li>
            <li>adipim scing elit</li>
          </ul>
          <ul>
            <li className="font-bold text-xl">Free Delivery</li>
            <li>For all oders over $50, consectetur </li>
            <li>adipim scing elit</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
