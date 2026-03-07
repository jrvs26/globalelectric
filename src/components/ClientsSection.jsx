import React from "react";
import acen from "../assets/acen.png";
import petrogreen from "../assets/petrogreen.png";
import meralco from "../assets/meralco.png";
import cleantech from "../assets/cleanteach.png";
import pavigreen from "../assets/pavigreen.png";
import cmpancho from "../assets/CMPanchoLogo.png";


const clients = [
  {
    name: "ACEN",
    url: "https://www.acenrenewables.com/",
    Logo: acen, // This is an image path
  },
  {
    name: "PETRO GREEN",
    url: "https://petroenergy.com.ph/",
    Logo: petrogreen, // This is an image path
  },
  {
    name: "MERALCO",
    url: "https://company.meralco.com.ph/",
    Logo: meralco, // This is an image path
  },
  {
    name: "CleanTech",
    url: "https://www.cleantech.ph/",
    Logo: cleantech, // This is an image path
  },
  {
    name: "PAVI GREEN",
    url: "https://pavigreen.com.ph/",
    Logo: pavigreen, // This is an image path
  },
  {
    name: "CM PANCHO",
    url: "https://cmpancho.com/",
    Logo: cmpancho, // This is an image path
  },
];

export default function ClientsSection() {
  return (
    <section className="bg-gray-50 px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto">
      <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center">
        <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-foreground">
          Trusted by the following <span className="text-yellow-500 font-semibold">Clients</span>
        </h2>
      </div>

      <div
        className={`
      py-8 md:py-16
      flex flex-wrap items-center justify-center
      gap-1 sm:gap-2 md:gap-4
    `}
      >
        {clients.map((client, idx) => (
          <a
            key={idx}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={client.name}
            className="shrink-0 transition-transform transform hover:-translate-y-1 duration-300 ease-in-out mx-10"
          >
            <img
              src={client.Logo}
              alt={client.name}
              className="w-16 sm:w-20 md:w-24 h-auto transition-transform transform hover:-translate-y-1 duration-300 ease-in-out"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
