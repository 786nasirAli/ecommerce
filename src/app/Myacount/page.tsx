import Link from 'next/link'; // Import Link from Next.js
import Image from 'next/image';
export default function Page() {
  return (
    <div>
      <div className="flex overflow-hidden flex-col bg-white">
  
        <Image
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
                  <Link href="/reset-password" className="my-auto text-base font-light basis-auto">
                   Lost Your Password?
                  </Link>
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
                  <Link href="/privacy" className="font-semibold">
                     privacy policy.
                  </Link>
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
        
        {/* Features and Footer sections remain the same */}
      </div>
    </div>
  );
}
