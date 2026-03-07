// src/MaintenancePage.jsx
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MaintenancePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Save the previous URL or default to "/"
  const previousUrl = sessionStorage.getItem("lastUrl") || "/";

  useEffect(() => {
    // After 10 seconds, redirect back
    const timer = setTimeout(() => {
      navigate(previousUrl);
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate, previousUrl]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-6">
      <svg
        className="mx-auto mb-6 w-16 h-16 text-yellow-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M12 8v4m0 4h.01M12 12h.01m-6.938 4.938a10.012 10.012 0 001.414-1.414M4.222 4.222a10.012 10.012 0 011.414-1.414m14.142 14.142a10.012 10.012 0 01-1.414 1.414M19.778 4.222a10.012 10.012 0 00-1.414-1.414M12 2a10 10 0 100 20 10 10 0 000-20z"
        />
      </svg>

      <h1 className="text-6xl font-bold mb-4">We'll Be Back Soon!</h1>
      <p className="text-gray-600 mb-6 text-lg text-center">
        Sorry for the inconvenience but we're performing some maintenance at
        the moment. We'll be back online shortly!
      </p>
      <div className="flex gap-4">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          onClick={() => navigate(previousUrl)}
        >
          Go Back Now
        </button>
      </div>
    </div>
  );
};

export default MaintenancePage;