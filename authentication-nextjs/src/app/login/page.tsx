// "use client";

// import Image from "next/image";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

// const Login = () => {
//     return (
//         <div>
//             <Navbar />
//             <Image
//                 src="/login-image.webp"
//                 width={800}
//                 height={800}
//                 alt="Login page image"
//             />
//             <form>
//                 <h1 className="text-black text-3xl">Log in to Exclusive</h1>
//                 <p className="text-black text-1xl">Enter your details below</p>
//                 <input type="email" name="email" placeholder="Email" required />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     required
//                 />
//                 <button type="submit">Login</button>
//                 <a href="#" className="forgot-link">
//                     Forget Password?
//                 </a>
//             </form>
//             <Footer />
//         </div>
//     );
// };

// export default Login;


"use client";

import Image from "next/image";
import Footer from "../shared-components/Footer";
import Navbar from "../shared-components/Navbar";


const Login = () => {
  return (
    <div>
      <Navbar />


      <main className=" flex max-w-7xl mx-auto px-6 py-12 gap-16 items-center justify-center">

        <div>
          <Image
            src="/login-image.webp"
            width={1200}
            height={600}
            alt="Login page image"
            className="rounded-lg"
          />
        </div>

        <form className="flex flex-col max-w-md w-full gap-6">
          <h1 className="text-black text-3xl font-semibold">Log in to Exclusive</h1>
          <p className="text-gray-700 mb-4">Enter your details below</p>

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
            <div className="flex gap-45" >
          <button
            type="submit"
            className="bg-red-600 text-white rounded px-6 py-2 mt-4 w-fit hover:bg-red-700 transition"
          >
            Log In
          </button>

          <a href="#" className="text-red-600 text-sm mt-7 hover:underline">
            Forget Password?
          </a>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
