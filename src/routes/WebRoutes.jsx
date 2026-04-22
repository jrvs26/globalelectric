import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Maintenance from "../pages/Maintenance";
import ErrorBoundary from "../components/ErrorBoundary";
import Services from "../pages/Services";
import Gallery from "../pages/Gallery";

// Project Components
import ProjectHeroSanIldeonfoso from "../components/ProjectHeroSanIldefonso"


// Gallery Components
import GalleryHeavyEqui from "../components/GalleyHeavyEqui";
import GalleryAlaminos from "../components/GalleryAlaminos";
import GallerySanIldefonsoOne from "../components/GallerySanIldefonsoOne";
import GalleryGigasol from "../components/GalleryGigasol";
import GalleryPavi from "../components/GalleryPavi";
import GalleryGiga from "../components/GalleryGiga";
import GallerySSPC from "../components/GallerySSPC";
import GalleryDagohoy from "../components/GalleryDagohoy";

function WebRoutes() {
  // Dynamic gallery routes
  const galleryRoutes = [
    { path: "heavy-equipments", component: GalleryHeavyEqui },
    { path: "alaminos", component: GalleryAlaminos },
    { path: "san-ildefonso", component: GallerySanIldefonsoOne },
    { path: "gigasol3", component: GalleryGigasol },
    { path: "pavi-bataan", component: GalleryPavi },
    { path: "giga-ace-8", component: GalleryGiga },
    { path: "san-manuel-pangasinan", component: GallerySSPC },
    { path: "dagohoy", component: GalleryDagohoy },
  ];

  // Dynamic project routes
  const projectRoutes = [
    
  ]

  // Routes pointing to Maintenance
  const maintenanceRoutes = [
    "products",
    "features",
    "pricing",
    "release",
    "careers",
    "press",
    "news",
    "blog",
    "docs",
    "community",
    "support",
    "projects/san-ildefonso-1",
    "projects/san-ildefonso-2",
    "projects/alaminos",
    "projects/gigasol3",
    "projects/pavi",
    "projects/gigaace8",
    "projects/sspc",
    "projects/dagohoy",
  ];

  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Project />} />
         {projectRoutes.map(({ path, component: Component }) => (
          <Route key={path} path={`/projects/${path}`} element={<Component />} />
        ))}
        <Route path="/gallery" element={<Gallery />} />
        {galleryRoutes.map(({ path, component: Component }) => (
          <Route key={path} path={`/gallery/${path}`} element={<Component />} />
        ))}
        <Route path="/contact" element={<Contact />} />
        {maintenanceRoutes.map((path) => (
          <Route key={path} path={`/${path}`} element={<Maintenance />} />
        ))}
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default WebRoutes;