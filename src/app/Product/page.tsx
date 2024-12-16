"use client"
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
  <nav
    className="flex gap-3.5 items-center px-20 py-8 mt-3.5 text-base bg-white text-neutral-400 max-md:px-5"
    aria-label="Breadcrumb"
  >
    <Link
      href="#"
      className="self-stretch my-auto hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      Home
    </Link>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/db13939cabd153a09de09c25864d1f622bda5d116dbe6552d6605aca283c27a4?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
      alt=""
      className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
    />
    <Link
      href="#"
      className="self-stretch my-auto hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      Shop
    </Link>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/db13939cabd153a09de09c25864d1f622bda5d116dbe6552d6605aca283c27a4?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
      alt=""
      className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
    />
    <div
      className="shrink-0 self-start w-0.5 border-2 border-solid border-neutral-400 h-[37px]"
      role="separator"
    />
    <div className="grow shrink self-stretch my-auto text-black w-[1014px] max-md:max-w-full">
      Asgaard sofa
    </div>
  </nav>
  <main className="flex z-10 flex-col pt-9 w-full bg-white max-md:max-w-full">
    <div className="self-center w-full max-w-[1241px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/219fef56aee837c5804022740f4acce9430e35e81f9e83bbbb7ec919233c0777?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
            alt="Asgaard sofa main product image"
            className="object-contain w-full rounded-none aspect-[1.11] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
            <h1 className="text-5xl text-black">Asgaard sofa</h1>
            <div className="text-2xl font-medium text-neutral-400">
              Rs. 250,000.00
            </div>
            <div className="flex gap-5 items-center mt-2.5 text-sm text-neutral-400">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b716153d96851be343bafc84fd9ddc859debe5a756855bb838c029e08b61309?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
                alt="5 star rating"
                className="object-contain shrink-0 self-stretch my-auto max-w-full aspect-[6.21] w-[124px]"
              />
              <div
                className="shrink-0 self-stretch w-px border border-solid border-neutral-400 h-[30px]"
                role="separator"
              />
              <div className="self-stretch my-auto basis-auto">
                5 Customer Review
              </div>
            </div>
            <p className="mt-3.5 text-sm text-black">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <div role="group" aria-labelledby="size-label">
              <div id="size-label" className="mt-8 text-sm text-neutral-400">
                Size
              </div>
              <div className="flex gap-4 mt-3 text-sm text-black whitespace-nowrap">
                <button
                  className="px-3 bg-amber-100 rounded-md h-[30px] w-[30px] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  aria-label="Select size L"
                >
                  L
                </button>
                <button
                  className="px-2 bg-red-50 rounded-md h-[30px] w-[30px] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  aria-label="Select size XL"
                >
                  XL
                </button>
                <button
                  className="px-2 bg-red-50 rounded-md h-[30px] w-[30px] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  aria-label="Select size XS"
                >
                  XS
                </button>
              </div>
            </div>
            <div role="group" aria-labelledby="color-label">
              <div id="color-label" className="mt-5 text-sm text-neutral-400">
                Color
              </div>
              <div className="flex gap-4 mt-3">
                <button
                  className="flex shrink-0 bg-violet-500 h-[30px] rounded-[50px] w-[30px] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  aria-label="Select purple color"
                />
                <button
                  className="flex shrink-0 bg-black h-[30px] rounded-[50px] w-[30px] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  aria-label="Select black color"
                />
                <button
                  className="flex shrink-0 bg-orange-300 h-[30px] rounded-[50px] w-[30px] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  aria-label="Select orange color"
                />
              </div>
            </div>
            <div className="flex gap-5 mt-8 text-black">
              <div
                className="flex gap-9 px-4 py-5 text-base whitespace-nowrap bg-white rounded-xl border border-solid border-neutral-400"
                role="group"
                aria-label="Quantity selector"
              >
                <button
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <div className="font-medium" aria-live="polite">
                  1
                </div>
                <button
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button className="px-12 py-4 text-xl rounded-2xl border border-black border-solid max-md:px-5 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Add To Cart
              </button>
            </div>
            <hr className="shrink-0 self-stretch mt-14 w-full h-px border border-solid border-zinc-300 max-md:mt-10" />
            <dl className="mt-10 text-base text-neutral-400">
              <div className="flex gap-5 justify-between max-w-full whitespace-nowrap w-[151px]">
                <dt>SKU</dt>
                <dd className="flex gap-3">: SS001</dd>
              </div>
              <div className="flex gap-3 mt-3 whitespace-nowrap">
                <dt className="grow">Category</dt>
                <dd>: Sofas</dd>
              </div>
              <div className="flex gap-5 justify-between mt-3 max-w-full w-[297px]">
                <dt>Tags</dt>
                <dd>: Sofa, Chair, Home, Shop</dd>
              </div>
            </dl>
            <div className="flex gap-5 justify-between mt-2.5 max-w-full w-[404px]">
              <div className="flex gap-6 items-start self-start">
                <span className="self-stretch text-base text-neutral-400">
                  Share
                </span>
                <span className="flex gap-3 text-base font-medium whitespace-nowrap text-neutral-400">
                  :
                </span>
                <div className="flex gap-6">
                  <Link href="#" aria-label="Share on Facebook">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/629ecd29b6e1311788a917840a9db258106da010af82b53429c41a97f3d3eefe?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
                      alt=""
                      className="object-contain shrink-0 self-start mt-1 w-5 aspect-square"
                    />
                  </Link>
                  <Link href="#" aria-label="Share on LinkedIn">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd126b32a2490780bdbd7b6c47a37596813a2a663890cc8d3c1c852a5ce81336?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
                      alt=""
                      className="object-contain shrink-0 my-auto w-5 aspect-square"
                    />
                  </Link>
                  <Link href="#" aria-label="Share on Twitter">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac547bd4addefd8e4b2d50f2cd114a8157c1961189437cc9486cc350f82eadb2?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
                      alt=""
                      className="object-contain shrink-0 aspect-square w-[25px]"
                    />
                  </Link>
                </div>
              </div>
              <Link href="#" aria-label="Share on Instagram">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/74103b59eddb809277f2f1c90b0f6fe6242321fb50015d603656eb0cb18ded6d?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
                  alt=""
                  className="object-contain shrink-0 aspect-[0.81] w-[25px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr className="mt-14 w-full border border-solid border-zinc-300 min-h-[1px] max-md:mt-10 max-md:max-w-full" />
  </main>
  <section className="flex flex-col items-center pt-12 w-full bg-white max-md:max-w-full">
    <nav
      className="flex flex-wrap gap-10 max-w-full text-2xl text-neutral-400 w-[649px]"
      role="tablist"
    >
      <button
        role="tab"
        aria-selected="true"
        className="text-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Description
      </button>
      <button
        role="tab"
        aria-selected="false"
        className="grow shrink w-[242px] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Additional Information
      </button>
      <button
        role="tab"
        aria-selected="false"
        className="grow shrink w-[111px] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Reviews [5]
      </button>
    </nav>
    <div
      role="tabpanel"
      className="mt-9 text-base text-neutral-400 max-md:max-w-full"
    >
      <p>
        Embodying the raw, wayward spirit of rock &apos;n&apos; roll, the Kilburn portable
        active stereo speaker takes the unmistakable look and sound of Marshall,
        unplugs the chords, and takes the show on the road.
      </p>
      <p className="mt-9">
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of
        vintage styled engineering. Setting the bar as one of the loudest
        speakers in its class, the Kilburn is a compact, stout-hearted hero with
        a well-balanced audio which boasts a clear midrange and extended highs
        for a sound that is both articulate and pronounced. The analogue knobs
        allow you to fine tune the controls to your personal preferences while
        the guitar-influenced leather strap enables easy and stylish travel.
      </p>
    </div>
    <div className="mt-11 w-full max-w-[1239px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/69cbd14de16cbcd9c46f124f640bc4f76db0b620544f981ecfd2a7b24c99a151?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
          alt="Product detail image 1"
          className="object-contain w-[50%] rounded-none aspect-[1.74] max-md:mt-7 max-md:w-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6bde0de39d7b7cfe4a083430a912eecded21f029872d011e19531d8d88c8871?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
          alt="Product detail image 2"
          className="object-contain w-[50%] rounded-none aspect-[1.74] max-md:mt-7 max-md:w-full"
        />
      </div>
    </div>
    <hr className="self-stretch mt-16 w-full border border-solid border-zinc-300 min-h-[1px] max-md:mt-10 max-md:max-w-full" />
  </section>
  <section className="flex flex-col items-center px-20 pt-14 pb-24 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
    <h2 className="text-4xl font-medium text-black">Related Products</h2>
    <div className="mt-7 w-full max-w-[1240px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <article className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start text-black max-md:mt-8">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a077f92fd46575a030faeed1a15e49321589598aaa57f7b9d014c3e0e8de828?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
              alt="Trenton modular sofa_3"
              className="object-contain self-stretch w-full rounded-none aspect-square"
            />
            <h3 className="mt-3.5 text-base">Trenton modular sofa_3</h3>
            <p className="mt-3 text-2xl font-medium">Rs. 25,000.00</p>
          </div>
        </article>
        <article className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start text-black max-md:mt-8">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/43f827a16b96cc493c71f16a8bed4d9b4e559c569296a38f33bb59d52de4f4f0?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
              alt="Granite dining table with dining chair"
              className="object-contain self-stretch w-full rounded-none aspect-square"
            />
            <h3 className="mt-3.5 text-base">
              Granite dining table with dining chair
            </h3>
            <p className="mt-3 text-2xl font-medium">Rs. 25,000.00</p>
          </div>
        </article>
        <article className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start text-black max-md:mt-8">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0daa4f02e085c7e050b601337521698dafe24a3690868f748f74a979daac7c1d?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
              alt="Outdoor bar table and stool"
              className="object-contain self-stretch w-full rounded-none aspect-square"
            />
            <h3 className="mt-3.5 text-base">Outdoor bar table and stool</h3>
            <p className="mt-3 text-2xl font-medium">Rs. 25,000.00</p>
          </div>
        </article>
        <article className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start text-black max-md:mt-8">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/98ba6cbfeda5cc022b59ca90b6963265f350d88d9b5c0875da2c405d6d7e843c?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
              alt="Plain console with teak mirror"
              className="object-contain self-stretch w-full rounded-none aspect-square"
            />
            <h3 className="mt-3.5 text-base">Plain console with teak mirror</h3>
            <p className="mt-3 text-2xl font-medium">Rs. 25,000.00</p>
          </div>
        </article>
      </div>
    </div>
    <button className="mt-24 text-xl font-medium text-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 max-md:mt-10">
      View More
    </button>
    <div className="shrink-0 mt-4 mb-0 h-0.5 border-2 border-black border-solid w-[115px] max-md:mb-2.5" />
  </section>
  <footer className="flex flex-col items-start px-20 pt-24 pb-10 w-full bg-white max-md:px-5 max-md:max-w-full">
    <div className="flex flex-wrap gap-10 w-full max-w-[1131px] max-md:max-w-full">
      <address className="grow shrink my-auto text-base text-neutral-400 w-[271px] not-italic">
        400 University Drive Suite 200 Coral Gables,
        <br />
        FL 33134 USA
      </address>
      <nav className="flex flex-col items-start text-base font-medium text-black whitespace-nowrap">
        <h2 className="text-neutral-400">Links</h2>
        <Link
          href="#"
          className="mt-14 hover:underline focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 max-md:mt-10"
        >
          Home
        </Link>
        <Link
          href="#"
          className="mt-12 hover:underline focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 max-md:mt-10"
        >
          Shop
        </Link>
        <Link
          href="#"
          className="mt-12 hover:underline focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 max-md:mt-10"
        >
          About
        </Link>
        <Link
          href="#"
          className="self-stretch mt-11 hover:underline focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 max-md:mt-10"
        >
          Contact
        </Link>
      </nav>
      <div className="flex-auto self-start max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <nav className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start text-base font-medium text-black max-md:mt-10">
              <h2 className="text-neutral-400">Help</h2>
              <Link
                href="#"
                className="self-stretch mt-14 hover:underline focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 max-md:mt-10"
              >
                Payment Options
              </Link>
              <Link
                href="#"
                className="mt-12 hover:underline focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 max-md:mt-10"
              >
                Returns
              </Link>
              <Link
                href="#"
                className="mt-11 hover:underline focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 max-md:mt-10"
              >
                Privacy Policies
              </Link>
            </div>
          </nav>
          <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10">
              <h2 className="self-start text-base font-medium text-neutral-400">
                Newsletter
              </h2>
              <form className="flex gap-3 mt-14 text-sm max-md:mt-10">
                <div className="flex flex-col text-neutral-400">
                  <label htmlFor="email" className="sr-only">
                    Enter Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Your Email Address"
                    className="border-b border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="font-medium text-black hover:underline focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr className="shrink-0 self-center mt-12 max-w-full h-px border border-solid border-zinc-300 w-[1240px] max-md:mt-10" />
    <p className="mt-9 text-base text-black">
      © 2022 Meubel House. All rights reverved
    </p>
  </footer>
</div>

    
  )
}
