import React from "react";
import Link from "next/link";
function Header() {
  return (
    <div className="flex justify-around w-full p-4 items-center border-b shadow-md bg-white">
      <div>
        <h1 className="px-5 py-3 font-bold">Metro Grow</h1>
      </div>
      <div className="mx-5 ">
        <nav>
          <Link href="#" className="px-5 py-3 mr-3">
            Home
          </Link>
          <Link href="#about" className="px-5 py-3 mr-3">
            About
          </Link>
          <Link href="#service" className="px-5 py-3 mr-3">
            Services
          </Link>
          <Link href="#product" className="px-5 py-3 mr-3">
            Products
          </Link>
        </nav>
      </div>
      <div className="mx-5">
        <button className="px-6 py-2 mr-5 bg-custom-green border-custom-green border-2 text-white rounded text-normal">
          Log in
        </button>
        <button className="px-6 py-2 border-custom-green border-2 text-custom-green rounded text-normal">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Header;
