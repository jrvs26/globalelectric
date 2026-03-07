import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaSolarPanel, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaSolarPanel className="text-4xl text-yellow-500 drop-shadow-md" />,
    title: "Solar Farm Experts",
    desc: "Leading provider of large-scale solar energy solutions with maximum efficiency.",
  },
  {
    icon: <FaBolt className="text-4xl text-indigo-500 drop-shadow-md" />,
    title: "Powerful Electrical Services",
    desc: "Certified electricians delivering reliable installations for homes, businesses, and solar farms.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-red-500 drop-shadow-md" />,
    title: "Safe & Compliant",
    desc: "We follow strict safety protocols and electrical codes on every project, including solar farms.",
  },
];

function RightSideLightning() {
  return (
    <svg
      className="absolute top-0 right-0 w-12 h-full pointer-events-none z-0"
      viewBox="0 0 50 200"
      preserveAspectRatio="none"
    >
      {/* Main jagged lightning */}
      <motion.path
        d="M25 0 L20 40 L35 70 L20 120 L30 160 L25 200"
        stroke="#FACC15"
        strokeWidth="2"
        fill="transparent"
        strokeLinecap="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      />
      {/* Secondary lightning branch */}
      <motion.path
        d="M30 0 L25 50 L40 80 L25 130 L35 180 L30 200"
        stroke="#FBBF24"
        strokeWidth="1.5"
        fill="transparent"
        strokeLinecap="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.4 }}
      />
    </svg>
  );
}

function AboutHero() {
  return (
    <section className="pt-20 relative min-h-[80vh] bg-gray-50 pb-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Dominating Solar Energy & Electrical Solutions
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            From residential wiring to large-scale solar farms, our team delivers safe, efficient, and sustainable electrical solutions.
            We’re leading the charge in renewable energy installations.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-10 mt-16 md:mb-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.05 }}
              className="relative bg-white rounded-3xl p-8 text-center border-l-4 border-yellow-500 shadow-lg hover:shadow-yellow-300/40 transition-all duration-500 overflow-hidden"
            >
              {/* Right-side Lightning */}
              <RightSideLightning />

              {/* Icon with subtle glow */}
              <div className="flex justify-center mb-5 relative z-10">
                <div className="p-4 rounded-full bg-gray-100 border border-yellow-500 shadow-md animate-pulse">
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10">
                {feature.title}
              </h3>

              <p className="text-gray-600 relative z-10">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AboutHero;