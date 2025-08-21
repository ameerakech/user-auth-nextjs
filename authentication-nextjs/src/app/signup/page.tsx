"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "../shared-components/Footer";
import Navbar from "../shared-components/Navbar";

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex flex-1 max-w-7xl mx-auto px-6 py-12 gap-16 items-center justify-center">
        <div>
          <Image
            src="/auth-image.jpg"
            width={1200}
            height={600}
            alt="Sign up page image"
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
            className="bg-red-600 text-white rounded px-8 py-2 mt-4 hover:bg-red-700 transition"
          >
            Create Account
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 border rounded px-8 py-2 mt-4"
          >
            <Image
              src="/Google__G__logo.svg.webp"
              alt="Google"
              width={24}
              height={24}
            />
            Sign Up with Google
          </button>

          <p className="mt-6 text-sm text-gray-700">
            Already have an account?{" "}
            <Link href="/login" className="text-red-600 hover:underline">
              Log In
            </Link>
          </p>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default SignUp;
