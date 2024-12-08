import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="flex items-center justify-between px-16 py-4 bg-yellow-100">
        <div className="text-xl font-bold">BrandName</div>
        <nav className="flex gap-8 text-lg">
          <a href="#">Home</a>
          <a href="/Shop">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className="flex gap-4">
          <a href="#">👤</a>
          <a href="#">🖤</a>
          <a href="#">🔍</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex items-center justify-between bg-yellow-100 px-16 py-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">Rocket single seater</h1>
          <a href="#" className="inline-block text-lg border-b-2 border-black">
            Shop Now
          </a>
        </div>
        <Image
          src="/body.png.png" // Replace with your image path
          alt="Rocket single seater"
          width={1000}
          height={800}
        />
      </section>

      {/* Featured Products */}
      <section className="bg-pink-50 py-12 px-16">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <Image src="/table.png" alt="Side table" width={600} height={600} />
            <h2 className="mt-4 text-xl font-bold">Side table</h2>
            <a href="#" className="text-sm border-b-2 border-black">
              View More
            </a>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/chair2.png" alt="Side table" width={600} height={600} />
            <h2 className="mt-4 text-xl font-bold">Side table</h2>
            <a href="#" className="text-sm border-b-2 border-black">
              View More
            </a>
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-12 px-16 bg-white text-center">
        <h2 className="text-2xl font-bold mb-4">Top Picks For You</h2>
        <p className="mb-8">
          Find a bright idea to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
        <div className="grid grid-cols-4 gap-8">
  {[...Array(4)].map((_, i) => (
    <div key={i} className="text-center">
      <Image
        src={`/images/c1-removebg-preview${i + 1}.png`} // Correct path to the image
        alt="Product"
        width={200}
        height={200}
      />
      <p className="mt-4 font-bold">Product Name</p>
      <p className="text-sm">Rs. 25,000.00</p>
    </div>
  ))}
</div>

        <a
          href="#"
          className="inline-block mt-8 text-sm border-b-2 border-black"
        >
          View More
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-16">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <form>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <button className="mt-4 px-6 py-2 bg-black text-white rounded-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <p className="text-center mt-8 text-sm">
          © 2023 Neutral House. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
