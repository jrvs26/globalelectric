import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GalleryHero from '../components/GalleryHero';
import { useLocation } from 'react-router-dom';

function Gallery() {
    React.useEffect(() => {
      document.title = "Gallery";
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
            <div className="py-40 bg-gray-50 text-black">
                <div className="text-center mb-16">
                    <p className="text-yellow-500 tracking-widest uppercase text-md font-semibold">
                        GLOBAL ELECTRIC POWER DEVELOPMENT CORPORATION
                    </p>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase">
                        Completed Projects & Heavy Equipment
                    </h2>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
                </div>

                <div className='mx-4'><GalleryHero /></div>
            </div>
            <Footer />
        </>
    )
}

export default Gallery