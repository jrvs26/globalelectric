import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import sanildefonso1 from "../assets/sanIldefonso/sanildefonso (1).jpg";
import sanildefonso2 from "../assets/sanIldefonso/sanildefonso (2).jpg";
import sanildefonso3 from "../assets/sanIldefonso/sanildefonso (3).jpg";
import sanildefonso4 from "../assets/sanIldefonso/sanildefonso (4).jpg";
import sanildefonso5 from "../assets/sanIldefonso/sanildefonso (5).jpg";
import sanildefonso6 from "../assets/sanIldefonso/sanildefonso (6).jpg";
import sanildefonso7 from "../assets/sanIldefonso/sanildefonso (7).jpg";
import sanildefonso8 from "../assets/sanIldefonso/sanildefonso (8).jpg";
import sanildefonso9 from "../assets/sanIldefonso/sanildefonso (9).jpg";
import sanildefonso10 from "../assets/sanIldefonso/sanildefonso (10).jpg";
import sanildefonso11 from "../assets/sanIldefonso/sanildefonso (11).jpg";
import sanildefonso12 from "../assets/sanIldefonso/sanildefonso (12).png";
import sanildefonso13 from "../assets/sanIldefonso/sanildefonso (13).png";
import sanildefonso14 from "../assets/sanIldefonso/sanildefonso (14).png";


const galleryImages = [
  sanildefonso1,
  sanildefonso2,
  sanildefonso3,
  sanildefonso4,
  sanildefonso5,
  sanildefonso6,
  sanildefonso7,
  sanildefonso8,
  sanildefonso9,
  sanildefonso10,
  sanildefonso11,
  sanildefonso12,
  sanildefonso13,
  sanildefonso14,
];

function GallerySanIldefonso() {
    
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);

    const { pathname } = useLocation();
    React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // use "smooth" if you want animation
    });
  }, [pathname]);


    return (
        <div className="min-h-screen bg-gray-950">
      <div className="bg-yellow-500 py-6 shadow-lg flex items-center justify-between px-6">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide">
          San Ildefonso Solar Farm
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
export default GallerySanIldefonso