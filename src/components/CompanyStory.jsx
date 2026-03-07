import React from "react";
import { Timeline } from "../ui/timeline";
import office from "../assets/office.jpg"
import office2 from "../assets/office2.jpg"
import office3 from "../assets/office3.jpg"
import office4 from "../assets/office4.jpg"
import alaminos from "../assets/alaminos.JPG";
import SanIldefonso from "../assets/san-ildefonso.jpg"
import SanIldefonso2 from "../assets/san-ildefonso2.png"
import gigasol from "../assets/gigasol.jpg"
import pavi from "../assets/pavi.png"
import giga8 from "../assets/giga8.JPG"
import sspc from "../assets/sspc.jpg"
import dspp from "../assets/dspp.jpg"

export default function CompanyStory() {
  const data = [
    {
      title: "2012",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm">
            was established in the Year 2012, as an Electrical Contractor. With our hard work and commitment, our organization is one of the leading Electrical Contractor service providers.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={office}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={office2}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={office3}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={office4}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2015",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm">
            Starting in 2015, Global Electric has been entrusted with the development and execution of numerous solar farm projects across the Philippines. Over the years, the company has expanded its expertise in onshore EPC, semi-full EPC, and complete photovoltaic system design, engineering, and construction. From early projects to large-scale developments, Global Electric has consistently delivered high-quality solar infrastructure, including plant layout, shading analysis, civil, electrical, and mechanical design, and PVsyst performance studies. This long-standing track record demonstrates the company’s commitment to advancing renewable energy and supporting the country’s transition to sustainable power generation.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={SanIldefonso}
              alt="SAN ILDEFONSO"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={SanIldefonso2}
              alt="SAN ILDEFONSO"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={alaminos}
              alt="ALAMINOS LAGUNA"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={gigasol}
              alt="PALAUIG ZAMBALES"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm">
            May 2022, Global Electric applied for General Engineering to SEC and PCAB, and fortunately, we got the approval.
          </p>
        </div>
      ),
    },
    {
      title: "Present",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm">
            Global Electric successfully completed multiple utility-scale solar EPC projects in the Philippines from 2020 to 2024, demonstrating strong technical capability in design, engineering, and construction of large photovoltaic plants. In 2020, Global Electric delivered the 120 MWp SolarAce1 Solar Farm in Alaminos and the 63 MWp Gigasol3 Solar Farm in Palauig as a 50/50 JV Onshore EPC partner with projects owned by AC Energy, part of Ayala Corporation. In 2021, Global Electric completed the 20 MWp PAVI Solar Farm in Orion for PAVI Green Bataan Renewable Energy Inc. under a Semi-Full EPC scope covering civil, electrical, and mechanical design, PVsyst analysis, and detailed plant layout for sloped terrain. In 2023, the company executed the 300 MWp GigaAce8 Solar Farm (Palauig, Zambales) and the 59.8 MWp Sinocalan Solar Farm in San Manuel, both under Onshore EPC scope for AC Energy-owned developers. Most recently in 2024, Global Electric completed the 27 MWp Dagohoy Solar Farm in Dagohoy for Petrogreen Energy Corporation, a member of the Yuchengco Group, further strengthening its track record in delivering reliable large-scale solar infrastructure across the country.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={pavi}
              alt="PAVI BATAAN"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={giga8}
              alt="PALAUIG ZAMBALES"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={sspc}
              alt="SAN MANUEL PANGASINAN"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={dspp}
              alt="DAGOHOY BOHOL"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative pt-10 w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}