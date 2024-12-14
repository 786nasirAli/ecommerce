import React from 'react'

export default function page() {
  return (
    <div>
      <div className="flex overflow-hidden flex-col bg-white">
  
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/287d9f2907fc8e14ce88592f6e6d5cbbdba7cc14b50cc56e091c4ed53aaeaf69?placeholderIfAbsent=true&apiKey=9f8497ec23da4379accd30975a8ae232"
    alt="Decorative banner image"
    className="object-contain w-full aspect-[4.57] max-md:max-w-full"
  />
  <div className="px-20 py-16 w-full bg-white max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
        <form className="flex flex-col items-start self-stretch my-auto w-full text-black max-md:mt-10 max-md:max-w-full">
          <h1 className="text-4xl font-semibold">Log In</h1>
          <label htmlFor="username" className="mt-9 text-base font-medium">
            Username or email address
          </label>
          <input
            type="text"
            id="username"
            className="flex shrink-0 self-stretch mt-6 w-full bg-white rounded-xl border border-solid border-neutral-400 h-[75px] px-4"
            required
          />
          <label htmlFor="password" className="mt-9 text-base font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="flex shrink-0 self-stretch mt-6 w-full bg-white rounded-xl border border-solid border-neutral-400 h-[75px] px-4"
            required
          />
          <div className="flex gap-5 mt-11 text-base max-md:mt-10">
            <input
              type="checkbox"
              id="remember"
              className="flex shrink-0 bg-white rounded-md border border-solid border-neutral-400 h-[27px] w-[30px]"
            />
            <label htmlFor="remember" className="basis-auto">
              Remember me
            </label>
          </div>
          <div className="flex gap-8 mt-9">
            <button
              type="submit"
              className="px-16 py-4 text-xl rounded-2xl border border-black border-solid max-md:px-5"
            >
              Log In
            </button>
            <a
              href="/reset-password"
              className="my-auto text-base font-light basis-auto"
              tabIndex={0}
            >
              Lost Your Password?
            </a>
          </div>
        </form>
      </div>
      <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
        <form className="flex flex-col grow items-start px-20 pt-9 pb-14 w-full text-base text-black bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <h1 className="text-4xl font-semibold">Register</h1>
          <label htmlFor="email" className="mt-9 font-medium">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="flex shrink-0 mt-6 max-w-full bg-white rounded-xl border border-solid border-neutral-400 h-[75px] w-[423px] px-4"
            required
          />
          <p className="self-stretch mt-9 font-light max-md:max-w-full">
            A link to set a new password will be sent to your email address.
          </p>
          <p className="self-stretch mt-5 font-light max-md:max-w-full">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our
            <a href="/privacy" className="font-semibold" tabIndex={0}>
              privacy policy.
            </a>
          </p>
          <button
            type="submit"
            className="px-16 py-4 mt-16 text-xl whitespace-nowrap rounded-2xl border border-black border-solid max-md:px-5 max-md:mt-10"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
  <section
    className="px-20 py-24 w-full bg-red-50 max-md:px-5 max-md:max-w-full"
    aria-label="Features"
  >
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow max-md:mt-10">
          <h2 className="self-start text-3xl font-medium text-black">
            Free Delivery
          </h2>
          <p className="text-xl text-neutral-400">
            For all oders over $50, consectetur adipim scing elit.
          </p>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow max-md:mt-10">
          <h2 className="self-start text-3xl font-medium text-black">
            90 Days Return
          </h2>
          <p className="text-xl text-neutral-400">
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow max-md:mt-10">
          <h2 className="self-start text-3xl font-medium text-black">
            Secure Payment
          </h2>
          <p className="text-xl text-neutral-400">
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
    </div>
  </section>
  <footer className="flex flex-col items-start px-20 pt-24 pb-10 w-full bg-white max-md:px-5 max-md:max-w-full">
    <div className="flex flex-wrap gap-10 w-full max-w-[1131px] max-md:max-w-full">
      <address className="grow shrink my-auto text-base text-neutral-400 w-[271px] not-italic">
        400 University Drive Suite 200 Coral Gables,
        <br />
        FL 33134 USA
      </address>
      <nav
        className="flex flex-col items-start text-base font-medium text-black whitespace-nowrap"
        aria-label="Footer Links"
      >
        <h3 className="text-neutral-400">Links</h3>
        <a href="/" className="mt-14 max-md:mt-10" tabIndex={0}>
          Home
        </a>
        <a href="/shop" className="mt-12 max-md:mt-10" tabIndex={0}>
          Shop
        </a>
        <a href="/about" className="mt-12 max-md:mt-10" tabIndex={0}>
          About
        </a>
        <a
          href="/contact"
          className="self-stretch mt-11 max-md:mt-10"
          tabIndex={0}
        >
          Contact
        </a>
      </nav>
      <div className="flex-auto self-start max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <nav
            className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
            aria-label="Help Links"
          >
            <div className="flex flex-col grow items-start text-base font-medium text-black max-md:mt-10">
              <h3 className="text-neutral-400">Help</h3>
              <a
                href="/payment"
                className="self-stretch mt-14 max-md:mt-10"
                tabIndex={0}
              >
                Payment Options
              </a>
              <a href="/returns" className="mt-12 max-md:mt-10" tabIndex={0}>
                Returns
              </a>
              <a href="/privacy" className="mt-11 max-md:mt-10" tabIndex={0}>
                Privacy Policies
              </a>
            </div>
          </nav>
          <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
            <form className="flex flex-col w-full max-md:mt-10">
              <h3 className="self-start text-base font-medium text-neutral-400">
                Newsletter
              </h3>
              <div className="flex gap-3 mt-14 text-sm max-md:mt-10">
                <div className="flex flex-col text-neutral-400">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Enter Your Email Address
                  </label>
                  <input
                    type="email"
                    id="newsletter-email"
                    placeholder="Enter Your Email Address"
                    className="border-b border-black"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="font-medium text-black whitespace-nowrap border-b border-black"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="shrink-0 self-center mt-12 max-w-full h-px border border-solid border-zinc-300 w-[1240px] max-md:mt-10" />
    <p className="mt-9 text-base text-black">
      2022 Meubel House. All rights reverved
    </p>
  </footer>
</div>

    </div>
  )
}
