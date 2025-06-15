"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Navbar from "@/components/user/navbar"
import Footer from "@/components/user/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Award, Globe, BookOpen, Microscope, Star, Lightbulb, Shield, Globe2 } from "lucide-react"

export default function AboutPage() {
  const [visibleMilestones, setVisibleMilestones] = useState<number[]>([])
  const [visibleMedical, setVisibleMedical] = useState<number[]>([])
  const milestonesRef = useRef<HTMLDivElement>(null)
  const medicalRef = useRef<HTMLDivElement>(null)

  const achievements = [
    { icon: GraduationCap, title: "25+ Institutions", description: "Across multiple states" },
    { icon: Users, title: "50,000+ Alumni", description: "Successful professionals worldwide" },
    { icon: Award, title: "95% Placement", description: "Industry-leading placement record" },
    { icon: Globe, title: "Global Partnerships", description: "International collaborations" },
    { icon: BookOpen, title: "100+ Programs", description: "Diverse academic offerings" },
    { icon: Microscope, title: "50+ Research Labs", description: "State-of-the-art facilities" },
  ]

  const milestones = [
    {
      year: "1994",
      event: "LNCT Bhopal Established",
      description: "One of the first private engineering colleges in Madhya Pradesh.",
    },
    {
      year: "2004",
      event: "LNCT Indore Launched",
      description: "Expanded to Indore with engineering, Pharmacy, and management programs.",
    },
    {
      year: "2008",
      event: "LNCT Jabalpur Started",
      description: "New campus began offering professional courses in engineering and management.",
    },
    {
      year: "2015",
      event: "LNCT University Founded (Bhopal)",
      description: "Recognized by UGC as a multidisciplinary private university.",
    },
    {
      year: "2025",
      event: "Over 30 years of Excellence",
      description: "LNCT Group now runs 25+ institutions with a legacy of quality education and top placements.",
    },
  ]

  const medical = [
    {
      year: "2009",
      event: "LNCT Medical College & Sewakunj Hospital Established",
      description: "Making Entry into medical and healthcare education in Bhopal.",
    },
    {
      year: "2015",
      event: "Expansion into Nursing and Paramedical Sciences",
      description: "Launched nursing, physiotherapy, and paramedical programs.",
    },
    {
      year: "2020",
      event: "COVID-19 Contribution",
      description: "Hospital served as a major COVID care and vaccination center.",
    },
    {
      year: "2024",
      event: "Advanced Medical Infrastructure",
      description: "Upgraded to multi-specialty teaching hospital with cutting-edge tech.",
    },
  ]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    }

    const handleIntersection = (
      entries: IntersectionObserverEntry[],
      setVisible: React.Dispatch<React.SetStateAction<number[]>>,
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          setTimeout(() => {
            setVisible((prev) => [...prev, index])
          }, index * 300)
        }
      })
    }

    const milestonesObserver = new IntersectionObserver(
      (entries) => handleIntersection(entries, setVisibleMilestones),
      observerOptions,
    )

    const medicalObserver = new IntersectionObserver(
      (entries) => handleIntersection(entries, setVisibleMedical),
      observerOptions,
    )

    // Observe milestone items
    if (milestonesRef.current) {
      const items = milestonesRef.current.querySelectorAll("[data-index]")
      items.forEach((item) => milestonesObserver.observe(item))
    }

    // Observe medical items
    if (medicalRef.current) {
      const items = medicalRef.current.querySelectorAll("[data-index]")
      items.forEach((item) => medicalObserver.observe(item))
    }

    return () => {
      milestonesObserver.disconnect()
      medicalObserver.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 to-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent animate-fade-in">
              About LNCT Group
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
              Three decades of educational excellence, innovation, and commitment to shaping the future leaders of
              tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="group p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Mission</h2>
                </div>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
                  To undertake interdisciplinary research and development by engaging the faculty and students in
                  curricular, co-curricular and industry collaborated projects towards problem solving.
                </p>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start transition-transform duration-300 hover:translate-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    To improve continually in the teaching-learning process by strengthening infrastructural facilities
                    and faculty credentials.
                  </li>
                  <li className="flex items-start transition-transform duration-300 hover:translate-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    To enhance proportion of skilled based courses beyond curriculum to create more employable
                    graduates.
                  </li>
                  <li className="flex items-start transition-transform duration-300 hover:translate-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    To inculcate human values, ethics and responsibility in our outgoing engineers by providing
                    environment.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Vision</h2>
                </div>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
                  To be a premier institute where engineering education and research converge to produce engineers as
                  responsible citizens.
                </p>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start transition-transform duration-300 hover:translate-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    Global recognition and partnerships
                  </li>
                  <li className="flex items-start transition-transform duration-300 hover:translate-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    Sustainable and inclusive growth
                  </li>
                  <li className="flex items-start transition-transform duration-300 hover:translate-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    Technology-enabled learning ecosystem
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Our Achievements</h2>
            <p className="text-lg md:text-xl text-slate-600">Milestones that define our journey of excellence</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card
                  key={index}
                  className="group text-center p-6 md:p-8 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-slate-600 group-hover:text-slate-500 transition-colors">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline - Milestones */}
      <section className="py-20" ref={milestonesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">From Vision to Institution</h2>
            <p className="text-lg md:text-xl text-slate-600">Key milestones in our educational legacy</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-indigo-300 to-blue-200 rounded-full"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                data-index={index}
                className={`relative flex items-center mb-16 transition-all duration-700 ${
                  visibleMilestones.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <Card
                  className={`group w-full max-w-md shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 ${
                    index % 2 === 0 ? "mr-4 md:mr-8" : "ml-4 md:ml-8"
                  }`}
                >
                  <CardContent className="p-6 md:p-8">
                    <Badge className="mb-4 bg-gradient-to-r from-slate-600 to-slate-800 text-white px-4 py-1 text-sm font-semibold">
                      {milestone.year}
                    </Badge>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                      {milestone.event}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">{milestone.description}</p>
                  </CardContent>
                </Card>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full border-4 border-white shadow-lg hover:scale-125 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Medical */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100" ref={medicalRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Journey in Care & Compassion</h2>
            <p className="text-lg md:text-xl text-slate-600">Key milestones in our Medical Mastery</p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-200 via-teal-300 to-emerald-200 rounded-full"></div>

            {medical.map((medicalItem, index) => (
              <div
                key={index}
                data-index={index}
                className={`relative flex items-center mb-16 transition-all duration-700 ${
                  visibleMedical.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <Card
                  className={`group w-full max-w-md shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 ${
                    index % 2 === 0 ? "mr-4 md:mr-8" : "ml-4 md:ml-8"
                  }`}
                >
                  <CardContent className="p-6 md:p-8">
                    <Badge className="mb-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1 text-sm font-semibold">
                      {medicalItem.year}
                    </Badge>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                      {medicalItem.event}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">{medicalItem.description}</p>
                  </CardContent>
                </Card>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full border-4 border-white shadow-lg hover:scale-125 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Pillars of Purpose</h2>
            <p className="text-lg md:text-xl text-slate-300">Foundation that shapes our legacy and future</p>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-slate-300 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence",
                description: "Striving for the highest standards in education and research",
                icon: Star,
              },
              {
                title: "Innovation",
                description: "Embracing new ideas and technologies to enhance learning",
                icon: Lightbulb,
              },
              {
                title: "Integrity",
                description: "Maintaining honesty and ethical practices in all endeavors",
                icon: Shield,
              },
              {
                title: "Inclusivity",
                description: "Creating an environment where everyone can thrive and succeed",
                icon: Globe2,
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="group text-center p-6 md:p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-3"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-slate-200 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-300 group-hover:text-slate-200 transition-colors leading-relaxed text-sm md:text-base">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
