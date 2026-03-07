import React from "react";
import alaminos from "../assets/alaminos.JPG";
import SanIldefonso from "../assets/san-ildefonso.jpg"
import SanIldefonso2 from "../assets/san-ildefonso2.png"
import gigasol from "../assets/gigasol.jpg"
import pavi from "../assets/pavi.png"
import giga8 from "../assets/giga8.JPG"
import sspc from "../assets/sspc.jpg"
import dspp from "../assets/dspp.jpg"
import { Link } from "react-router-dom";

const projectCards = [
  {
    link: "/projects/san-ildefonso-1",
    title: "San Ildefonso Solar Farm 15MWp",
    imgSrc: SanIldefonso,
    badge: "Done",
    description:
      "2015 - 15MWp Bulacan Solar Farm Project in San Ildefonso Bulacan (Bulacan Solar Energy Corp. / JV of Armstrong Asset Management/Cleantech Global Renewables Inc. Previously Owned) (Citicore Solar Bulacan, Inc. / Citicore Renewable Energy Corporation Owned Now) - Electro-Mech Subcon",
  },
  {
    link: "/projects/san-ildefonso-2",
    title: "San Ildefonso Solar Farm 22MWp",
    imgSrc: SanIldefonso2,
    badge: "Done",
    description:
      "2019 - 22MWp San Ildefonso Solar Farm Project in San Ildefonso Bulacan (San Ildefonso Alternative Energy Corp./ Cleantech Global Renewables Inc. Owned) - Onshore EPC",
  },
  {
    link: "/projects/alaminos",
    title: "Alaminos Laguna Solar Farm 120MWp",
    imgSrc: alaminos,
    badge: "Done",
    description:
      "2020 - 120MWp Solarace1 Solar Farm Project, Alaminos Laguna as 50/50 JV Partner (SolarAce1 Energy Corp. / AC Energy Owned - An AYALA Company) - Onshore EPC",
  },
  {
    link: "/projects/gigasol3",
    title: "Palauig Zambales Solar Farm 63MWp",
    imgSrc: gigasol,
    badge: "Done",
    description:
      "2020 - 63MWp Gigasol3 Solar Farm Project, Palauig Zambales as 50/50 JV Partner (Gigasol3, Inc. / AC Energy Owned - An AYALA Company) - Onshore EPC",
  },
  {
    link: "/projects/pavi",
    title: "Pavi Bataan Solar Farm 20MWp",
    imgSrc: pavi,
    badge: "Done",
    description:
      "2021 - 20MWp PAVI Solar Farm Project in Orion Bataan, (PAVI Green Bataan Renewable Energy Inc. Owned) - Semi Full EPC (OSM the Module, Inverter, Mounting Structure and String Cable). All Civil, Electrical and Mechanical Design are part of GLOBAL ELECTRIC including PR in PVsysts Analysis. All PV Plant Pv and Mounting layout and shading analysis in slope terrain are all Global Electric Power study.",
  },
  {
    link: "/projects/gigaace8",
    title: "Giga Ace 8 Palauig Zambales Solar Farm 300MWp",
    imgSrc: giga8,
    badge: "On going",
    description:
      "2023 - 300MWp GigaAce8 Solar Farm Project, Palauig Zambales (Giga Ace 8, Inc. / AC Energy Owned - An AYALA Company) - Onshore EPC",
  },
  {
    link: "/projects/sspc",
    title: "San Manuel Pangasinan Sinocalan Solar Farm 59.8MWp",
    imgSrc: sspc,
    badge: "Done",
    description:
      "2023 - 59.8MWp Sinocalan Solar Farm Project, San Manuel Pangasinan (Sinocalan Solar Power Corp. / AC Energy Owned - An AYALA Company) - Onshore EPC",
  },
  {
    link: "/projects/dagohoy",
    title: "Dagohoy Bohol Solar Farm 27MWp",
    imgSrc: dspp,
    badge: "Done",
    description:
      "2024 - 27MWp Dagohoy Solar Farm Project, Dagohoy Bohol - (Dagohoy Green Energy Corporation / Petrogreen Energy Corporation Owned - a Yuchengco led company) - Onshore EPC",
  },
];

function ProjectHero() {
    return (
        <section className="pt-32 py-16 bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center px-4">

            {/* Heading */}
            <div className="text-center max-w-2xl mb-12 px-4">
                <h2 className="text-4xl font-bold text-yellow-500 tracking-wide">
                    Projects
                </h2>

                {/* Yellow underline accent (energy theme) */}
                <div className="w-24 h-1 bg-yellow-400 mx-auto mt-3 mb-4 rounded"></div>

                <p className="text-gray-600 text-lg">
                    These are the company’s completed and ongoing projects in renewable energy and solar farm development.
                </p>
            </div>

            {/* Cards */}
            <div className="flex justify-center gap-10 flex-wrap md:mx-4">
                {projectCards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 max-w-md border border-default border-gray-300 rounded-xl shadow-sm"
                    >
                        <img
                            className="rounded-t-xl h-[350px]"
                            src={card.imgSrc}
                            alt={card.title}
                        />

                        <div className="p-6 text-center">
                            <span className="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm mb-2">
                                <svg
                                    className="text-green-500 w-auto h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                                {card.badge}
                            </span>

                            <h5 className="mt-3 mb-2 text-2xl font-semibold tracking-tight text-heading">
                                {card.title}
                            </h5>

                            <p className="mb-4 text-gray-600">
                                {card.description}
                            </p>

                            <Link
                                to={card.link}
                                className="inline-flex items-center text-black bg-yellow-500 hover:bg-yellow-600 shadow-xs font-medium rounded-base text-sm px-4 py-2.5"
                            >
                                Read more
                                <svg
                                    className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 12H5m14 0-4 4m4-4-4-4"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectHero;