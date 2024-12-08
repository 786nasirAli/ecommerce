import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  { name: "Trenton modular sofa", price: "Rs. 25,000.00", image: "/path/to/image1.jpg" },
  { name: "Granite dining table", price: "Rs. 25,000.00", image: "/path/to/image2.jpg" },
  // Add the remaining products
];

export default function Shop() {
  return (
    <div>
      <Head>
        <title>Shop</title>
      </Head>
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <nav className="flex space-x-8">
            <Link href="/"><a className="text-lg font-medium">Home</a></Link>
            <Link href="/shop"><a className="text-lg font-medium">Shop</a></Link>
            <Link href="/about"><a className="text-lg font-medium">About</a></Link>
            <Link href="/contact"><a className="text-lg font-medium">Contact</a></Link>
          </nav>
          <div className="flex space-x-4">
            <i className="fas fa-user text-lg"></i>
            <i className="fas fa-search text-lg"></i>
            <i className="fas fa-heart text-lg"></i>
            <i className="fas fa-shopping-cart text-lg"></i>
          </div>
        </div>
      </header>

      {/* Banner */}
      <section className="relative">
        <Image
          src="/path/to/banner.jpg"
          alt="Shop banner"
          width={1920}
          height={400}
          className="w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl font-bold">Shop</h1>
          <p className="text-lg">Home &gt; Shop</p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-gray-100 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex space-x-4">
            <i className="fas fa-filter"></i> <span>Filter</span>
            <i className="fas fa-th-large"></i>
            <i className="fas fa-th-list"></i>
          </div>
          <div className="flex space-x-4">
            <span>Show</span>
            <select className="border px-2 py-1">
              <option>16</option>
            </select>
            <span>Sort by</span>
            <select className="border px-2 py-1">
              <option>Default</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-8">
        {products.map((product, index) => (
          <div key={index} className="text-center">
            <Image src={product.image} alt={product.name} width={200} height={200} />
            <h2 className="text-lg font-medium mt-2">{product.name}</h2>
            <p className="text-lg font-bold">{product.price}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
          <div>
            <h3 className="font-bold mb-2">Links</h3>
            <ul>
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/shop"><a>Shop</a></Link></li>
              <li><Link href="/about"><a>About</a></Link></li>
              <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
          </div>
          {/* Add help and newsletter sections */}
        </div>
      </footer>
    </div>
  );
}
