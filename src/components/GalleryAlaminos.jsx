import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import alaminos1 from "../assets/alaminos/alaminos (1).jpg";
import alaminos2 from "../assets/alaminos/alaminos (2).JPG";
import alaminos3 from "../assets/alaminos/alaminos (3).JPG";
import alaminos4 from "../assets/alaminos/alaminos (4).JPG";
import alaminos5 from "../assets/alaminos/alaminos (5).JPG";
import alaminos6 from "../assets/alaminos/alaminos (6).JPG";
import alaminos7 from "../assets/alaminos/alaminos (7).JPG";
import alaminos8 from "../assets/alaminos/alaminos (8).jpg";
import alaminos9 from "../assets/alaminos/alaminos (9).JPG";
import alaminos10 from "../assets/alaminos/alaminos (10).JPG";
import alaminos11 from "../assets/alaminos/alaminos (11).JPG";
import alaminos12 from "../assets/alaminos/alaminos (12).JPG";
import alaminos13 from "../assets/alaminos/alaminos (13).JPG";
import alaminos14 from "../assets/alaminos/alaminos (14).JPG";
import alaminos15 from "../assets/alaminos/alaminos (15).JPG";
import alaminos16 from "../assets/alaminos/alaminos (16).JPG";
import alaminos17 from "../assets/alaminos/alaminos (17).JPG";
import alaminos18 from "../assets/alaminos/alaminos (18).JPG";
import alaminos19 from "../assets/alaminos/alaminos (19).JPG";
import alaminos20 from "../assets/alaminos/alaminos (20).JPG";
import alaminos21 from "../assets/alaminos/alaminos (21).JPG";
import alaminos22 from "../assets/alaminos/alaminos (22).JPG";
import alaminos23 from "../assets/alaminos/alaminos (23).JPG";
import alaminos24 from "../assets/alaminos/alaminos (24).JPG";
import alaminos25 from "../assets/alaminos/alaminos (25).JPG";
import alaminos26 from "../assets/alaminos/alaminos (26).jpg";
import alaminos27 from "../assets/alaminos/alaminos (27).jpg";
import alaminos28 from "../assets/alaminos/alaminos (28).jpg";
import alaminos29 from "../assets/alaminos/alaminos (29).jpg";
import alaminos30 from "../assets/alaminos/alaminos (30).jpg";
import alaminos31 from "../assets/alaminos/alaminos (31).jpg";
import alaminos32 from "../assets/alaminos/alaminos (32).jpg";
import alaminos33 from "../assets/alaminos/alaminos (33).jpg";
import alaminos34 from "../assets/alaminos/alaminos (34).jpg";
import alaminos35 from "../assets/alaminos/alaminos (35).JPG";
import alaminos36 from "../assets/alaminos/alaminos (36).jpg";
import alaminos37 from "../assets/alaminos/alaminos (37).JPG";
import alaminos38 from "../assets/alaminos/alaminos (38).JPG";
import alaminos39 from "../assets/alaminos/alaminos (39).jpg";

const galleryImages = [
  alaminos1,
  alaminos2,
  alaminos3,
  alaminos4,
  alaminos5,
  alaminos6,
  alaminos7,
  alaminos8,
  alaminos9,
  alaminos10,
  alaminos11,
  alaminos12,
  alaminos13,
  alaminos14,
  alaminos15,
  alaminos16,
  alaminos17,
  alaminos18,
  alaminos19,
  alaminos20,
  alaminos21,
  alaminos22,
  alaminos23,
  alaminos24,
  alaminos25,
  alaminos26,
  alaminos27,
  alaminos28,
  alaminos29,
  alaminos30,
  alaminos31,
  alaminos32,
  alaminos33,
  alaminos34,
  alaminos35,
  alaminos36,
  alaminos37,
  alaminos38,
  alaminos39,
];

function GalleryAlaminos() {
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
          Alaminos Solar Farm
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
export default GalleryAlaminos