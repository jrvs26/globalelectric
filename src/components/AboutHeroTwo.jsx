import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/aboutImg.jpg"
const stats = [
  { value: "8+", label: "Projects Completed" },
  { value: "5+", label: "Satisfied Clients" },
  { value: "15+", label: "Years Experience" },
];

function AboutSection() {
  return (
    <section className="relative min-h-[100vh] bg-gray-50 pt-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-yellow-500 font-semibold uppercase tracking-wide">
              About Us
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Trusted Electrical Contractors Delivering Safe & Efficient Solutions
            </h2>

            <p className="mt-6 text-lg text-gray-700">
              We are a team of certified electricians with years of experience in 
              residential, commercial, and industrial electrical projects. Safety, 
              quality, and customer satisfaction are at the heart of everything we do.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, i) => (
                <div key={i}>
                  <h3 className="text-2xl font-bold text-yellow-500">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={aboutImg}
                alt="Electrical work team"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Decorative gradient */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-60"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;