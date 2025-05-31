import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Award, Globe, BookOpen, Microscope } from "lucide-react"

export default function AboutPage() {
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
      year: "2000",
      event: "LNCT Group Founded",
      description: "Started with a vision to transform education in Central India",
    },
    {
      year: "2005",
      event: "First Engineering College",
      description: "Established LNCT Bhopal with engineering programs",
    },
    { year: "2010", event: "University Status", description: "LNCT University granted university status" },
    { year: "2015", event: "Multi-Campus Expansion", description: "Expanded to multiple cities across Central India" },
    { year: "2020", event: "Digital Transformation", description: "Embraced technology-enabled learning" },
    { year: "2024", event: "Global Recognition", description: "Achieved international accreditation and partnerships" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About LNCT Group</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Two decades of educational excellence, innovation, and commitment to shaping the future leaders of
              tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-blue-50 border-blue-200">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To provide world-class education that empowers students with knowledge, skills, and values necessary
                  to excel in their chosen fields and contribute meaningfully to society.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Excellence in teaching and learning
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Innovation and research-driven approach
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Holistic development of students
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 bg-green-50 border-green-200">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To be a globally recognized educational institution that creates leaders, innovators, and responsible
                  citizens who drive positive change in the world.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Global recognition and partnerships
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Sustainable and inclusive growth
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Technology-enabled learning ecosystem
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Milestones that define our journey of excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <IconComponent className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our educational legacy</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <Card className={`w-full max-w-md ${index % 2 === 0 ? "mr-8" : "ml-8"}`}>
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-blue-600">{milestone.year}</Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </CardContent>
                </Card>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Excellence", description: "Striving for the highest standards in education and research" },
              { title: "Innovation", description: "Embracing new ideas and technologies to enhance learning" },
              { title: "Integrity", description: "Maintaining honesty and ethical practices in all endeavors" },
              { title: "Inclusivity", description: "Creating an environment where everyone can thrive and succeed" },
            ].map((value, index) => (
              <Card key={index} className="text-center p-6 bg-white/80 backdrop-blur">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{value.title[0]}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
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
