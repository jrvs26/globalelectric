import React from "react";
import { motion } from "framer-motion";

function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-yellow-500">
      <div className="max-w-6xl mx-auto px-6 text-center text-white">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Power Up Your Projects Today
        </motion.h2>

        <p className="mt-6 text-lg text-yellow-100 max-w-2xl mx-auto">
          From residential wiring to commercial electrical solutions, our team delivers safe, reliable, and efficient service.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#/maintenance" className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition">
            Request a Quote
          </a>

          <a href="#/contact" className="border border-yellow-300 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-300 hover:text-gray-900 transition">
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
}

export default CtaSection;