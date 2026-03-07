import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import giga1 from "../assets/giga/giga (1).JPG";
import giga2 from "../assets/giga/giga (2).JPG";
import giga3 from "../assets/giga/giga (3).jpg";
import giga4 from "../assets/giga/giga (4).jpg";
import giga5 from "../assets/giga/giga (5).jpg";
import giga6 from "../assets/giga/giga (6).jpg";
import giga7 from "../assets/giga/giga (7).jpg";
import giga8 from "../assets/giga/giga (8).jpg";
import giga9 from "../assets/giga/giga (9).jpg";
import giga10 from "../assets/giga/giga (10).jpg";
import giga11 from "../assets/giga/giga (11).jpg";
import giga12 from "../assets/giga/giga (12).jpg";
import giga13 from "../assets/giga/giga (13).jpg";
import giga14 from "../assets/giga/giga (14).jpg";
import giga15 from "../assets/giga/giga (15).jpg";
import giga16 from "../assets/giga/giga (16).jpg";
import giga17 from "../assets/giga/giga (17).jpg";
import giga18 from "../assets/giga/giga (18).jpg";
import giga19 from "../assets/giga/giga (19).jpg";
import giga20 from "../assets/giga/giga (20).jpg";
import giga21 from "../assets/giga/giga (21).jpg";
import giga22 from "../assets/giga/giga (22).jpg";
import giga23 from "../assets/giga/giga (23).jpg";
import giga24 from "../assets/giga/giga (24).jpg";
import giga25 from "../assets/giga/giga (25).jpg";
import giga26 from "../assets/giga/giga (26).jpg";
import giga27 from "../assets/giga/giga (27).jpg";
import giga28 from "../assets/giga/giga (28).jpg";
import giga29 from "../assets/giga/giga (29).jpg";
import giga30 from "../assets/giga/giga (30).jpg";
import giga31 from "../assets/giga/giga (31).jpg";
import giga32 from "../assets/giga/giga (32).jpg";
import giga33 from "../assets/giga/giga (33).jpg";
import giga34 from "../assets/giga/giga (34).jpg";
import giga35 from "../assets/giga/giga (35).jpg";
import giga36 from "../assets/giga/giga (36).jpg";
import giga37 from "../assets/giga/giga (37).jpg";
import giga38 from "../assets/giga/giga (38).jpg";
import giga39 from "../assets/giga/giga (39).jpg";
import giga40 from "../assets/giga/giga (40).jpg";
import giga41 from "../assets/giga/giga (41).jpg";
import giga42 from "../assets/giga/giga (42).jpg";
import giga43 from "../assets/giga/giga (43).jpg";
import giga44 from "../assets/giga/giga (44).jpg";
import giga45 from "../assets/giga/giga (45).jpg";
import giga46 from "../assets/giga/giga (46).jpg";
import giga47 from "../assets/giga/giga (47).jpg";
import giga48 from "../assets/giga/giga (48).jpg";
import giga49 from "../assets/giga/giga (49).jpg";
import giga50 from "../assets/giga/giga (50).JPG";
import giga51 from "../assets/giga/giga (51).JPG";


const galleryImages = [
    giga1,
    giga2,
    giga3,
    giga4,
    giga5,
    giga6,
    giga7,
    giga8,
    giga9,
    giga10,
    giga11,
    giga12,
    giga13,
    giga14,
    giga15,
    giga16,
    giga17,
    giga18,
    giga19,
    giga20,
    giga21,
    giga22,
    giga23,
    giga24,
    giga25,
    giga26,
    giga27,
    giga28,
    giga29,
    giga30,
    giga31,
    giga32,
    giga33,
    giga34,
    giga35,
    giga36,
    giga37,
    giga38,
    giga39,
    giga40,
    giga41,
    giga42,
    giga43,
    giga44,
    giga45,
    giga46,
    giga47,
    giga48,
    giga49,
    giga50,
    giga51,
];

function GalleryGiga() {

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
                    Giga Ace 8 Solar Farm
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
export default GalleryGiga