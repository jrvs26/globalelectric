import React from "react";
import { Link } from "react-router-dom";
import notFoundImg from "../assets/404.svg";

export default function NotFound() {
  return (
    <div className="relative min-h-[110vh] flex flex-col items-center justify-center text-white overflow-hidden">
      
      {/* Image */}
      <img
        src={notFoundImg}
        alt="404 illustration"
        className="w-[420px] max-w-full mb-8"
      />

      {/* Text */}
      <h1 className="text-7xl font-bold text-gray-800 mb-3">
        404
      </h1>

      <h2 className="text-2xl font-semibold text-gray-600 mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-500 text-center max-w-md mb-6">
        The page you're looking for doesn’t exist or may have been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg shadow transition"
      >
        Go Home
      </Link>
    </div>
  );
}