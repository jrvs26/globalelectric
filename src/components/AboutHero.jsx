import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaBolt, FaSolarPanel, FaShieldAlt, FaUsers, FaQuoteLeft  } from "react-icons/fa";

const coreValues = [
  { title: "Integrity", desc: "Honesty, transparency, and ethical responsibility.", icon: <FaShieldAlt className="text-3xl text-red-500" /> },
  { title: "Excellence", desc: "Deliver superior quality in engineering and project execution.", icon: <FaBolt className="text-3xl text-yellow-500" /> },
  { title: "Innovation", desc: "Embrace modern technologies and forward-thinking solutions.", icon: <FaSolarPanel className="text-3xl text-green-500" /> },
  { title: "Safety", desc: "Prioritize health and safety of employees and communities.", icon: <FaUsers className="text-3xl text-indigo-500" /> },
  { title: "Commitment", desc: "Deliver projects on time, within budget, beyond expectations.", icon: <FaGlobe className="text-3xl text-blue-500" /> },
];

const epcHighlights = [
  { title: "Engineering Experience", desc: "29+ Years of engineering expertise.", icon: <FaBolt className="text-3xl text-yellow-500" /> },
  { title: "Solar EPC Participation", desc: "100+ MW utility-scale solar projects.", icon: <FaSolarPanel className="text-3xl text-green-500" /> },
  { title: "Full EPC Capability", desc: "From design, procurement, construction to commissioning.", icon: <FaShieldAlt className="text-3xl text-red-500" /> },
];

function AboutUs() {
  return (
    <section className="bg-gray-50 relative py-20 px-6 lg:px-16">
      {/* Hero Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About Global Electric Power Development Corporation
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          GEPDC is a Philippine-based Engineering, Procurement, and Construction (EPC) company specializing in renewable energy infrastructure and electrical power systems. We deliver safe, reliable, and innovative solutions for utility-scale solar farms and electrical projects nationwide.
        </p>
      </motion.div>

      {/* Vision & Mission Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-blue-500"
        >
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600">To become one of the leading EPC companies in the Philippines, recognized for excellence in renewable energy and sustainable power development.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-yellow-500"
        >
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">Deliver high-quality, reliable, and innovative EPC solutions supporting renewable energy and infrastructure development in the Philippines.</p>
        </motion.div>
      </div>

      {/* Core Values */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-5 gap-8">
          {coreValues.map((value, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-white rounded-3xl p-6 text-center shadow-md hover:shadow-yellow-300/30 transition-all"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="font-bold text-lg mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* EPC Expertise & Track Record */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">EPC Expertise & Track Record</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {epcHighlights.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-green-500 transition-all"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Founder Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center bg-white p-12 rounded-3xl shadow-lg border-l-4 border-indigo-500"
      >
        <FaQuoteLeft className="text-3xl text-indigo-500 mb-4 mx-auto" />
        <p className="text-gray-700 italic mb-4">
          "The development of renewable energy infrastructure is essential to securing the future of our country. Through engineering excellence and collaboration, we aim to contribute to building a sustainable energy landscape for generations to come."
        </p>
        <h3 className="text-lg font-bold text-gray-900">Engr. Jojo Tobias – Founder & CEO</h3>
      </motion.div>
    </section>
  );
}

export default AboutUs;