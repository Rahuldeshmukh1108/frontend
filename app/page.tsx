import Navbar from "@/components/user/navbar"
import HeroSection from "@/components/user/hero-section"
import DirectorySection from "@/components/user/directory-section"
import AboutSection from "@/components/user/about-section"
import OwnerSection from "@/components/user/owner-section"
import LocationSection from "@/components/user/location-section"
import VirtualTourSection from "@/components/user/virtual-tour-section"
import GallerySection from "@/components/user/gallery-section"
import Footer from "@/components/user/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <DirectorySection />
      <AboutSection />
      <OwnerSection />
      <VirtualTourSection />
      <LocationSection />
      <GallerySection />
      <Footer />
    </div>
  )
}
