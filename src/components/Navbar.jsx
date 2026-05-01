import React, { useState, useEffect } from "react";
import Logo from "../assets/globalLogo.png";
import { ArrowUp, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showTopButton, setShowTopButton] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
        setMenuOpen(false); // close menu when scrolling down
      } else if (currentScrollY <= 80) {
        setShowNavbar(true);
      }

      // Show back-to-top button when scrolled down
      setShowTopButton(currentScrollY > 300);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    {name: "Home", href: "/"},
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-300 bg-white/30 py-2 shadow-md backdrop-blur-xs transition-all duration-500 md:top-6 md:rounded-3xl lg:max-w-screen-lg ${showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
          }`}
      >
        <div className="relative px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex shrink-0">
              <a aria-current="page" className="flex items-center" href={process.env.PUBLIC_URL + "/"}>
                <img className="h-14 w-auto" src={Logo} alt="Logo" />
              </a>
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex md:items-center md:justify-center md:gap-5">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-yellow-400 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Menu Icon */}
            <div className="flex items-center justify-end gap-3">
              {/* CTA - only on desktop */}
              <Link to="/contact">
              <button
                className="hidden md:inline-flex items-center justify-center rounded-xl bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"

              >
                Get a Quote
              </button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex items-center justify-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 transition-all duration-200"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Mobile Dropdown (absolute, overlay style) */}
            <div
              className={`absolute left-0 right-0 top-full z-20 flex flex-col items-center justify-center gap-3 bg-white/90 shadow-xl rounded-b-2xl py-4 transition-all duration-300 md:hidden ${menuOpen
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-2 invisible"
                }`}
            >
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-900 font-medium text-base hover:text-yellow-500 transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact">
              <button
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-yellow-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-yellow-500"
              >
                Get a Quote
              </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Back-to-top button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-white shadow-lg transition-all duration-300 hover:bg-yellow-500"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}

export default Navbar;