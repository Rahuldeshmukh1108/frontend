"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Award, Globe } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [showStats, setShowStats] = useState(false)
  const [showCards, setShowCards] = useState([false, false, false, false])
  const sectionRef = useRef<HTMLElement>(null)

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        setTimeout(() => setShowStats(true), 800)

        // Use fixed length to avoid using showCards
        Array.from({ length: 4 }).forEach((_, index) => {
          setTimeout(() => {
            setShowCards((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }, 1200 + index * 200)
        })
      }
    },
    { threshold: 0.1 }
  )

  if (sectionRef.current) {
    observer.observe(sectionRef.current)
  }

  return () => observer.disconnect()
}, []) // <-- keep dependency array empty

  const features = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description:
        "Providing world-class education across multiple disciplines with state-of-the-art facilities and experienced faculty.",
    },
    {
      icon: Users,
      title: "Industry Partnerships",
      description:
        "Strong collaborations with leading industries ensuring practical exposure and excellent placement opportunities.",
    },
    {
      icon: Award,
      title: "Research & Innovation",
      description:
        "Fostering a culture of research and innovation with cutting-edge laboratories and research centers.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "International collaborations and exchange programs providing global exposure to our students.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            {/* Title Animation */}
            <h2
              className={`text-4xl font-bold text-gray-900 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              About LNCT Group
            </h2>

            {/* First Paragraph Animation */}
            <p
              className={`text-lg text-gray-600 leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
             LNCT Group is a premier educational institution offering courses in Engineering, Management, Pharmacy, and Medical fields. With ISO-9001 certification and NBA-accredited programs, it attracts students nationwide. The 50-acre Bhopal campus features modern classrooms, research labs, Wi-Fi, hostels, digital library, sports facilities, and a vibrant, tech-enabled learning environment.









            </p>

            {/* Second Paragraph Animation */}
            <p
              className={`text-lg text-gray-600 leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              From engineering and management to medical sciences and basic education, we provide a holistic learning
              environment that prepares students for global challenges while maintaining strong ethical values and
              social responsibility.
            </p>

            {/* Statistics Animation */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div
                className={`text-center transform transition-all duration-800 hover:scale-105 ${
                  showStats ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                }`}
              >
                <div className="text-3xl font-bold text-blue-600 mb-1 animate-pulse">50,000+</div>
                <div className="text-gray-600">Alumni Network</div>
              </div>
              <div
                className={`text-center transform transition-all duration-800 delay-200 hover:scale-105 ${
                  showStats ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                }`}
              >
                <div className="text-3xl font-bold text-blue-600 mb-1 animate-pulse">95%</div>
                <div className="text-gray-600">Placement Rate</div>
              </div>
            </div>
          </div>

          {/* Feature Cards with Individual Animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className={`p-6 hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 group border-2 hover:border-blue-200 ${
                    showCards[index] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
                  }`}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <IconComponent
                        className={`h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-all duration-500 ${
                          showCards[index] ? "animate-bounce" : ""
                        }`}
                        style={{ animationDuration: "2s", animationIterationCount: "1" }}
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`}
                      />
                    </div>
                    <h3
                      className={`text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-all duration-500 ${
                        showCards[index] ? "animate-fadeInUp" : ""
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-gray-600 leading-relaxed transition-all duration-500 delay-100 ${
                        showCards[index] ? "animate-fadeInUp" : ""
                      }`}
                    >
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}
