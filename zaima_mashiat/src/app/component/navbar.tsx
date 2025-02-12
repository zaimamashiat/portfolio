"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#C890A7] text-[#212121] border-[#A35C7A]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#FBF5E5] rounded-lg md:hidden hover:bg-[#A35C7A] focus:outline-none focus:ring-2 focus:ring-[#A35C7A]"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation items */}
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-[#A35C7A] rounded-lg bg-[#C890A7] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white font-bold bg-[#A35C7A] rounded-sm md:bg-transparent md:text-white md:p-0 hover:text-black"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white font-bold rounded-sm hover:bg-[#A35C7A] md:hover:bg-transparent md:border-0 hover:text-black md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white font-bold rounded-sm hover:bg-[#A35C7A] md:hover:bg-transparent md:border-0 hover:text-black md:p-0"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white font-bold rounded-sm hover:bg-[#A35C7A] md:hover:bg-transparent md:border-0 hover:text-black md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

