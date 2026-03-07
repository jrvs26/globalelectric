import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom' // kung gamit ka ng react-router
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MaintenancePage from '../components/MaintenanceHero'

function Maintenance() {

  const { pathname } = useLocation();
    React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // use "smooth" if you want animation
    });
  }, [pathname]);

  React.useEffect(() => {
        document.title = "Maintenance";
      }, []);

  const navigate = useNavigate()
  const previousURL = document.referrer || '/' // babalik sa previous URL o sa home kung wala

  useEffect(() => {
    const interval = setInterval(() => {
      // babalik sa dati niyang URL
      window.location.href = previousURL
      // o kung gusto mo gamit ang react-router
      // navigate(previousURL)
    }, 10000) // 10 seconds

    return () => clearInterval(interval) // cleanup
  }, [previousURL])

  return (
    <>
      <Navbar />
      <MaintenancePage />
      <Footer />
    </>
  )
}

export default Maintenance