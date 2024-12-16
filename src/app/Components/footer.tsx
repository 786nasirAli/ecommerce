import Link from 'next/link'; // Import Link component

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10 px-6 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Address Section */}
        <div>
          <p className="text-gray-700">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-gray-500 font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-black hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-black hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-black hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-black hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-gray-500 font-semibold mb-4">Help</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/payment-options" className="text-black hover:underline">
                Payment Options
              </Link>
            </li>
            <li>
              <Link href="/returns" className="text-black hover:underline">
                Returns
              </Link>
            </li>
            <li>
              <Link href="/privacy-policies" className="text-black hover:underline">
                Privacy Policies
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-gray-500 font-semibold mb-4">Newsletter</h3>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-black"
            />
            <button className="bg-white font-semibold text-black px-4 py-2 rounded hover:bg-gray-800">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center border-t pt-4 text-gray-700 text-sm">
        <p>2022 Meubel House. All rights reserved</p>
      </div>
    </footer>
  );
}
