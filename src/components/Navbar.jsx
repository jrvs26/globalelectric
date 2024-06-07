import React, { useState, useEffect } from "react";
import Logo from "../images/globaltranslogo.png";

function Navbar({ scrollToTop, scrollToAbout, scrollToContacts }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <nav
        className={`bg-${isScrolled ? "violet-800" : "gray-600"} ${
          isScrolled
            ? "fixed top-0 left-0 w-full z-50 transition-all duration-300"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <button className="flex items-center" onClick={scrollToTop}>
                <img src={Logo} alt="Company Logo" className="h-10 mr-2" />
                <span className="text-white text-2xl font-bold">
                  Global Electric
                </span>
              </button>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  onClick={scrollToTop}
                  href="#home"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={scrollToAbout}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <div className="relative inline-block text-left">
                  <button
                    type="button"
                    onClick={toggleDropdown}
                    className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Gallery
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    className={`z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ${
                      isDropdownOpen ? "block" : "hidden"
                    }`}
                  >
                    <div
                      className={`py-1 ${
                        isScrolled ? "bg-violet-700" : "bg-gray-700"
                      } rounded-md shadow-xs`}
                    >
                      {/* Dropdown content goes here */}
                      <a
                        href="/"
                        className="block px-4 py-2 text-white hover:bg-gray-400"
                      >
                        Gallery
                      </a>
                      <a
                        href="/"
                        className="block px-4 py-2 text-white hover:bg-gray-400"
                      >
                        Test Equipments
                      </a>
                      <a
                        href="/"
                        className="block px-4 py-2 text-white hover:bg-gray-400"
                      >
                        Company Vehicles
                      </a>
                      <a
                        href="/"
                        className="block px-4 py-2 text-white hover:bg-gray-400"
                      >
                        Projects
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  onClick={scrollToContacts}
                  href="#contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
