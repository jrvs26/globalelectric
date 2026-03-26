import React from "react";
import {
  BoltIcon,
  WrenchScrewdriverIcon,
  SunIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"

const services = [
  {
    title: "Residential Electrical Services",
    description:
      "Complete home wiring, panel upgrades, lighting installations, EV chargers, and troubleshooting services.",
    icon: BoltIcon,
  },
  {
    title: "Commercial Electrical",
    description:
      "Electrical design, installation, maintenance, and energy-efficient upgrades for offices and retail spaces.",
    icon: BuildingOffice2Icon,
  },
  {
    title: "Electrical Repairs & Maintenance",
    description:
      "Fast diagnostics, emergency repairs, circuit breaker replacement, and preventive maintenance solutions.",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "Solar Farm Construction",
    description:
      "Design and installation of large-scale solar farms, ground-mounted solar systems, grid integration, and renewable energy infrastructure solutions.",
    icon: SunIcon,
  },
];

function ServiceHero() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}


        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our <span className="text-yellow-500">Services</span>
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
                >
                  <service.icon className="h-12 w-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-yellow-500">
                  Licensed & Insured
                </h4>
                <p className="text-gray-600">
                  Fully certified electricians ensuring safety and compliance.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-yellow-500">
                  24/7 Emergency Service
                </h4>
                <p className="text-gray-600">
                  Available around the clock for urgent electrical issues.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-yellow-500">
                  Satisfaction Guaranteed
                </h4>
                <p className="text-gray-600">
                  We stand behind our work with quality assurance and support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-yellow-500 py-16 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Professional Electrical Help?
          </h2>
          <p className="mb-6">
            Contact us today for reliable and affordable electrical services.
          </p>
          <Link to="/contact">
              <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Call Now
          </button>
          </Link>
        </section>
      </div>
    </>
  );
}

export default ServiceHero;
