import React, { useState } from "react";
import { FaBolt, FaTools, FaProjectDiagram, FaPlug, FaCheckCircle, FaClock } from "react-icons/fa";

function ProjectHeroElectricalAdvanced() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { src: "https://images.unsplash.com/photo-1581091215367-59ab6b1c3e94", label: "Main Wiring Done" },
        { src: "https://images.unsplash.com/photo-1581091870627-3c36c6d48e98", label: "Panel Setup" },
        { src: "https://images.unsplash.com/photo-1581093588401-22f09f07c3e8", label: "Lighting Installation" },
        { src: "https://images.unsplash.com/photo-1581091012184-7c3d1c2f1c6a", label: "Testing & Commissioning" },
    ];

    const timeline = [
        { icon: <FaPlug />, title: "Site Inspection", date: "Jan 12, 2026", status: "done", color: "blue" },
        { icon: <FaBolt />, title: "Main Conduit Installation", date: "Feb 05, 2026", status: "in-progress", color: "yellow" },
        // { icon: <FaTools />, title: "Panel Board Delivery", date: "Mar 15, 2026", status: "pending", color: "red" },
        // { icon: <FaCheckCircle />, title: "Testing & Commissioning", date: "Apr 28, 2026", status: "pending", color: "red" },
    ];

    const scopeOfWork = [
        { icon: <FaBolt />, title: "Power Distribution", duration: "1 week", status: "done" },
        { icon: <FaPlug />, title: "Panel Installation", duration: "3 days", status: "in-progress" },
        { icon: <FaTools />, title: "Lighting & Aux Wiring", duration: "5 days", status: "pending" },
        { icon: <FaCheckCircle />, title: "Generator & ATS Setup", duration: "2 days", status: "pending" },
        { icon: <FaClock />, title: "Testing & Commissioning", duration: "3 days", status: "pending" },
    ];

    return (
        <div className="min-h-screen bg-gray-100 pt-32 px-4">

            {/* HERO IMAGE */}
            <div className="relative mb-8">
                <img
                    src={images[0].src}
                    alt="Project Hero"
                    className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-end p-6">
                    <div>
                        <h1 className="text-4xl font-bold text-yellow-400 flex items-center gap-2">
                            ⚡ Commercial Electrical Installation
                        </h1>
                        <p className="text-gray-200 mt-2">ABC Electrical Services | Project ELEC-2025-014</p>
                    </div>
                </div>
            </div>

            {/* Project Info */}
            <div className="bg-white shadow rounded-2xl p-6 mb-6 flex justify-between flex-wrap gap-4 items-start">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <FaProjectDiagram className="text-yellow-500" /> Project Details
                    </h2>
                    <p className="text-gray-500 mt-1">Complete electrical installation and commissioning</p>
                </div>
                <div className="text-right">
                    <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-semibold">Ongoing</span>
                    <p className="text-sm text-gray-500 mt-2">
                        Start: Jan 10, 2026 <br />
                        Target: Apr 30, 2026
                    </p>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="bg-white shadow rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Activity Timeline</h3>
                <div className="relative ml-4">
                    <div className="absolute left-4 top-0 w-1 h-full bg-gray-300"></div>
                    {timeline.map((item, idx) => (
                        <div key={idx} className="mb-8 relative pl-8">
                            <div className={`absolute left-0 top-0 w-8 h-8 flex items-center justify-center rounded-full bg-${item.color}-500 text-white`}>
                                {item.icon}
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800">{item.title}</p>
                                <p className="text-sm text-gray-500">{item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scope of Work Cards */}
            <div className="bg-white shadow rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Scope of Work</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {scopeOfWork.map((task, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-xl p-4 flex flex-col items-center shadow hover:shadow-lg transition">
                            <div className="text-3xl mb-2">{task.icon}</div>
                            <h4 className="font-semibold text-gray-700 mb-1">{task.title}</h4>
                            <p className="text-sm text-gray-500 mb-2">{task.duration}</p>
                            <span className={`px-3 py-1 text-xs rounded-full font-semibold ${
                                task.status === "done" ? "bg-green-100 text-green-800" :
                                task.status === "in-progress" ? "bg-yellow-100 text-yellow-800" :
                                "bg-gray-100 text-gray-600"
                            }`}>
                                {task.status.toUpperCase()}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gallery */}
            <div className="bg-white shadow rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Project Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedImage(img.src)}
                            className="cursor-pointer group relative"
                        >
                            <img
                                src={img.src}
                                alt={img.label}
                                className="w-full h-40 object-cover rounded-xl shadow group-hover:scale-105 transition duration-300"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 rounded-xl transition flex items-center justify-center">
                                <span className="text-white font-semibold">{img.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <div className="relative max-w-4xl w-full px-4">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-10 right-4 text-white text-3xl font-bold"
                        >
                            ✕
                        </button>
                        <img
                            src={selectedImage}
                            alt="Full View"
                            className="w-full max-h-[80vh] object-contain rounded-xl"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectHeroElectricalAdvanced;