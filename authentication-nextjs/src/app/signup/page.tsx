
"use client";

import Image from "next/image";
import Footer from "../shared-components/Footer";
import Navbar from "../shared-components/Navbar";


const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />


      <main className="flex flex-1 max-w-7xl mx-auto px-6 py-12 gap-16 items-center justify-center">

        <div className="flex-shrink-0 max-w-md">
          <Image
            src="/login-image.webp"
            width={600}
            height={600}
            alt="Login page image"
            className="rounded-lg"
          />
        </div>

        <form className="flex flex-col max-w-md w-full gap-6">
          <h1 className="text-black text-3xl font-semibold">Sign up to Exclusive</h1>
          <p className="text-gray-700 mb-4">Enter your details below</p>



        
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="border-b border-gray-400 focus:outline-none focus:border-orange-500 pb-2 placeholder-gray-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email or Phone Number"
            required
            className="border-b border-gray-400 focus:outline-none focus:border-orange-500 pb-2 placeholder-gray-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="border-b border-gray-400 focus:outline-none focus:border-orange-500 pb-2 placeholder-gray-400"
          />

          <button
            type="submit"
            className="bg-red-600 text-white rounded px-6 py-2 mt-4 w-fit hover:bg-red-700 transition"
          >
            Log In
          </button>

          <a href="#" className="text-red-600 text-sm mt-2 hover:underline self-start">
            Forget Password?
          </a>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default SignUp;