"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ExternalLink, GraduationCap, Building2, Factory, Search, Filter } from "lucide-react"

const websites = [
  { name: "LNCT University", url: "https://lnctu.ac.in", category: "University", icon: GraduationCap },
  { name: "LNCT University Education", url: "https://lnctu.edu.in", category: "University", icon: GraduationCap },
  { name: "Jayant Jaggery", url: "https://jayantjaggery.com", category: "Business", icon: Factory },
  { name: "Indore LNMC", url: "https://indorelnmc.com", category: "Medical", icon: Building2 },
  { name: "Ananjay", url: "https://ananjay.co.in", category: "Business", icon: Factory },
  { name: "JNCN College", url: "https://jncn.ac.in", category: "College", icon: GraduationCap },
  { name: "LNCT World Schools", url: "https://lnctworldschools.com", category: "School", icon: GraduationCap },
  { name: "CEC Bilaspur", url: "https://cecbilaspur.ac.in", category: "College", icon: GraduationCap },
  { name: "LNCP Bhopal", url: "https://lncpbhopal.in", category: "College", icon: GraduationCap },
  { name: "LNCP School", url: "https://lncps.in", category: "School", icon: GraduationCap },
  { name: "LNCT Bhopal", url: "https://lnctbhopal.in", category: "College", icon: GraduationCap },
  { name: "LNCT UJ", url: "https://lnctuj.com", category: "University", icon: GraduationCap },
  { name: "LNCT B", url: "https://lnctb.in", category: "College", icon: GraduationCap },
  { name: "LNCTS", url: "https://lncts.in", category: "College", icon: GraduationCap },
  { name: "LNCT BL Indore Campus", url: "https://lnctblindorecampus.in", category: "College", icon: GraduationCap },
  { name: "Kalchuri Contractors", url: "https://kalchuricontractors.ltd", category: "Business", icon: Building2 },
  { name: "LNCT Shrija", url: "https://lnctshrija.ac.in", category: "College", icon: GraduationCap },
  { name: "Parvati Sweetners", url: "https://parvatisweetners.co.in", category: "Business", icon: Factory },
  { name: "LNCTS Indore", url: "https://lnctspindore.in", category: "College", icon: GraduationCap },
  { name: "LNCT MCA", url: "https://lnctmca.in", category: "College", icon: GraduationCap },
  { name: "Ananjay Pharma", url: "https://ananjaypharma.co.in", category: "Business", icon: Factory },
  { name: "Vitamax", url: "https://vitamax.co.in", category: "Business", icon: Factory },
  { name: "CHL Homeopathy", url: "https://chlchomeopathy.in", category: "Medical", icon: Building2 },
  { name: "Dabra Alcobrev", url: "https://dabraalcobrev.com", category: "Business", icon: Factory },
  { name: "LNCT Guru", url: "https://lnctguru.com", category: "Education", icon: GraduationCap },
  { name: "SPIS Bilaspur", url: "https://spisbilaspur.com", category: "School", icon: GraduationCap },
  { name: "LN Ayurved College", url: "https://lnayurvedcollege.com", category: "Medical", icon: Building2 },
]

const categoryColors = {
  University: "bg-blue-100 text-blue-800 border-blue-200",
  College: "bg-green-100 text-green-800 border-green-200",
  School: "bg-purple-100 text-purple-800 border-purple-200",
  Medical: "bg-red-100 text-red-800 border-red-200",
  Business: "bg-orange-100 text-orange-800 border-orange-200",
  Education: "bg-indigo-100 text-indigo-800 border-indigo-200",
}

export default function DirectorySection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...new Set(websites.map((site) => site.category))]

  const filteredWebsites = useMemo(() => {
    return websites.filter((site) => {
      const matchesSearch = site.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || site.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <section id="directory" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">LNCT Group Directory</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive network of educational institutions, healthcare facilities, and business
            enterprises under the LNCT Group umbrella.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12 animate-fade-in-up-delay">
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search institutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 border-2 focus:border-blue-500 transition-all duration-300"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48 h-12 pl-10 border-2 focus:border-blue-500 transition-all duration-300">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}{" "}
                      {category !== "All" && `(${websites.filter((site) => site.category === category).length})`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Showing {filteredWebsites.length} of {websites.length} institutions
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredWebsites.map((site, index) => {
            const IconComponent = site.icon
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-500 group transform hover:-translate-y-2 border-2 hover:border-blue-200 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <IconComponent className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    <Badge
                      variant="secondary"
                      className={`${categoryColors[site.category as keyof typeof categoryColors]} group-hover:scale-105 transition-transform duration-300`}
                    >
                      {site.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {site.name}
                  </CardTitle>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:underline transition-all duration-300"
                  >
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* No Results Message */}
        {filteredWebsites.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No institutions found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filter criteria</p>
          </div>
        )}

        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
          }
          
          .animate-fade-in-up-delay {
            animation: fade-in-up 0.6s ease-out 0.2s forwards;
            opacity: 0;
          }
          
          .animate-fade-in {
            animation: fade-in-up 0.6s ease-out forwards;
          }
        `}</style>
      </div>
    </section>
  )
}
