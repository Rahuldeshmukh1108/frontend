"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Award, Globe } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About LNCT Group</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              LNCT Group stands as a beacon of educational excellence in Central India, with over two decades of
              commitment to nurturing talent and fostering innovation. Our comprehensive ecosystem spans across
              universities, colleges, schools, healthcare institutions, and business enterprises.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From engineering and management to medical sciences and basic education, we provide a holistic learning
              environment that prepares students for global challenges while maintaining strong ethical values and
              social responsibility.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-1">50,000+</div>
                <div className="text-gray-600">Alumni Network</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-1">95%</div>
                <div className="text-gray-600">Placement Rate</div>
              </div>
            </div>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group border-2 hover:border-blue-200"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-0">
                    <IconComponent className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
