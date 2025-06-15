"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Award, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const heroImages = [
  {
    desktop: "/images/main.jpg?height=800&width=1200",
    mobile: "/images/mobbg.jpg",
    title: "LNCT",
    subtitle: "Shaping Future Leaders",
    description: "Discover world-class education at LNCT Group",
  },
  {
    desktop: "/images/newjnct.jpg?height=600&width=1200",
    mobile: "/images/mobbg.jpg",
    title: "JNCT",
    subtitle: "Cutting-edge Technology",
    description: "Leading research and innovation in Central India",
  },
  {
    desktop: "/images/uni2.jpg?height=800&width=1200",
    mobile: "/images/mobbg.jpg",
    title: "LNCT UNIVERSITY",
    subtitle: "International Exposure",
    description: "95% placement rate with top companies",
  },
  {
    desktop: "/images/medical2.jpg?height=800&width=1200",
    mobile: "/images/mobbg.jpg",
    title: "LN MEDICAL COLLEGE",
    subtitle: "Top Private Medical College in Bhopal",
    description: "World-class yet economical medical education for deserving aspirants.",
  },
  {
    desktop: "/images/school.jpg?height=800&width=1200",
    mobile: "/images/mobbg.jpg",
    title: "LNCT WORLD SCHOOL",
    subtitle: "Nurturing well-rounded personalities",
    description: "Fulfilling the needs of every learner",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const [isMobile, setIsMobile] = useState(false)

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 1440
      
    )
  }

  checkMobile()
  window.addEventListener("resize", checkMobile)
  return () => window.removeEventListener("resize", checkMobile)
}, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={isMobile ? image.mobile : image.desktop} alt={image.title} className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="overflow-hidden">
                  <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-white animate-slide-up">
                    {heroImages[currentSlide].title}
                    <span className="text-yellow-400 block animate-slide-up-delay">
                      {heroImages[currentSlide].subtitle}
                    </span>
                  </h1>
                </div>
                <p className="text-xl text-blue-100 leading-relaxed animate-fade-in-delay">
                  {heroImages[currentSlide].description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
                <Link href="#directory">
                  <Button
                    size="lg"
                    className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-black font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Explore Our Institutions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-black cursor-pointer hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in-delay-3">
                <div className="text-center transform hover:scale-110 transition-all duration-300">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                  <div className="text-2xl font-bold text-white">25+</div>
                  <div className="text-sm text-blue-200">Institutions</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-all duration-300">
                  <Users className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-sm text-blue-200">Students</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-all duration-300">
                  <Award className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                  <div className="text-2xl font-bold text-white">20+</div>
                  <div className="text-sm text-blue-200">Years Legacy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
        
        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.9s both;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.2s both;
        }
      `}</style>
    </section>
  )
}
