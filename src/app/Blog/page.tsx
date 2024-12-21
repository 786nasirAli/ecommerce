import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
export default function page() {
  return (
    <div>
      <div className="flex overflow-hidden flex-col bg-white min-h-screen w-full h-full">
 
  <div className="relative flex flex-col justify-center items-center px-4 md:px-20 py-12 md:py-20 w-full min-h-[250px] md:min-h-[328px]">
    <Image
      loading="lazy"
      src="/1bg.png"
      alt="Hero background"
      className="absolute inset-0 w-full h-full object-cover"
      width={1440}
      height={316}
    />
    <div className="relative z-10 flex flex-col items-center">
      <Image
        loading="lazy"
        src="/icon.png"
        alt="Blog icon"
        className="w-[115px] aspect-[0.8] object-contain mb-4"
        width={60}
        height={60}
      />
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-base"
      >
        <Link href="#" className="font-medium hover:underline">
          Home
        </Link>

        
        <span className="font-light">Blog</span>
      </nav>
    </div>
  </div>
  <main className="flex flex-col px-4 md:px-20 pt-16 md:pt-28 w-full bg-white">
    <div className="max-w-[1202px] mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <article className="md:col-span-8">
          <div className="flex flex-col gap-4">
            <Image
              loading="lazy"
              src="/feature.png"
              alt="Featured post"
              className="w-full rounded-xl aspect-[1.63] object-cover"
              width={600}
              height={400}
            />
            <div className="flex flex-wrap gap-4 md:gap-9 text-base text-neutral-400">
              <div className="flex items-center gap-2">
                <Image
                  loading="lazy"
                  src="/men.svg"
                  alt=""
                  className="w-5 aspect-square"
                  width={20}
                  height={20}
                />
                <span>Admin</span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  loading="lazy"
                  src="/box.svg"
                  alt=""
                  className="w-5 aspect-square"
                  width={20}
                  height={20}
                />
                <time dateTime="2022-10-14">14 Oct 2022</time>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  loading="lazy"
                  src="/pin.svg"
                  alt=""
                  className="w-6 aspect-square"
                  width={0}
                  height={20}
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
                <Image
                  loading="lazy"
                  src="/search.png"
                  alt=""
                  className="w-6 aspect-square"
                  width={20}
                  height={20}
                />
              </button>
            </form>
            <nav aria-label="Categories" className="flex flex-col gap-6">
              <h2 className="text-2xl font-medium text-black">Categories</h2>
              <ul className="flex flex-col gap-6">
                <li className="flex justify-between text-neutral-400">
                  <Link href="#" className="hover:underline">
                    Crafts
                  </Link>
                  <span>2</span>
                </li>
                <li className="flex justify-between text-neutral-400">
                  <Link href="#" className="hover:underline">
                    Design
                  </Link>
                  <span>8</span>
                </li>
                <li className="flex justify-between text-neutral-400">
                  <Link href="#" className="hover:underline">
                    Handmade
                  </Link>
                  <span>7</span>
                </li>
                <li className="flex justify-between text-neutral-400">
                  <Link href="#" className="hover:underline">
                    Interior
                  </Link>
                  <span>1</span>
                </li>
                <li className="flex justify-between text-neutral-400">
                  <Link href="#" className="hover:underline">
                    Wood
                  </Link>
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
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-base text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Read more
              <div className="w-[77px] h-px bg-black" />
            </Link>
          </article>
        </div>
        <aside className="md:col-span-4">
          <section className="bg-white p-6 md:p-8">
            <h2 className="text-2xl font-medium text-black mb-6">
              Recent Posts
            </h2>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <Image
                  loading="lazy"
                  src="/page.png"
                  alt=""
                  className="w-20 h-20 rounded-xl object-cover"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col justify-center">
                  <Link href="#" className="text-sm text-black hover:underline">
                    Going all-in with millennial design
                  </Link>
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
                <Link
                  href="#"
                  className="text-base text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="md:col-span-2" aria-label="Help Links">
            <h4 className="text-base font-medium text-neutral-400 mb-6">
              Help
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="#"
                  className="text-base text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Payment Options
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Privacy Policies
                </Link>
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
