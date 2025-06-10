"use client"

import { useState, useMemo, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ExternalLink, GraduationCap, Building2, Factory, Search, ChevronDown, ChevronUp } from "lucide-react"
import { url } from "inspector"

const websites = [
  // Education Category
  {
    name: "LNCT University",
    url: "https://lnctu.ac.in",
    category: "Education",
    type: "University",
    icon: GraduationCap,
  },
  {
    name: "LNCT University Education",
    url: "https://lnctu.edu.in",
    category: "Education",
    type: "University",
    icon: GraduationCap,
  },
  {
    name: "JNCT BHOPAL",
    url: "https://jnctbhopal.ac.in",
    category: "Education",
    type: "College",
    icon: GraduationCap,
  },
  {
name: "LNCT Main",
url: "https://lnct.ac.in",
category: "Education",
type: "College",
icon: GraduationCap,
  },
  { name: "JNCN College", url: "https://jncn.ac.in", category: "Education", type: "College", icon: GraduationCap },
  {
    name: "LNCT World Schools",
    url: "https://lnctworldschools.com",
    category: "Education",
    type: "School",
    icon: GraduationCap,
  },
  {
    name: "CEC Bilaspur",
    url: "https://cecbilaspur.ac.in",
    category: "Education",
    type: "College",
    icon: GraduationCap,
  },
  { name: "LNCP Bhopal", url: "https://lncpbhopal.in", category: "Education", type: "College", icon: GraduationCap },
  { name: "LNCP School", url: "https://lncps.in", category: "Education", type: "School", icon: GraduationCap },
  { name: "LNCT Bhopal", url: "https://lnctbhopal.in", category: "Education", type: "College", icon: GraduationCap },
  { name: "LNCT UJ", url: "https://lnctuj.com", category: "Education", type: "University", icon: GraduationCap },
  { name: "LNCT B", url: "https://lnctb.in", category: "Education", type: "College", icon: GraduationCap },
  { name: "LNCTS", url: "https://lncts.in", category: "Education", type: "College", icon: GraduationCap },
  {
    name: "LNCT BL Indore Campus",
    url: "https://lnctblindorecampus.in",
    category: "Education",
    type: "College",
    icon: GraduationCap,
  },
  { name: "LNCT Shrija", url: "https://lnctshrija.ac.in", category: "Education", type: "College", icon: GraduationCap },
  { name: "LNCTS Indore", url: "https://lnctspindore.in", category: "Education", type: "College", icon: GraduationCap },
  { name: "LNCT MCA", url: "https://lnctmca.in", category: "Education", type: "College", icon: GraduationCap },
  { name: "LNCT Guru", url: "https://lnctguru.com", category: "Education", type: "Platform", icon: GraduationCap },
  {
    name: "SPIS Bilaspur",
    url: "https://spisbilaspur.com",
    category: "Education",
    type: "School",
    icon: GraduationCap,
  },

  // Medical Category
  { name: "Indore LNMC", url: "https://indorelnmc.com", category: "Medical", type: "College", icon: Building2 },
  { name: "CHL Homeopathy", url: "https://chlchomeopathy.in", category: "Medical", type: "Clinic", icon: Building2 },
  {
    name: "LN Ayurved College",
    url: "https://lnayurvedcollege.com",
    category: "Medical",
    type: "College",
    icon: Building2,
  },

  // Business Category
  {
    name: "Jayant Jaggery",
    url: "https://jayantjaggery.com",
    category: "Business",
    type: "Manufacturing",
    icon: Factory,
  },
  { name: "Ananjay", url: "https://ananjay.co.in", category: "Business", type: "Trading", icon: Factory },
  {
    name: "Kalchuri Contractors",
    url: "https://kalchuricontractors.ltd",
    category: "Business",
    type: "Construction",
    icon: Building2,
  },
  {
    name: "Parvati Sweetners",
    url: "https://parvatisweetners.co.in",
    category: "Business",
    type: "Manufacturing",
    icon: Factory,
  },
  {
    name: "Ananjay Pharma",
    url: "https://ananjaypharma.co.in",
    category: "Business",
    type: "Pharmaceutical",
    icon: Factory,
  },
  { name: "Vitamax", url: "https://vitamax.co.in", category: "Business", type: "Healthcare", icon: Factory },
  {
    name: "Dabra Alcobrev",
    url: "https://dabraalcobrev.com",
    category: "Business",
    type: "Manufacturing",
    icon: Factory,
  },
]

const categoryColors = {
  Education: "bg-blue-500 hover:bg-blue-600 text-white",
  Medical: "bg-red-500 hover:bg-red-600 text-white",
  Business: "bg-green-500 hover:bg-green-600 text-white",
}

const typeColors = {
  University: "bg-purple-100 text-purple-800",
  College: "bg-blue-100 text-blue-800",
  School: "bg-green-100 text-green-800",
  Platform: "bg-indigo-100 text-indigo-800",
  Clinic: "bg-red-100 text-red-800",
  Manufacturing: "bg-orange-100 text-orange-800",
  Trading: "bg-yellow-100 text-yellow-800",
  Construction: "bg-gray-100 text-gray-800",
  Pharmaceutical: "bg-pink-100 text-pink-800",
  Healthcare: "bg-teal-100 text-teal-800",
}

export default function DirectorySection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Education") // Default to Education
  const [visibleCount, setVisibleCount] = useState(6) // Show 6 items initially
  const [isExpanded, setIsExpanded] = useState(false)

  const categories = ["Education", "Medical", "Business"]

  const filteredWebsites = useMemo(() => {
    return websites.filter((site) => {
      const matchesSearch = site.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = site.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const visibleWebsites = isExpanded ? filteredWebsites : filteredWebsites.slice(0, visibleCount)
  const hasMore = filteredWebsites.length > visibleCount

  const handleShowMore = () => {
    if (isExpanded) {
      setVisibleCount(6)
      setIsExpanded(false)
    } else {
      setIsExpanded(true)
    }
  }

  // Reset when category changes
  useEffect(() => {
    setVisibleCount(6)
    setIsExpanded(false)
  }, [selectedCategory])

  return (
    <section id="directory" className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">LNCT Group Directory</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our network of institutions and enterprises
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up-delay">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? categoryColors[category as keyof typeof categoryColors]
                  : "hover:bg-gray-100"
              }`}
            >
              {category}
              <span className="ml-2 text-sm opacity-75">
                ({websites.filter((site) => site.category === category).length})
              </span>
            </Button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10 animate-fade-in-up-delay-2">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder={`Search in ${selectedCategory}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 rounded-full border-2 focus:border-blue-500 transition-all duration-300 shadow-sm"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600 font-medium">
            {filteredWebsites.length} {selectedCategory.toLowerCase()} institution
            {filteredWebsites.length !== 1 ? "s" : ""} found
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {visibleWebsites.map((site, index) => {
            const IconComponent = site.icon
            return (
              <Card
                key={`${site.name}-${index}`}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-slide-in-up overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="pb-3 relative">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <Badge
                      variant="secondary"
                      className={`${typeColors[site.type as keyof typeof typeColors]} group-hover:scale-105 transition-transform duration-300 font-medium`}
                    >
                      {site.type}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="relative">
                  <CardTitle className="text-lg mb-4 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {site.name}
                  </CardTitle>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:underline transition-all duration-300 text-sm"
                  >
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Show More/Less Button */}
        {filteredWebsites.length > 6 && (
          <div className="text-center animate-fade-in">
            <Button
              onClick={handleShowMore}
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-full font-medium hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 transform hover:scale-105"
            >
              {isExpanded ? (
                <>
                  Show Less
                  <ChevronUp className="ml-2 h-5 w-5" />
                </>
              ) : (
                <>
                  Show More ({filteredWebsites.length - visibleCount} more)
                  <ChevronDown className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </div>
        )}

        {/* No Results Message */}
        {filteredWebsites.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="text-gray-300 mb-6">
              <Search className="h-20 w-20 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-3">No institutions found</h3>
            <p className="text-gray-500 text-lg">Try adjusting your search terms</p>
          </div>
        )}
      </div>

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
        
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
