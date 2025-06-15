import Navbar from "@/components/user/navbar"
import Footer from "@/components/user/footer"
import DirectorySection from "@/components/user/directory-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function InstitutionPage() {
  const institutionStats = [
    { label: "Total Institutions", value: "25+", icon: GraduationCap },
    { label: "Students Enrolled", value: "50,000+", icon: Users },
    { label: "Cities Covered", value: "10+", icon: MapPin },
    { label: "Years of Excellence", value: "20+", icon: GraduationCap },
  ]

  const featuredInstitutions = [
    { name: "LNCT",
      description: "32+ Years of Academic Excellence and Discipline.",
      location: "Raisen road,Bhopal,Madhya Pradesh",
      established: "1994",
      programs: ["Engineering","Management", "Computer Applications","Artificial Intelligence", "Masters"],
      website: "https://lnct.ac.in/lnct-college/",
      image: "/images/main2.jpg?height=300&width=400",
      
    },
    {
     name: "LNCT University",
      description:
        "Premier university offering undergraduate, postgraduate, and doctoral programs across multiple disciplines.",
      location: " Kolar road ,Bhopal, Madhya Pradesh",
      established: "2015",
      programs: ["Engineering", "Computer Applications", "Research"],
      website: "https://lnctu.ac.in",
      image: "/images/lnctuni.jpeg?height=300&width=400",
    },
    {
      name: "JNCT",
      description: "It is considered to be unique in engineering education as it is firmly rooted in local soil and capable of articulating Indian ethos",
      location: "Indore, Madhya Pradesh",
      established: "2003",
      programs: ["Engineering", "Computer Applications", "Management"],
      website: "https://www.jnctbhopal.ac.in/",
      image: "/images/jnctt.jpg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Institutions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our comprehensive network of educational institutions, healthcare facilities, and business
              enterprises that form the LNCT Group ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {institutionStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <IconComponent className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Institutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Institutions</h2>
            <p className="text-xl text-gray-600">Highlighting some of our flagship educational institutions</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredInstitutions.map((institution, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={institution.image || "/placeholder.svg"}
                    alt={institution.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{institution.name}</CardTitle>
                    <Badge variant="secondary">Est. {institution.established}</Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {institution.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{institution.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Programs Offered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {institution.programs.map((program, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {program}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <a
                    href={institution.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Directory */}
      <DirectorySection />

      <Footer />
    </div>
  )
}
