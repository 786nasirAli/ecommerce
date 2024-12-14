import React from 'react'

export default function page() {
  return (
    <div>
      <div className="flex overflow-hidden flex-col bg-white min-h-screen">
 
  <div className="relative flex flex-col justify-center items-center px-4 md:px-20 py-12 md:py-20 w-full min-h-[250px] md:min-h-[328px]">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b9471c138bb0140fa09bc8edbd058043b6e05bfdbf02ed2b647c22f3e0ea70c?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
      alt="Hero background"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-10 flex flex-col items-center">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a25832707a00a1cfc0900c87060899e75d14639a394bddb695d7b30e8c11da86?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
        alt="Blog icon"
        className="w-[115px] aspect-[0.8] object-contain mb-4"
      />
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-base"
      >
        <a href="#" className="font-medium hover:underline">
          Home
        </a>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/db13939cabd153a09de09c25864d1f622bda5d116dbe6552d6605aca283c27a4?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
          alt=""
          className="w-5 aspect-square"
        />
        <span className="font-light">Blog</span>
      </nav>
    </div>
  </div>
  <main className="flex flex-col px-4 md:px-20 pt-16 md:pt-28 w-full bg-white">
    <div className="max-w-[1202px] mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <article className="md:col-span-8">
          <div className="flex flex-col gap-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4afabaa3dd6fda83227fb086cb291079c2a734262400f70b0fb72d5dfbbc124a?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
              alt="Featured post"
              className="w-full rounded-xl aspect-[1.63] object-cover"
            />
            <div className="flex flex-wrap gap-4 md:gap-9 text-base text-neutral-400">
              <div className="flex items-center gap-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/550af8fe8d3569c905bc89f8da97869dc119a36d1c9871800dfcae0b077f8161?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
                  alt=""
                  className="w-5 aspect-square"
                />
                <span>Admin</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/604e35a3f9cceed299ce23b9efa6bcc148621f7926d5573a2002cbc47c39a836?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
                  alt=""
                  className="w-5 aspect-square"
                />
                <time dateTime="2022-10-14">14 Oct 2022</time>
              </div>
              <div className="flex items-center gap-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c73485e3d4cf3769373a247701e810410718cea2390fae219421065734938dcb?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
                  alt=""
                  className="w-6 aspect-square"
                />
                <span>Wood</span>
              </div>
            </div>
          </div>
        </article>
        <aside className="md:col-span-4">
          <div className="flex flex-col gap-8">
            <form className="relative" role="search">
              <input
                type="search"
                placeholder="Search"
                aria-label="Search blog posts"
                className="w-full px-6 py-4 bg-white rounded-xl border border-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                aria-label="Search"
                className="absolute right-6 top-1/2 -translate-y-1/2"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/56fd1f640dda4ae9d14a4fe62dd99ad59f54c2ae151d9b74d5632d15b45ec621?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
                  alt=""
                  className="w-6 aspect-square"
                />
              </button>
            </form>
            <nav aria-label="Categories" className="flex flex-col gap-6">
              <h2 className="text-2xl font-medium text-black">Categories</h2>
              <ul className="flex flex-col gap-6">
                <li className="flex justify-between text-neutral-400">
                  <a href="#" className="hover:underline">
                    Crafts
                  </a>
                  <span>2</span>
                </li>
                <li className="flex justify-between text-neutral-400">
                  <a href="#" className="hover:underline">
                    Design
                  </a>
                  <span>8</span>
                </li>
                <li className="flex justify-between text-neutral-400">
                  <a href="#" className="hover:underline">
                    Handmade
                  </a>
                  <span>7</span>
                </li>
                <li className="flex justify-between text-neutral-400">
                  <a href="#" className="hover:underline">
                    Interior
                  </a>
                  <span>1</span>
                </li>
                <li className="flex justify-between text-neutral-400">
                  <a href="#" className="hover:underline">
                    Wood
                  </a>
                  <span>6</span>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </div>
    <section className="mt-16 max-w-[1240px] mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <article className="flex flex-col gap-4">
            <h1 className="text-2xl md:text-3xl font-medium text-black">
              Going all-in with millennial design
            </h1>
            <p className="text-base leading-6 text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-base text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Read more
              <div className="w-[77px] h-px bg-black" />
            </a>
          </article>
        </div>
        <aside className="md:col-span-4">
          <section className="bg-white p-6 md:p-8">
            <h2 className="text-2xl font-medium text-black mb-6">
              Recent Posts
            </h2>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/668611e17e140f17dac0dffb5d00b221c0c8ced4e84fb89fcc8a2b4e994b1c12?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
                  alt=""
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div className="flex flex-col justify-center">
                  <a href="#" className="text-sm text-black hover:underline">
                    Going all-in with millennial design
                  </a>
                  <time
                    dateTime="2022-08-03"
                    className="text-xs text-neutral-400 mt-1.5"
                  >
                    03 Aug 2022
                  </time>
                </div>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </section>
    <nav aria-label="Pagination" className="flex justify-center mt-16 mb-20">
      <ul className="flex gap-4">
        <li>
          <button
            aria-current="page"
            className="w-[60px] h-[60px] flex items-center justify-center bg-amber-100 rounded-xl text-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            1
          </button>
        </li>
        <li>
          <button className="w-[60px] h-[60px] flex items-center justify-center bg-yellow-50 rounded-xl text-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            2
          </button>
        </li>
        <li>
          <button className="w-[60px] h-[60px] flex items-center justify-center bg-yellow-50 rounded-xl text-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            3
          </button>
        </li>
        <li>
          <button className="px-7 h-[60px] flex items-center justify-center bg-yellow-50 rounded-xl text-xl font-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Next
          </button>
        </li>
      </ul>
    </nav>
  </main>
  <footer className="mt-auto">
    <section className="bg-red-50 px-4 md:px-20 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl md:text-3xl font-medium text-black mb-2">
            Free Delivery
          </h3>
          <p className="text-lg md:text-xl text-neutral-400">
            For all oders over $50, consectetur adipim scing elit.
          </p>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-medium text-black mb-2">
            90 Days Return
          </h3>
          <p className="text-lg md:text-xl text-neutral-400">
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-medium text-black mb-2">
            Secure Payment
          </h3>
          <p className="text-lg md:text-xl text-neutral-400">
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
    </section>
    <div className="bg-white px-4 md:px-20 py-16 md:py-24">
      <div className="max-w-[1131px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <address className="md:col-span-4 text-base text-neutral-400 not-italic">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </address>
          <nav className="md:col-span-2" aria-label="Footer Links">
            <h4 className="text-base font-medium text-neutral-400 mb-6">
              Links
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="text-base text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <nav className="md:col-span-2" aria-label="Help Links">
            <h4 className="text-base font-medium text-neutral-400 mb-6">
              Help
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="text-base text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Payment Options
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Privacy Policies
                </a>
              </li>
            </ul>
          </nav>
          <div className="md:col-span-4">
            <h4 className="text-base font-medium text-neutral-400 mb-6">
              Newsletter
            </h4>
            <form className="flex flex-col gap-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Enter Your Email Address"
                  className="w-full border-b border-black pb-2 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="self-start font-medium text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        <div className="h-px bg-zinc-300 my-12" />
        <p className="text-base text-black text-center">
          © 2022 Meubel House. All rights reserved
        </p>
      </div>
    </div>
  </footer>
</div>

    </div>
  )
}
