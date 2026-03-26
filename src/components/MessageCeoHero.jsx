import React from "react";
import test from "../assets/ceo.jpg";
function MessageCeoHero() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto justify-center items-center">
          {/* Title */}

          {/* CEO Image */}
          <div className="flex justify-center md:justify-center">
            <img
              src={test}
              alt="CEO"
              className="w-72 h-72 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Message Content */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-14">
            <p className="text-black text-lg leading-relaxed text-center mb-4">
              At Global Electric Power Development Corporation, we are committed
              to powering communities and supporting the transition toward a
              sustainable energy future through excellence in engineering,
              procurement, and construction.
            </p>

            <p className="text-yellow-500 uppercase tracking-[0.25em] text-sm font-semibold mb-3">
              Leadership Message
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              A Message from the CEO
            </h2>

            <div className="w-20 h-[3px] bg-yellow-500 mx-auto mt-6"></div>
          </div>

          {/* Message Content */}
          <div className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed space-y-6">
            <p>
              As the demand for renewable energy continues to grow, our company
              has positioned itself at the forefront of utility-scale solar EPC
              development in the Philippines. Through dedication, technical
              excellence, and strong collaboration with our partners, we have
              contributed to the construction of solar power plants that support
              the country’s clean energy goals.
            </p>

            {/* Highlight Quote */}
            <blockquote className="border-l-4 border-yellow-500 pl-6 italic text-gray-800 text-xl my-10">
              “Engineering is not only about building infrastructure—it is about
              building trust, creating long-term partnerships, and delivering
              solutions that stand the test of time.”
            </blockquote>

            <p>
              Our team of engineers, technicians, and professionals continuously
              strive for innovation, safety, and operational excellence in every
              project we undertake.
            </p>

            <p>
              As we look toward the future, we remain committed to supporting
              the Philippines’ energy transition by delivering world-class EPC
              services that help accelerate the development of renewable energy
              infrastructure.
            </p>

            <p>
              We thank our partners, clients, and stakeholders for their
              continued trust and support. Together, we are building a brighter
              and more sustainable future.
            </p>

            {/* Signature */}
            <div className="pt-12 border-t mt-10">
              <p className="text-xl font-semibold text-gray-900">
                Engr. Jojo Tobias
              </p>

              <p className="text-gray-600">
                President &amp; Chief Executive Officer
              </p>

              <p className="text-gray-500 text-sm mt-1">
                Global Electric Power Development Corporation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MessageCeoHero;
