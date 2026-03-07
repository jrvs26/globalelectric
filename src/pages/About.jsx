import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHero from '../components/AboutHero'
// import AboutHeroTwo from '../components/AboutHeroTwo'
import CompanyStory from '../components/CompanyStory'
import CTASection from '../components/ctaSection'
// import TeamSection from '../components/TeamSection'

function About() {
  
  React.useEffect(() => {
    document.title = "About";
  }, []);

  const { pathname } = useLocation();
    React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // use "smooth" if you want animation
    });
  }, [pathname]);
  
  return (
    <>
      <Navbar />
      <CompanyStory />
      <AboutHero />
      <CTASection />
      <Footer />
    </>
  )
}

export default About