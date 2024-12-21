import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <section
          className="px-4 md:px-20 py-12 bg-amber-100"
          aria-label="Hero section"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-[40%] text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Rocket single seater
              </h1>
              <button className="text-xl md:text-2xl hover:underline focus:ring-2 focus:ring-black focus:outline-none px-4 py-2">
                <Link href="/Shop">Shop Now</Link>
              </button>
              <div className="h-0.5 w-[121px] border-2 border-black mx-auto md:mx-0 mt-4" />
            </div>
            <div className="w-full md:w-[60%]">
              <Image
                loading="lazy"
                src="/a.png"
                alt="Rocket single seater showcase"
                className="w-full object-cover shadow-lg rounded-lg"
                width={850}
                height={1000}
              />
            </div>
          </div>
        </section>
        <section
          className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-20 bg-red-50"
          aria-label="Featured products"
        >
          <div className="relative h-[400px] md:h-[562px] overflow-hidden rounded-lg">
            <Image
              loading="lazy"
              src="/b.png"
              alt="Side table showcase"
              className="absolute inset-0 w-full h-full object-cover"
              width={600}
              height={550}
            />
            <h2 className="absolute bottom-8 left-8 text-3xl md:text-4xl font-medium text-black">
              Side table
            </h2>
          </div>
          <div className="relative h-[400px] md:h-[562px] overflow-hidden rounded-lg">
            <Image
              loading="lazy"
              src="/c.png"
              alt="Side table collection"
              className="absolute inset-0 w-full h-full object-cover"
              width={600}
              height={550}
            />
            <div className="absolute bottom-8 left-8">
              <h2 className="text-3xl md:text-4xl font-medium text-black mb-4">
                Side table
              </h2>
              <button className="text-xl hover:underline focus:ring-2 focus:ring-black focus:outline-none px-4 py-2">
                View More
              </button>
              <div className="h-0.5 w-[121px] border-2 border-black mt-4" />
            </div>
          </div>
        </section>
        <section
          className="px-4 md:px-20 py-12 md:py-20"
          aria-label="Top picks"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-4">
            Top Picks For You
          </h2>
          <p className="text-neutral-400 text-center mb-12">
            Find a bright ideal to suit your taste with our great selection
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <article className="product-card">
              <Image
                loading="lazy"
                src="/d.png"
                alt="Trenton modular sofa"
                className="w-full aspect-square object-cover rounded-lg mb-4"
                width={300}
                height={300}
              />
              <h3 className="text-lg mb-2">Trenton modular sofa_3</h3>
              <p className="text-xl font-medium">Rs. 25,000.00</p>
            </article>
            <article className="product-card">
              <Image
                loading="lazy"
                src="/e.png"
                alt="Granite dining set"
                className="w-full aspect-square object-cover rounded-lg mb-4"
                width={300}
                height={300}
              />
              <h3 className="text-lg mb-2">Granite dining table with chairs</h3>
              <p className="text-xl font-medium">Rs. 25,000.00</p>
            </article>
            <article className="product-card">
              <Image
                loading="lazy"
                src="/f.png"
                alt="Outdoor bar set"
                className="w-full aspect-square object-cover rounded-lg mb-4"
                width={300}
                height={300}
              />
              <h3 className="text-lg mb-2">Outdoor bar table and stool</h3>
              <p className="text-xl font-medium">Rs. 25,000.00</p>
            </article>
            <article className="product-card">
              <Image
                loading="lazy"
                src="/g.png"
                alt="Console with mirror"
                className="w-full aspect-square object-cover rounded-lg mb-4"
                width={300}
                height={300}
              />
              <h3 className="text-lg mb-2">Plain console with teak mirror</h3>
              <p className="text-xl font-medium">Rs. 25,000.00</p>
            </article>
          </div>
          <div className="text-center mt-12">
            <button className="text-xl font-medium hover:underline focus:ring-2 focus:ring-black focus:outline-none px-4 py-2">
              View More
            </button>
            <div className="h-0.5 w-[115px] border-2 border-black mx-auto mt-4" />
          </div>
        </section>
        <section
          className="bg-yellow-50 px-4 md:px-20 py-12"
          aria-label="New arrival"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-[70%]">
              <Image
                loading="lazy"
                src="/h.png"
                alt="Asgaard sofa"
                className="w-full rounded-lg"
                width={900}
                height={800}
              />
            </div>
            <div className="w-full md:w-[30%] text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-medium mb-4">
                New Arrivals
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8">
                Asgaard sofa
              </h3>
              <button className="px-8 py-4 border-2 border-black hover:bg-yellow-100 focus:ring-2 focus:ring-black focus:outline-none transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </section>
        <section className="px-4 md:px-20 py-12" aria-label="Blog posts">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-4">
            Our Blogs
          </h2>
          <p className="text-neutral-400 text-center mb-12">
            Find a bright ideal to suit your taste with our great selection
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="blog-card">
              <Image
                loading="lazy"
                src="/i.png"
                alt="Blog post about millennial design"
                className="w-full aspect-square object-cover rounded-xl mb-6"
                width={400}
                height={400}
              />
              <h3 className="text-xl mb-4">
                Going all-in with millennial design
              </h3>
              <button className="text-xl font-medium hover:underline focus:ring-2 focus:ring-black focus:outline-none">
                Read More
              </button>
              <div className="flex items-center gap-4 mt-4 text-sm">
                <span>5 min read</span>
                <time dateTime="2022-10-12">12th Oct 2022</time>
              </div>
            </article>
            <article className="blog-card">
              <Image
                loading="lazy"
                src="/j.png"
                alt="Blog post about design trends"
                className="w-full aspect-square object-cover rounded-xl mb-6"
                width={400}
                height={400}
              />
              <h3 className="text-xl mb-4">
                Latest design trends and inspirations
              </h3>
              <button className="text-xl font-medium hover:underline focus:ring-2 focus:ring-black focus:outline-none">
                Read More
              </button>
              <div className="flex items-center gap-4 mt-4 text-sm">
                <span>5 min read</span>
                <time dateTime="2022-10-12">12th Oct 2022</time>
              </div>
            </article>
            <article className="blog-card">
              <Image
                loading="lazy"
                src="/k.png"
                alt="Blog post about interior design"
                className="w-full aspect-square object-cover rounded-xl mb-6"
                width={400}
                height={400}
              />
              <h3 className="text-xl mb-4">Interior design tips and tricks</h3>
              <button className="text-xl font-medium hover:underline focus:ring-2 focus:ring-black focus:outline-none">
                Read More
              </button>
              <div className="flex items-center gap-4 mt-4 text-sm">
                <span>5 min read</span>
                <time dateTime="2022-10-12">12th Oct 2022</time>
              </div>
            </article>
          </div>
          <div className="text-center mt-12">
            <button className="text-xl font-medium hover:underline focus:ring-2 focus:ring-black focus:outline-none px-4 py-2">
              View All Posts
            </button>
            <div className="h-0.5 w-[115px] border-2 border-black mx-auto mt-4" />
          </div>
        </section>
        <section
          className="relative h-[450px] flex items-center justify-center px-4 md:px-20"
          aria-label="Instagram section"
        >
          <Image
            loading="lazy"
            src="/z.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            width={1440}
            height={450}
          />
          <div className="relative text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Our Instagram
            </h2>
            <p className="text-xl mb-8">Follow our store on Instagram</p>
            <Link
              href="#"
              className="inline-block px-12 py-4 bg-red-50 rounded-full hover:bg-red-100 focus:ring-2 focus:ring-black focus:outline-none transition-colors"
            >
              Follow Us
            </Link>
          </div>
        </section>
      </main>
      <footer className="px-4 md:px-20 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <address className="text-neutral-400 not-italic">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </address>
          <nav aria-label="Footer links">
            <h3 className="text-neutral-400 mb-8">Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="hover:underline focus:ring-2 focus:ring-black focus:outline-none"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:underline focus:ring-2 focus:ring-black focus:outline-none"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:underline focus:ring-2 focus:ring-black focus:outline-none"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:underline focus:ring-2 focus:ring-black focus:outline-none"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Help links">
            <h3 className="text-neutral-400 mb-8">Help</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="hover:underline focus:ring-2 focus:ring-black focus:outline-none"
                >
                  Payment Options
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline focus:ring-2 focus:ring-black focus:outline-none"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline focus:ring-2 focus:ring-black focus:outline-none"
                >
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <h3 className="text-neutral-400 mb-8">Newsletter</h3>
            <form className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email Address"
                  className="w-full border-b border-black p-2 focus:outline-none focus:border-black"
                  required
                />
              </div>
              <button
                type="submit"
                className="font-medium hover:underline focus:ring-2 focus:ring-black focus:outline-none"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-zinc-300 pt-8">
          <p className="text-center">
            © 2022 Meubel House. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}
