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
    CheckCircleIcon,
    DocumentCheckIcon,
    ShieldExclamationIcon,
} from "@heroicons/react/24/outline";

function ServiceHeroTwo() {

    const technicalServices = [
        "Power System Analysis",
        "Relay Protection & System Integration",
        "Grounding & Lightning Protection",
        "Site Grading & Drainage Design",
        "Road & Hydrological Design",
        "Structural Foundations & Control Buildings",
        "Soil Investigation & Pull-Out Testing",
        "PVsyst Study",
        "Lightning Risk Study",
    ];

    const maintenanceServices = [
        "Transformers",
        "Substation Facilities & Equipment",
        "Switchgear & Motor Control Centers (High/Low Voltage)",
        "Automatic & Manual Transfer Switch",
    ];

    const projectMethodology = [
        "Project Planning & Engineering",
        "Procurement & Logistics",
        "Construction & Installation",
        "Testing & Commissioning",
        "Project Turnover",
    ];

    const safetyCommitment = [
        "Protect workforce and enforce safe work practices",
        "Ensure environmental responsibility",
        "Continuous safety improvement for accident-free projects",
    ];

    const qualityAssurance = [
        "Engineering compliance verification",
        "Material inspection and testing",
        "Installation quality monitoring and documentation",
    ];

    const whyChooseUs = [
        "Proven solar EPC experience",
        "Experienced engineering leadership",
        "Reliable project execution",
        "Strong safety culture",
        "Trusted renewable energy partner",
    ];

    return (
        <div className="bg-gray-50 text-gray-800">

            {/* ORIGINAL HERO SECTION */}
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
                            <h3 className="text-3xl font-bold text-yellow-400">620MW+</h3>
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

            {/* ORIGINAL EPC OVERVIEW */}
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
                        <ul className="mt-3 text-gray-600 space-y-1">
                            <li>• Relay Protection & System Integration</li>
                            <li>• Grounding & Lightning Protection</li>
                            <li>• Roads & Hydrological Studies</li>
                            <li>• Control Buildings</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
                        <BuildingOfficeIcon className="h-10 w-10 text-yellow-500 mb-4" />
                        <h3 className="font-semibold text-xl mb-3">Procurement</h3>
                        <p className="text-gray-600">
                            Strategic sourcing of high-quality solar modules, inverters,
                            transformers, and grid infrastructure.
                        </p>
                        <ul className="mt-3 text-gray-600 space-y-1">
                            <li>• Supply Chain Management</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
                        <ShieldCheckIcon className="h-10 w-10 text-yellow-500 mb-4" />
                        <h3 className="font-semibold text-xl mb-3">Construction & O&M</h3>
                        <p className="text-gray-600">
                            Full construction execution, commissioning, and long-term
                            operation & maintenance services.
                        </p>
                        <ul className="mt-3 text-gray-600 space-y-1">
                            <li>• Civil Works: Roads, Drainage, Fences, Control Buildings</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ORIGINAL TECHNICAL EXPERTISE */}
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

            {/* ORIGINAL PROJECT MANAGEMENT */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <ChartBarIcon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-6">Project Management</h2>
                    <p className="max-w-3xl mx-auto text-gray-700">
                        Comprehensive planning, budgeting, scheduling, risk assessment,
                        procurement coordination, quality control, and stakeholder
                        reporting throughout the entire project lifecycle.
                    </p>

                    {/* PROJECT EXECUTION METHODOLOGY */}
                    <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-5 gap-4 text-left">
                        {projectMethodology.map((step, i) => (
                            <div key={i} className="bg-white p-4 rounded-xl shadow text-gray-800 font-semibold text-sm text-center hover:shadow-lg transition">
                                {i + 1}. {step}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ORIGINAL INSTALLATION & COMMISSIONING */}
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

            {/* ORIGINAL MAINTENANCE */}
            <section className="bg-gray-50 py-10">
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

            {/* SAFETY & QUALITY */}
            <section className="py-20 container mx-auto px-6 bg-gray-50">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-6">Safety Commitment & Quality Assurance</h2>
                    <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
                            <h3 className="font-semibold text-xl mb-4 flex items-center gap-2"><ShieldExclamationIcon className="h-6 w-6 text-yellow-500" /> Safety Commitment</h3>
                            <ul className="space-y-2 text-gray-700 text-start">
                                {safetyCommitment.map((item,i)=> <li key={i}>• {item}</li>)}
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
                            <h3 className="font-semibold text-xl mb-4 flex items-center gap-2"><DocumentCheckIcon className="h-6 w-6 text-yellow-500" /> Quality Assurance</h3>
                            <ul className="space-y-2 text-gray-700 text-start">
                                {qualityAssurance.map((item,i)=> <li key={i}>• {item}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-10 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {whyChooseUs.map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex items-center gap-3">
                                <CheckCircleIcon className="h-6 w-6 text-yellow-500" />
                                <p className="text-gray-700 font-semibold">{item}</p>
                            </div>
                        ))}
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