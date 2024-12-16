import React from "react";
import { VscSettings } from "react-icons/vsc";
import { BsGridFill } from "react-icons/bs";
import { CgDisplayFullwidth } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div>
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
                  <h1 className="font-bold text-3xl ">Shop</h1>
                  <p className="text-black   flex">
                    Home
                    <IoIosArrowForward />
                   Shop
                  </p>
                </div>
                </div>
                
      <div className="flex bg-[#FAF4F4] gap-40 w-[1440px] h-[100px] pt-6 pb-6">
        <div className="pl-20 pt-5 pb-6">
          <ul className="flex gap-4">
            <li>
              <VscSettings />
            </li>
            <li>Filter</li>
            <li className="pl-4">
              <BsGridFill />
            </li>
            <li className="pl-4">
              <CgDisplayFullwidth />
            </li>
            <li className="md:border-l text-black"></li>
            <li>Showing 1 16 of 32 results</li>
          </ul>
        </div>
        <div className="space-4 flex items-center">
          {" "}
          {/* Added flex and items-center */}
          <div className="mr-20">
            {" "}
            {/* Added margin-right */}
            <label htmlFor="show">Show</label>
            <input
              type="text"
              placeholder="16"
              className="w-[55px] h-[55px] border-[1px] text-black text-center"
            />
          </div>
          <div>
            <label htmlFor="Short by">Sort by</label>{" "}
            {/* Corrected typo: "Short" to "Sort" */}
            <input
              type="text"
              placeholder="Default"
              className="w-[188px] h-[55px]"
            />
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link className="block relative h-48 rounded overflow-hidden" href={""}>
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="c1-removebg-preview.png"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link className="block relative h-48 rounded overflow-hidden" href={""}>
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="c2-removebg-preview.png"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Shooting Stars
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link className="block relative h-48 rounded overflow-hidden" href={""}>
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="c3-removebg-preview.png"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Neptune
          </h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link className="block relative h-48 rounded overflow-hidden" href={""}>
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="c4-removebg-preview.png"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The 400 Blows
          </h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link className="block relative h-48 rounded overflow-hidden" href={""}>
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="c5-removebg-preview.png"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link className="block relative h-48 rounded overflow-hidden" href={""}>
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="c6-removebg-preview.png"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Shooting Stars
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link className="block relative h-48 rounded overflow-hidden" href={""}>
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="c7-removebg-preview.png"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Neptune
          </h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link className="block relative h-48 rounded overflow-hidden" href={""}>
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="c8-removebg-preview.png"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The 400 Blows
          </h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link className="block relative h-48 rounded overflow-hidden" href={""}>
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="c9-removebg-preview.png"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link className="block relative h-48 rounded overflow-hidden" href={""}>
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="c10-removebg-preview.png"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Shooting Stars
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link className="block relative h-48 rounded overflow-hidden" href={""}>
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="11.png"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Neptune
          </h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link className="block relative h-48 rounded overflow-hidden" href={""}>
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="c12-removebg-preview.png"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The 400 Blows
          </h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link className="block relative h-48 rounded overflow-hidden" href={""}>
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="c18-removebg-preview.png"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link className="block relative h-48 rounded overflow-hidden" href={""}>
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="c14-removebg-preview.png"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Shooting Stars
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link className="block relative h-48 rounded overflow-hidden" href={""}>
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="16.png"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Neptune
          </h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link className="block relative h-48 rounded overflow-hidden" href={""}>
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="c19-removebg-preview.png"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The 400 Blows
          </h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div></div>
  );
}
