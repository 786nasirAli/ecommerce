// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void; // Define the type for toggleSidebar
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed top-0 right-0 w-64 h-full bg-gray-200 shadow-lg p-4 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
      <div className="flex flex-col rounded-none w-full max-w-sm bg-white shadow-lg h-full fixed top-0 right-0 overflow-y-auto">
        <div className="px-6 py-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <button onClick={toggleSidebar} className="text-black font-bold mb-4">Close</button> {/* Close button */}
              <form className="flex flex-col items-start w-full text-black">
                <h2 className="text-2xl font-semibold">Log In</h2>
                <label htmlFor="username" className="mt-4 text-base font-medium">
                  Username or email address
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="mt-2 w-full bg-white rounded-lg border border-neutral-400 h-10 px-3"
                  required
                />
                <label htmlFor="password" className="mt-4 text-base font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-2 w-full bg-white rounded-lg border border-neutral-400 h-10 px-3"
                  required
                />
                <div className="flex items-center gap-3 mt-4">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="bg-white rounded border border-neutral-400 h-4 w-4"
                  />
                  <label htmlFor="remember" className="text-sm">Remember me</label>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <button
                    type="submit"
                    className="px-6 py-2 text-sm bg-black text-white rounded-md"
                  >
                    Log In
                  </button>
                  <Link href="#" className="text-sm text-blue-500 underline">
                    Lost Your Password?
                  </Link>
                </div>
              </form>
            </div>
            <div className="flex flex-col mt-8">
              <form className="flex flex-col w-full text-black">
                <h2 className="text-2xl font-semibold">Register</h2>
                <label htmlFor="email" className="mt-4 text-base font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 w-full bg-white rounded-lg border border-neutral-400 h-10 px-3"
                  required
                />
                <p className="mt-4 text-sm">
                  A link to set a new password will be sent to your email address.
                </p>
                <p className="mt-2 text-sm">
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link href="#"className="font-semibold text-blue-500 underline">privacy policy</Link>.
                </p>
                <button
                  type="submit"
                  className="px-6 py-2 mt-4 text-sm bg-black text-white rounded-md"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
