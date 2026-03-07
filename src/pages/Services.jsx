import React from 'react'
import Navbar from "../components/Navbar"
import ServiceHeroTwo from '../components/ServiceHeroTwo'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'

function Services() {

  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // use "smooth" if you want animation
    });
  }, [pathname]);

  React.useEffect(() => {
    document.title = "Services";
  }, []);

  return (
    <>
      <Navbar />
      <ServiceHeroTwo />
      <Footer />
    </>
  )
}

export default Services