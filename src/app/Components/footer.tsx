
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
                <a href="#" className="text-black hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
  
          {/* Help Section */}
          <div>
            <h3 className="text-gray-500 font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black hover:underline">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:underline">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:underline">
                  Privacy Policies
                </a>
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
              <button className="bg-white font-semibold (600)
 text-black px-4 py-2 rounded hover:bg-gray-800">
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
  