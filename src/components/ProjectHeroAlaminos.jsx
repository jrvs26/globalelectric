import React from "react";
import { motion } from "framer-motion";
import { Sun, Zap, ShieldCheck, Cable, Factory, Trophy } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate, useLocation } from "react-router-dom";
import alaminos1 from "../assets/alaminos/alaminos (12).JPG";
import alaminos2 from "../assets/alaminos/alaminos (2).JPG";
import alaminos3 from "../assets/alaminos/alaminos (3).JPG";
import alaminos4 from "../assets/alaminos/alaminos (4).JPG";

function ProjectHeroAlaminos() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);
  return (
    <>
      <Navbar />
      <section className="w-full bg-gradient-to-br from-black via-slate-950 to-slate-900 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* HERO HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Trophy className="text-yellow-400" size={36} />
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                120 MWp SolarAce1 Solar Farm Project
              </h1>
            </div>

            <p className="text-cyan-400 text-xl md:text-2xl font-semibold tracking-wide">
              Alaminos, Laguna
            </p>

            <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
              The Alaminos Solar facility is located within Ayala Land’s Carbon
              Forest, a protected woodland area that helps absorb carbon and
              supports local biodiversity. Inside the solar farm, a plastic
              recycling system was also set up, where construction-site plastic
              waste was collected and converted into eco-bricks, which were then
              used as building materials for parts of the solar installation.
            </p>
          </motion.div>

          {/* PROJECT INFO SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-5 gap-4 mb-14 text-center"
          >
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-gray-400 text-sm">Location</p>
              <p className="text-white font-semibold">Alaminos, Laguna</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-gray-400 text-sm">Owner</p>
              <p className="text-white font-semibold">AC Energy</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-gray-400 text-sm">Start Date</p>
              <p className="text-white font-semibold">October 2019</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-gray-400 text-sm">Completion Date</p>
              <p className="text-white font-semibold">July 2021</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-gray-400 text-sm">Status</p>
              <p className="text-green-400 font-semibold">Completed</p>
            </div>
          </motion.div>

          {/* MAIN GRID */}
          <div className="grid md:grid-cols-3 gap-10 items-start">
            {/* LEFT SECTION */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="md:col-span-2 space-y-6"
            >
              {/* IMAGE GRID */}
              <div className="grid grid-cols-2 gap-4">
                {[alaminos1, alaminos2, alaminos3, alaminos4].map((img, i) => (
                  <motion.img
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    src={img}
                    className="h-44 w-full object-cover rounded-2xl"
                  />
                ))}
              </div>

              <button
                onClick={() => navigate("/gallery/alaminos")}
                className="px-6 py-3 font-semibold text-yellow-400 bg-gray-800 rounded-lg hover:bg-yellow-400 hover:text-black transition"
              >
                View More ⚡
              </button>

              {/* SCOPE */}
              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-300/5 p-8 rounded-3xl border border-yellow-400/30 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Sun className="text-yellow-400" size={28} />
                  <h2 className="text-3xl font-bold text-yellow-400">
                    Scope of Works
                  </h2>
                </div>

                <div className="text-gray-200 text-lg space-y-6">
                  {/* Core Engineering Scope */}
                  <div>
                    <h3 className="text-yellow-400 font-semibold mb-2">
                      Engineering & Design
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      <li className="flex items-start gap-3">Design</li>
                      <li className="flex items-start gap-3">
                        Civil / Structural / Architectural
                      </li>
                      <li className="flex items-start gap-3">
                        Electrical Engineering
                      </li>
                      <li className="flex items-start gap-3">
                        Land Development
                      </li>
                    </ul>
                  </div>

                  {/* Electrical & Systems Works */}
                  <div>
                    <h3 className="text-yellow-400 font-semibold mb-2">
                      Electrical & Electro-Mechanical Works
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      <li className="flex items-start gap-3">
                        PV Electro-Mechanical Works
                      </li>
                      <li className="flex items-start gap-3">
                        MV and DC System Installation
                      </li>
                      <li className="flex items-start gap-3">
                        Civil / Structural Works
                      </li>
                      <li className="flex items-start gap-3">
                        Substation Works
                      </li>
                    </ul>
                  </div>

                  {/* Utility & Infrastructure */}
                  <div>
                    <h3 className="text-yellow-400 font-semibold mb-2">
                      Infrastructure & Utilities
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      <li className="flex items-start gap-3">
                        NGCP Switching Station
                      </li>
                      <li className="flex items-start gap-3">
                        Testing and Commissioning
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SECTION */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-br from-cyan-500/10 to-cyan-300/5 p-8 rounded-3xl border border-cyan-400/30 shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-cyan-400 mb-8">
                Project Structure
              </h2>

              <ul className="space-y-6 text-lg text-gray-200">
                <li className="flex gap-3">
                  <span className="text-green-400 text-xl">✔</span>
                  EPC & Construction Structure
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 text-xl">✔</span>
                  Electrical & Grid Architecture
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 text-xl">✔</span>
                  Environmental & Auxiliary Project Structure
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 text-xl">✔</span>
                  Hybrid & Adjacent Systems
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 text-xl">✔</span>
                  Technical Project Configuration
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 text-xl">✔</span>
                  Development & permitting
                </li>
              </ul>

              <div className="mt-10 p-4 bg-black/40 rounded-xl border border-cyan-500/20 text-center">
                <p className="text-sm text-gray-400">Project Capacity</p>
                <p className="text-2xl font-bold text-cyan-300">
                  120 MWp Solar Output
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProjectHeroAlaminos;
