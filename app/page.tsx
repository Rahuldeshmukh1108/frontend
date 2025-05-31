import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import DirectorySection from "@/components/directory-section"
import AboutSection from "@/components/about-section"
import OwnerSection from "@/components/owner-section"
import LocationSection from "@/components/location-section"
import VirtualTourSection from "@/components/virtual-tour-section"
import GallerySection from "@/components/gallery-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <DirectorySection />
      <AboutSection />
      <OwnerSection />
      <LocationSection />
      <VirtualTourSection />
      <GallerySection />
      <Footer />
    </div>
  )
}
