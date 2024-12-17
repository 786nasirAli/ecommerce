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
      <div>
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
                        <Image src="/icob.png" alt="Logo" className="w-16 h-16" width={40} height={40} />
                      </div>
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
                <Link
                  className="block relative h-48 rounded overflow-hidden"
                  href={""}
                >
                  <Image
                  loading="lazy"
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/c.png"
                    width={300}
                    height={300}
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
                <Link
                  className="block relative h-48 rounded overflow-hidden"
                  href={""}
                >
                  <Image
                  loading="lazy"
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/d.png"
                    width={300}
                    height={300}
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
                <Link
                  className="block relative h-48 rounded overflow-hidden"
                  href={""}
                >
                  <Image
                  loading="lazy"
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/e.png"
                    width={300}
                    height={300}
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
                <Link
                  className="block relative h-48 rounded overflow-hidden"
                  href={""}
                >
                  <Image
                  loading="lazy"
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/f.png"
                    width={300}
                    height={300}
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
                <Link
                  className="block relative h-48 rounded overflow-hidden"
                  href={""}
                >
                  <Image
                  loading="lazy"
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/g.png"
                    width={300}
                    height={300}
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
                <Link
                  className="block relative h-48 rounded overflow-hidden"
                  href={""}
                >
                  <Image
                  loading="lazy"
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/h.png"
                    width={300}
                    height={300}
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
                <Link
                  className="block relative h-48 rounded overflow-hidden"
                  href={""}
                >
                  <Image
                  loading="lazy"
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/i.png"
                    width={300}
                    height={300}
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
                <Link
                  className="block relative h-48 rounded overflow-hidden"
                  href={""}
                >
                  <Image
                  loading="lazy"
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="j.png"
                    width={300}
                    height={300}
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
                <Link
                  className="block relative h-48 rounded overflow-hidden"
                  href={""}
                >
                  <Image
                  loading="lazy"
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/l.png"
                    width={300}
                    height={300}
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
                <Link
                  className="block relative h-48 rounded overflow-hidden"
                  href={""}
                >
                  <Image
                  loading="lazy"
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/m.png"
                    width={300}
                    height={300}
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
                <Link
                  className="block relative h-48 rounded overflow-hidden"
                  href={""}
                >
                  <Image
                  loading="lazy"
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/n.png"
                    width={300}
                    height={300}
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
                <Link
                  className="block relative h-48 rounded overflow-hidden"
                  href={""}
                >
                  <Image
                  loading="lazy"
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/o.png"
                    width={300}
                    height={300}
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
                <Link
                  className="block relative h-48 rounded overflow-hidden"
                  href={""}
                >
                  <Image
                  loading="lazy"
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/p.png"
                    width={300}
                    height={300}
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
                <Link
                  className="block relative h-48 rounded overflow-hidden"
                  href={""}
                >
                  <Image
                  loading="lazy"
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/q.png"
                    width={300}
                    height={300}
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
                <Link
                  className="block relative h-48 rounded overflow-hidden"
                  href={""}
                >
                  <Image
                  loading="lazy"
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/r.png"
                    width={300}
                    height={300}
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
                <Link
                  className="block relative h-48 rounded overflow-hidden"
                  href={""}
                >
                  <Image
                  loading="lazy"
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/s.png"
                    width={300}
                    height={300}
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
      </div>
    </div>
  );
}
