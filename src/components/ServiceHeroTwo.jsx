import React from "react";
import { Link } from "react-router-dom"
import {
    BoltIcon,
    SunIcon,
    ChartBarIcon,
    WrenchScrewdriverIcon,
    BuildingOfficeIcon,
    ShieldCheckIcon,
    CpuChipIcon,
} from "@heroicons/react/24/outline";

function ServiceHeroTwo() {

    const technicalServices = [
        "Terrain Modeling",
        "PLS-Cadd Design (Transmission Line Design)",
        "Power System Analysis",
        "Site Grading & Drainage Design",
        "Foundation Design",
        "Pull-out Testing",
        "PVsyst Study",
        "Lightning Risk Study",
        "Soil Investigation Study",
    ];

    const maintenanceServices = [
        "Transformers",
        "Substation Facilities & Equipment",
        "Switchgear & Motor Control Centers (High/Low Voltage)",
        "Automatic & Manual Transfer Switch",
    ];

    return (
        <div className="bg-gray-50 text-gray-800">
            <section className="bg-white border-b border-gray-200 py-6 mt-32">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-yellow-600 font-semibold tracking-widest uppercase text-5xl">
                        Our Services
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold mt-2">
                        Engineering, Procurement & Solar Infrastructure Solutions
                    </h1>
                </div>
            </section>
            {/* HERO SECTION */}
            <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-24">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex justify-center mb-6">
                        <SunIcon className="h-16 w-16 text-yellow-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Utility-Scale Solar EPC <br /> & Technical Infrastructure Services
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-gray-300">
                        End-to-end Engineering, Procurement, Construction (EPC) and
                        Operation & Maintenance (O&M) solutions for large-scale
                        renewable energy projects.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-8 text-center">
                        <div>
                            <h3 className="text-3xl font-bold text-yellow-400">100MW+</h3>
                            <p className="text-gray-400">Utility Projects</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-yellow-400">End-to-End</h3>
                            <p className="text-gray-400">EPC Delivery</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-yellow-400">24/7</h3>
                            <p className="text-gray-400">O&M Support</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* EPC OVERVIEW */}
            <section className="py-20 container mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-bold mb-4">
                        EPC Contractor & O&M Operator
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-600">
                        We provide turnkey EPC services covering engineering design,
                        equipment procurement, construction, testing, and long-term
                        operational maintenance of utility-scale solar farms.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
                        <BoltIcon className="h-10 w-10 text-yellow-500 mb-4" />
                        <h3 className="font-semibold text-xl mb-3">Engineering & Design</h3>
                        <p className="text-gray-600">
                            Detailed electrical and civil design optimized for performance,
                            safety, and long-term efficiency.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
                        <BuildingOfficeIcon className="h-10 w-10 text-yellow-500 mb-4" />
                        <h3 className="font-semibold text-xl mb-3">Procurement</h3>
                        <p className="text-gray-600">
                            Strategic sourcing of high-quality solar modules, inverters,
                            transformers, and grid infrastructure.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
                        <ShieldCheckIcon className="h-10 w-10 text-yellow-500 mb-4" />
                        <h3 className="font-semibold text-xl mb-3">Construction & O&M</h3>
                        <p className="text-gray-600">
                            Full construction execution, commissioning, and long-term
                            operation & maintenance services.
                        </p>
                    </div>
                </div>
            </section>

            {/* TECHNICAL EXPERTISE */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold mb-4">
                            Technical Engineering Expertise
                        </h2>
                        <p className="text-gray-600">
                            Advanced studies and system analysis to ensure bankable and
                            reliable solar infrastructure.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technicalServices.map((service, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-xl p-6 hover:border-yellow-500 hover:shadow-md transition"
                            >
                                <div className="flex items-center gap-3">
                                    <CpuChipIcon className="h-6 w-6 text-yellow-500" />
                                    <h3 className="font-semibold">{service}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROJECT MANAGEMENT */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <ChartBarIcon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-6">Project Management</h2>
                    <p className="max-w-3xl mx-auto text-gray-700">
                        Comprehensive planning, budgeting, scheduling, risk assessment,
                        procurement coordination, quality control, and stakeholder
                        reporting throughout the entire project lifecycle.
                    </p>
                </div>
            </section>

            {/* INSTALLATION & COMMISSIONING */}
            <section className="py-20 container mx-auto px-6 bg-gray-50">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-yellow-600 drop-shadow-lg">
                        Electrical Installation & Commissioning
                    </h2>
                    <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                        Professional electrical solutions for commercial and industrial projects. Installation, testing, and commissioning handled with precision.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Installation Services Card */}
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-8 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-yellow-200 rounded-full opacity-20"></div>
                        <h3 className="font-bold text-2xl mb-6 flex items-center gap-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Installation Services
                        </h3>
                        <ul className="space-y-3 text-white/90">
                            <li>⚡ Primary & Secondary Distribution Systems</li>
                            <li>🔌 Installation of Electrical Equipment</li>
                            <li>🏢 Building Maintenance</li>
                        </ul>
                    </div>

                    {/* Testing & Commissioning Card */}
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
                        <h3 className="font-bold text-2xl mb-6 flex items-center gap-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m2 0a9 9 0 11-4.5-7.9" />
                            </svg>
                            Testing & Commissioning
                        </h3>
                        <ul className="space-y-3 text-white/90">
                            <li>🛠 Start-up Testing & Equipment Commissioning</li>
                            <li>📏 Calibration of Meters & Protective Relays</li>
                            <li>🌡 Infrared Scan Thermography</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* MAINTENANCE */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold">
                            Preventive Maintenance & Servicing
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {maintenanceServices.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
                            >
                                <div className="flex items-center gap-3">
                                    <WrenchScrewdriverIcon className="h-6 w-6 text-yellow-500" />
                                    <h3 className="font-semibold">{item}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-24 text-white overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">

                    {/* SECTION HEADER */}
                    <div className="text-center mb-16">
                        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold">
                            Industrial & High Voltage Expertise
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4">
                            Proven Infrastructure & Power System Experience
                        </h2>
                        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
                    </div>

                    {/* FEATURE GRID */}
                    <div className="grid lg:grid-cols-2 gap-10">

                        {/* CARD 1 */}
                        <div className="bg-gray-800/70 backdrop-blur-lg p-10 rounded-2xl border border-gray-700 hover:border-yellow-500 transition duration-300 shadow-xl">
                            <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
                                Industrial Power & Machinery Installation
                            </h3>
                            <ul className="space-y-3 text-gray-300">
                                <li>• Complete Power & Lighting Systems for Industrial Plants</li>
                                <li>• Panel Boards, Load Centers, Cable Trays & Conduits</li>
                                <li>• PLC, Motor Controls & Instrumentation Systems</li>
                                <li>• DC Drives & Variable Frequency Controllers</li>
                                <li>• Custom Fabrication of Control Panels & Metal Enclosures</li>
                            </ul>
                        </div>

                        {/* CARD 2 */}
                        <div className="bg-gray-800/70 backdrop-blur-lg p-10 rounded-2xl border border-gray-700 hover:border-yellow-500 transition duration-300 shadow-xl">
                            <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
                                Generators & Transformer Installations
                            </h3>
                            <ul className="space-y-3 text-gray-300">
                                <li>• Diesel Generators up to <span className="text-white font-semibold">5,000 kVA</span></li>
                                <li>• Oil-Immersed Transformers up to <span className="text-white font-semibold">10,000 kVA (34.5kV)</span></li>
                                <li>• Dry-Type Transformers up to 1,000 kVA</li>
                                <li>• High & Low Voltage Switchgear</li>
                                <li>• Automatic & Manual Transfer Switches</li>
                            </ul>
                        </div>

                        {/* CARD 3 */}
                        <div className="bg-gray-800/70 backdrop-blur-lg p-10 rounded-2xl border border-gray-700 hover:border-yellow-500 transition duration-300 shadow-xl">
                            <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
                                Substation & Distribution Systems
                            </h3>
                            <ul className="space-y-3 text-gray-300">
                                <li>• Substation Installation & Commissioning</li>
                                <li>• High Voltage Cable Termination & Splicing</li>
                                <li>• Pole Erection & Line Stringing</li>
                                <li>• Load Break Switches & Lightning Arresters</li>
                                <li>• Power Capacitor Installation for PF Correction</li>
                            </ul>
                        </div>

                        {/* CARD 4 */}
                        <div className="bg-gray-800/70 backdrop-blur-lg p-10 rounded-2xl border border-gray-700 hover:border-yellow-500 transition duration-300 shadow-xl">
                            <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
                                Preventive Maintenance & Testing
                            </h3>
                            <ul className="space-y-3 text-gray-300">
                                <li>• Transformer & Switchgear Servicing</li>
                                <li>• Relay Calibration & Oil Filtering</li>
                                <li>• Earth Resistance Testing</li>
                                <li>• Oil Dielectric Breakdown Voltage Testing</li>
                                <li>• High Voltage Cable Testing</li>
                            </ul>
                        </div>

                    </div>

                    {/* BOTTOM STAT BAR */}
                    <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <h3 className="text-4xl font-bold text-yellow-400">10,000 kVA</h3>
                            <p className="text-gray-400 mt-2">Transformer Capacity Delivered</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-yellow-400">34.5 kV</h3>
                            <p className="text-gray-400 mt-2">High Voltage Systems Installed</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-yellow-400">5,000 kVA</h3>
                            <p className="text-gray-400 mt-2">Generator Installation Capability</p>
                        </div>
                    </div>

                </div>
            </section>
            {/* CTA */}
            <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Build Your Next Utility-Scale Solar Project With Confidence
                </h2>
                <p className="mb-8 max-w-2xl mx-auto">
                    Partner with an experienced EPC contractor delivering reliable,
                    scalable, and sustainable renewable energy infrastructure.
                </p>
                <Link to="/contact">
                <button className="bg-white text-yellow-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg">
                        Request Consultation
                </button>
                </Link>
            </section>

        </div>
    );
}

export default ServiceHeroTwo;
