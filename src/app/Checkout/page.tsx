import React from 'react'

export default function page() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
 

  <main className="flex flex-col items-start px-20 pt-16 pb-32 mt-80 w-full bg-white max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
    <form
      className="self-end w-full max-w-[1168px] max-md:max-w-full"
      aria-labelledby="billing-details-heading"
    >
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[43%] max-md:w-full">
          <div className="flex flex-col mt-9 w-full max-md:mt-10">
            <h1
              id="billing-details-heading"
              className="self-start text-4xl font-semibold text-black"
            >
              Billing details
            </h1>
            <div className="mt-9 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:w-full">
                  <label
                    htmlFor="firstName"
                    className="self-start text-base font-medium text-black"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="mt-6 h-[75px] w-[211px] bg-white rounded-xl border border-solid border-neutral-400 px-4"
                  />
                </div>
                <div className="flex flex-col w-6/12 max-md:w-full">
                  <label
                    htmlFor="lastName"
                    className="self-start text-base font-medium text-black"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="mt-6 h-[75px] w-[211px] bg-white rounded-xl border border-solid border-neutral-400 px-4"
                  />
                </div>
              </div>
            </div>
            <label
              htmlFor="companyName"
              className="self-start mt-9 text-base font-medium text-black"
            >
              Company Name (Optional)
            </label>
            <input
              type="text"
              id="companyName"
              className="mt-6 h-[75px] w-[453px] bg-white rounded-xl border border-solid border-neutral-400 px-4"
            />
            <label
              htmlFor="country"
              className="self-start mt-9 text-base font-medium text-black"
            >
              Country / Region
            </label>
            <select
              id="country"
              required
              className="flex gap-5 justify-between px-7 py-7 mt-6 text-base bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 w-full"
            >
              <option value="LK">Sri Lanka</option>
            </select>
            <label
              htmlFor="street"
              className="self-start mt-9 text-base font-medium text-black"
            >
              Street address
            </label>
            <input
              type="text"
              id="street"
              required
              className="mt-6 h-[75px] w-[453px] bg-white rounded-xl border border-solid border-neutral-400 px-4"
            />
            <label
              htmlFor="city"
              className="self-start mt-9 text-base font-medium text-black"
            >
              Town / City
            </label>
            <input
              type="text"
              id="city"
              required
              className="mt-6 h-[75px] w-[453px] bg-white rounded-xl border border-solid border-neutral-400 px-4"
            />
            <label
              htmlFor="province"
              className="self-start mt-9 text-base font-medium text-black"
            >
              Province
            </label>
            <select
              id="province"
              required
              className="flex gap-5 justify-between px-7 py-7 mt-6 text-base bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 w-full"
            >
              <option value="WP">Western Province</option>
            </select>
            <label
              htmlFor="zip"
              className="mt-9 text-base font-medium text-black"
            >
              ZIP code
            </label>
            <input
              type="text"
              id="zip"
              required
              className="mt-6 h-[75px] w-[453px] bg-white rounded-xl border border-solid border-neutral-400 px-4"
            />
            <label
              htmlFor="phone"
              className="mt-9 text-base font-medium text-black"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="mt-6 h-[75px] w-[453px] bg-white rounded-xl border border-solid border-neutral-400 px-4"
            />
            <label
              htmlFor="email"
              className="mt-9 text-base font-medium text-black"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-6 h-[75px] w-[453px] bg-white rounded-xl border border-solid border-neutral-400 px-4"
            />
            <label htmlFor="additional" className="sr-only">
              Additional Information
            </label>
            <textarea
              id="additional"
              className="px-7 py-7 mt-16 mb-0 w-[453px] text-base bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400"
              placeholder="Additional information"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="flex flex-col w-[57%] max-md:w-full">
          <div className="flex flex-col px-10 py-20 mx-auto w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[45%] max-md:w-full">
                <div className="flex flex-col items-start w-full text-base font-medium text-black max-md:mt-10">
                  <h2 className="text-2xl">Product</h2>
                  <div className="flex gap-2.5 items-center self-stretch mt-3.5 text-xs">
                    <div className="grow self-stretch text-base text-neutral-400">
                      Asgaard sofa
                    </div>
                    <div className="self-stretch my-auto">X</div>
                    <div className="self-stretch my-auto">1</div>
                  </div>
                  <div className="mt-6">Subtotal</div>
                  <div className="mt-6">Total</div>
                </div>
              </div>
              <div className="flex flex-col w-[55%] max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                  <div className="flex flex-col items-end pl-9 text-base font-light text-black max-md:pl-5">
                    <div className="text-2xl font-medium">Subtotal</div>
                    <div className="mt-3.5">Rs. 250,000.00</div>
                    <div className="mt-6">Rs. 250,000.00</div>
                  </div>
                  <div className="mt-4 text-2xl font-bold text-yellow-600">
                    Rs. 250,000.00
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-8 border-zinc-300" />
            <fieldset className="mt-6">
              <legend className="sr-only">Payment Method</legend>
              <div className="flex gap-4 items-center">
                <input
                  type="radio"
                  id="bank-transfer"
                  name="payment"
                  defaultChecked
                  className="w-3.5 h-3.5 bg-black rounded-full"
                />
                <label htmlFor="bank-transfer" className="text-base text-black">
                  Direct Bank Transfer
                </label>
              </div>
              <p className="mt-3 text-base font-light text-neutral-400">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
              <div className="flex gap-4 items-center mt-6">
                <input
                  type="radio"
                  id="paypal"
                  name="payment"
                  className="w-3.5 h-3.5 bg-black rounded-full"
                />
                <label htmlFor="paypal" className="text-base text-black">
                  PayPal
                </label>
              </div>
            </fieldset>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-3 mt-9 mb-0 w-full py-4 text-base font-semibold text-center text-white bg-black rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black hover:bg-neutral-700"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </form>
  </main>
</div>

  
  )
}
