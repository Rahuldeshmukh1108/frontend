'use client'

import dynamic from 'next/dynamic'

// Static imports (safe for SSR)
import Navbar from "@/components/user/navbar"
import AboutSection from "@/components/user/about-section"
import OwnerSection from "@/components/user/owner-section"
import LocationSection from "@/components/user/location-section"
import Footer from "@/components/user/footer"

// Dynamic imports (DOM/animation/iframe heavy or hydration-unsafe)
const HeroSection = dynamic(() => import("@/components/user/hero-section"), { ssr: false })
const VirtualTourSection = dynamic(() => import("@/components/user/virtual-tour-section"), { ssr: false })
const GallerySection = dynamic(() => import("@/components/user/gallery-section"), { ssr: false })
const DirectorySection = dynamic(() => import("@/components/user/directory-section"), { ssr: false }) // <--- FIXED

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
