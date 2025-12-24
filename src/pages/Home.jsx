import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyUs from "./WhyUs";
import Models from "./Models";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Footer from "../components/Footer";
import GalleryPreview from "./GalleryPreview";
import GalleryFull from "./GalleryFull";

export default function Home() {
  const [showFullGallery, setShowFullGallery] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <Models /> {/* ✅ FIX */}
      <Blogs />
      {showFullGallery ? (
        <GalleryFull />
      ) : (
        <GalleryPreview onSeeMore={() => setShowFullGallery(true)} />
      )}
      <Contact />
      <Footer />
    </>
  );
}
