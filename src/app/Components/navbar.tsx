import Link from "next/link"; // Already imported
import Image from "next/image";
const Navbar = () => {
    return (
        <div>
            <div className="flex overflow-hidden flex-col bg-white">
                <nav
                    className="px-4 sm:px-8 md:px-16 lg:px-20 py-6 sm:py-9 w-full bg-amber-100"
                    aria-label="Main navigation"
                >
                    <div className="flex flex-col sm:flex-row gap-5">
                        <div className="flex flex-col w-full sm:w-[64%]">
                            <div className="flex flex-row sm:flex-row gap-4 sm:gap-5 justify-between self-stretch my-auto text-sm sm:text-base font-medium text-black">
                                <Link
                                    href="/"
                                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-200"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/Shop"
                                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-200"
                                >
                                    Shop
                                </Link>
                                <Link
                                    href="/About"
                                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-200"
                                >
                                    About
                                </Link>
                                <Link
                                    href="/Contact"
                                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-200"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center sm:justify-start w-full sm:w-[36%]">
                            <Image
                                loading="lazy"
                                src="/nav.svg"
                                alt="Company logo"
                                className="object-contain w-[180px] sm:w-[247px] aspect-[8.85]"
                                width={480}
                                height={100}
                            />
                        </div>
                    </div>
                </nav>
                {/* Rest of the component */}
            </div>
        </div>
    );
};

export default Navbar;
