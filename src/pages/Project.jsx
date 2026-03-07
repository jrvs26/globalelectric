import React from 'react'
import Navbar from '../components/Navbar'
import ProjectHero from '../components/ProjectHero'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'


function Project() {

    const { pathname } = useLocation();
    React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // use "smooth" if you want animation
    });
  }, [pathname]);

    React.useEffect(() => {
          document.title = "Projects";
        }, []);
        
    return (
        <>
            <Navbar />
            <ProjectHero />
            <Footer />
        </>
    )
}   

export default Project