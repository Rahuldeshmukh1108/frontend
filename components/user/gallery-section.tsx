"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, Eye } from "lucide-react"
import Image from "next/image"

const galleryImages = [
  { id: 1, src: "/images/main2.jpg?height=400&width=600", alt: "Campus Main Building", category: "Campus" },
  { id: 2, src: "/images/class3.jpg?height=400&width=600", alt: "Modern Classroom", category: "Academics" },
  { id: 3, src: "/images/labs.jpg?height=400&width=600", alt: "Computer Laboratory", category: "Labs" },
  { id: 4, src: "/images/lib.jpg?height=400&width=600", alt: "Library Interior", category: "Facilities" },
  { id: 5, src: "/images/sports2.jpeg?height=400&width=600", alt: "Sports Complex", category: "Sports" },
  { id: 6, src: "/images/fest2.jpg?height=400&width=600", alt: "Student Activities", category: "Life" },
  { id: 7, src: "/images/labs2.jpeg?height=400&width=600", alt: "Engineering Lab", category: "Labs" },
  { id: 8, src: "/images/audi.jpeg?height=400&width=600", alt: "Auditorium", category: "Facilities" },
  { id: 9, src: "/images/hostel.jpeg?height=400&width=600", alt: "Hostel Rooms", category: "Accommodation" },
  { id: 10, src: "/images/canteen.jpeg?height=400&width=600", alt: "Cafeteria", category: "Facilities" },
  { id: 11, src: "/images/incu.jpg?height=400&width=600", alt: "Research Center", category: "Research" },
  { id: 12, src: "/images/grad.jpg?height=400&width=600", alt: "Graduation Ceremony", category: "Events" },
  { id: 13, src: "/images/gardern.jpg?height=400&width=600", alt: "Campus Garden", category: "Campus" },
  { id: 14, src: "/images/lechall.jpeg?height=400&width=600", alt: "Lecture Hall", category: "Academics" },
  { id: 15, src: "/images/chem.webp?height=400&width=600", alt: "Chemistry Lab", category: "Labs" },
  { id: 16, src: "/images/sports.jpeg?height=400&width=600", alt: "Basketball Court", category: "Sports" },
  { id: 17, src: "/images/lounge.jpeg?height=400&width=600", alt: "Student Lounge", category: "Life" },
  { id: 18, src: "/images/kalch.jpg?height=400&width=600", alt: "Conference Room", category: "Events" },
]

const categories = [
  "All",
  "Campus",
  "Academics",
  "Labs",
  "Facilities",
  "Sports",
  "Life",
  "Accommodation",
  "Research",
  "Events",
]

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  // Get filtered images based on category
  const getFilteredImages = () => {
    if (selectedCategory === "All") {
      // Show only one image per category (the first one found)
      const uniqueCategories = categories.slice(1) // Remove "All"
      return uniqueCategories
        .map((category) => {
          const firstImage = galleryImages.find((img) => img.category === category)
          return firstImage
        })
        .filter(Boolean)  as typeof galleryImages
    } else {
      // Show all images for the selected category
      return galleryImages.filter((img) => img.category === selectedCategory)
    }
  }

  const filteredImages = getFilteredImages()

  const handleCategoryChange = (category: string) => {
    if (category === selectedCategory) return

    setIsAnimating(true)
    setTimeout(() => {
      setSelectedCategory(category)
      setIsAnimating(false)
    }, 150)
  }

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex].id)
  }

  const selectedImageData = selectedImage ? galleryImages.find((img) => img.id === selectedImage) : null

  // Determine grid layout based on category
  const getGridLayout = () => {
    if (selectedCategory === "All") {
      return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    } else {
      return "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
    }
  }

  // Determine image height based on category
  const getImageHeight = () => {
    if (selectedCategory === "All") {
      return "h-80" // Medium size for "All" view
    } else {
      return "h-96" // Larger size for specific categories
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Campus Gallery
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="mt-6 px-4">
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our vibrant campus life through stunning visuals showcasing our world-class facilities, academic
              excellence, and dynamic student community.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => handleCategoryChange(category)}
              className={`
                relative overflow-hidden transition-all duration-300 transform hover:scale-105 px-6 py-2 text-base
                ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                }
                animate-fade-in-up
              `}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="relative z-10">{category}</span>
              {selectedCategory === category && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse opacity-20"></div>
              )}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div
          className={`
          transition-all duration-300 ease-in-out
          ${isAnimating ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"}
        `}
        >
          <div className={`grid ${getGridLayout()} gap-6 md:gap-8`}>
            {filteredImages.map((image, index) => (
              <Card
                key={`${selectedCategory}-${image.id}`}
                className={`
                  group overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105
                  bg-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/10
                  border-0 animate-fade-in-up
                `}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(image.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    {/* Image */}
                    <div className="relative">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className={`w-full ${getImageHeight()} object-cover transition-transform duration-700 group-hover:scale-110`}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Hover Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                          <Eye className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="space-y-2">
                        <h3 className="text-white font-semibold text-lg md:text-xl leading-tight">{image.alt}</h3>
                        <div className="flex items-center">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/80 text-white backdrop-blur-sm">
                            {image.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Eye className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No images found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage && selectedImageData && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="relative w-full h-full max-w-7xl flex items-center justify-center animate-scale-in">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20 z-10 backdrop-blur-sm"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 backdrop-blur-sm"
                    onClick={() => navigateImage("prev")}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 backdrop-blur-sm"
                    onClick={() => navigateImage("next")}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                </>
              )}

              {/* Image Container */}
              <div className="w-full h-full flex items-center justify-center p-16">
                <Image
                  src={selectedImageData.src || "/placeholder.svg"}
                  alt={selectedImageData.alt}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  style={{ maxHeight: "85vh", maxWidth: "90vw" }}
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 text-center bg-black/50 backdrop-blur-sm rounded-lg p-4 mx-auto max-w-md">
                <h3 className="text-white text-lg md:text-xl font-semibold mb-2">{selectedImageData.alt}</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/80 text-white">
                  {selectedImageData.category}
                </span>
              </div>
            </div>
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

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
