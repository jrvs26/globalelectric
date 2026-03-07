import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ssp1 from "../assets/sspc/sspc (1).jpeg";
import ssp2 from "../assets/sspc/sspc (2).jpeg";
import ssp3 from "../assets/sspc/sspc (3).jpeg";
import ssp4 from "../assets/sspc/sspc (4).jpeg";
import ssp5 from "../assets/sspc/sspc (5).jpeg";
import ssp6 from "../assets/sspc/sspc (6).jpeg";
import ssp7 from "../assets/sspc/sspc (7).jpeg";
import ssp8 from "../assets/sspc/sspc (8).jpeg";
import ssp9 from "../assets/sspc/sspc (9).jpeg";
import ssp10 from "../assets/sspc/sspc (10).jpeg";
import ssp11 from "../assets/sspc/sspc (1).JPG";
import ssp12 from "../assets/sspc/sspc (2).JPG";
import ssp13 from "../assets/sspc/sspc (3).jpg";
import ssp14 from "../assets/sspc/sspc (4).jpg";
import ssp15 from "../assets/sspc/sspc (5).jpg";
import ssp16 from "../assets/sspc/sspc (6).jpg";
import ssp17 from "../assets/sspc/sspc (7).jpg";

const galleryImages = [
  ssp1,
  ssp2,
  ssp3,
  ssp4,
  ssp5,
  ssp6,
  ssp7,
  ssp8,
  ssp9,
  ssp10,
  ssp11,
  ssp12,
  ssp13,
  ssp14,
  ssp15,
  ssp16,
  ssp17,
];

function GallerySSPC() {

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
          San Manuel Pangasinan Solar Farm
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
export default GallerySSPC