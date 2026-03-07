import React from 'react'
import { FocusCards } from "../ui/focus-card.jsx";
import alaminos from "../assets/alaminos.JPG";
import SanIldefonso from "../assets/san-ildefonso.jpg"
import gigasol from "../assets/gigasol.jpg"
import pavi from "../assets/pavi.png"
import giga8 from "../assets/giga8.JPG"
import sspc from "../assets/sspc.jpg"
import dspp from "../assets/dspp.jpg"
import heavyequ from "../assets/heavyequ.jpeg"

function GalleryHero() {


   const cards = [
  {
    title: "Alaminos Solar Farm",
    src: alaminos,
    href: "/gallery/alaminos",
  },
  {
    title: "San Ildefonso Solar Farm 15Mwp and 22MWp",
    src: SanIldefonso,
    href: "/gallery/san-ildefonso",
  },

  {
    title: "Gigasol3 Solar Farm",
    src: gigasol,
    href: "/gallery/gigasol3",
  },
  {
    title: "Pavi Bataan Solar Farm",
    src: pavi,
    href: "/gallery/pavi-bataan",
  },
  {
    title: "Giga Ace 8 Solar Farm",
    src: giga8,
    href: "/gallery/giga-ace-8",
  },
  {
    title: "San Manuel Pangasinan Solar Farm",
    src: sspc,
    href: "/gallery/san-manuel-pangasinan",
  },
  {
    title: "Dagohoy Solar Farm",
    src: dspp,
    href: "/gallery/dagohoy",
  },
  {
    title: "Heavy Equipments",
    src: heavyequ,
    href: "/gallery/heavy-equipments",
  },
];

  return (
    <FocusCards cards={cards} />
  )
}

export default GalleryHero