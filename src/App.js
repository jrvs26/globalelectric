import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Hazard from "./components/Hazard";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const contentTimer = setTimeout(() => {
      setIsContentLoaded(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollToAbout = () => {
    document
      .getElementById("about-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContacts = () => {
    document
      .getElementById("contact-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {isLoading ? (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 flex justify-center items-center">
          <div className="flex items-center justify-center w-56 h-56 bg-gray-800 dark:bg-gray-800 dark:border-gray-700">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-white-600 animate-spin dark:text-white-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ) : isContentLoaded ? (
        <>
          <Navbar
            id="home"
            scrollToTop={scrollToTop}
            scrollToAbout={scrollToAbout}
            scrollToContacts={scrollToContacts}
            isScrolled={isScrolled}
          />
          <div className="flex-grow bg-gray-800">
            <Hazard flipped={true} />
            <Carousel />
            <Hazard />
            <hr className="h-1 w-75 mx-auto my-5 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300" />
            <About id="about-section" />
            <hr className="h-1 w-75 mx-auto my-5 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300" />
            <Contact id="contact-section"/>
          </div>

          <Footer />
        </>
      ) : null}
    </div>
  );
}

export default App;
