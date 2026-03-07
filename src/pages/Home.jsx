import React from 'react'
import Navbar from '../components/Navbar'
import WelcomeHero from '../components/WelcomeHero'
import Footer from '../components/Footer'
import AboutHero from '../components/AboutHero'
import TopClients from '../components/ClientsSection'
import ContactHero from '../components/ContactHero'
import CompanyStory from '../components/CompanyStory'
import ServiceHero from '../components/ServiceHero'
import { useLocation } from 'react-router-dom'



function Home() {

    React.useEffect(() => {
        document.title = "Global Electric Power Devt Corp";
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
            <WelcomeHero />
            <CompanyStory />
            <AboutHero />
            <ServiceHero />
            <TopClients />
            <ContactHero />
            <Footer />
        </>
    )
}

export default Home