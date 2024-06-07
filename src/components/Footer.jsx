import React from "react";
import Logo from "../images/globaltranslogo.png";

function Footer() {
  return (
    <footer className="bg-violet-800 mt-auto">
      <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 flex justify-center items-center h-20">
        <div className="flex items-center cursor-default">
          <img src={Logo} alt="" className="h-8 mr-2" /> {/* Adjust the height of the logo */}
        <p className="text-gray-300"><strong>&copy; 2012 Global Electric Power Development Corporation. All rights reserved.</strong></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
    