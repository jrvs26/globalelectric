import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import pavi1 from "../assets/pavi/1.png";
import pavi2 from "../assets/pavi/2.jpg";
import pavi3 from "../assets/pavi/2.png";
import pavi4 from "../assets/pavi/3.jpg";
import pavi5 from "../assets/pavi/3.png";
const galleryImages = [
    pavi1,
    pavi2,
    pavi3,
    pavi4,
    pavi5
];

function GalleryPavi() {

  const { pathname } = useLocation();
    React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // use "smooth" if you want animation
    });
  }, [pathname]);

    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <div className="min-h-screen bg-gray-950">
      <div className="bg-yellow-500 py-6 shadow-lg flex items-center justify-between px-6">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide">
          Pavi Bataan Solar Farm
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-900 text-yellow-500 px-4 py-2 rounded-xl font-semibold hover:bg-gray-800 transition"
        >
          Go Back
        </button>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-xl group cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Electrical project ${index + 11}`}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Selected project"
              className="w-full rounded-2xl shadow-2xl object-contain max-h-screen"
            />
          </div>
        </div>
      )}
    </div>
    );
}
export default GalleryPavi