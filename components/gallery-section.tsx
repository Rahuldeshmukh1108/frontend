"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryImages = [
  { id: 1, src: "/placeholder.svg?height=400&width=600", alt: "Campus Main Building", category: "Campus" },
  { id: 2, src: "/placeholder.svg?height=400&width=600", alt: "Modern Classroom", category: "Academics" },
  { id: 3, src: "/placeholder.svg?height=400&width=600", alt: "Computer Laboratory", category: "Labs" },
  { id: 4, src: "/placeholder.svg?height=400&width=600", alt: "Library Interior", category: "Facilities" },
  { id: 5, src: "/placeholder.svg?height=400&width=600", alt: "Sports Complex", category: "Sports" },
  { id: 6, src: "/placeholder.svg?height=400&width=600", alt: "Student Activities", category: "Life" },
  { id: 7, src: "/placeholder.svg?height=400&width=600", alt: "Engineering Lab", category: "Labs" },
  { id: 8, src: "/placeholder.svg?height=400&width=600", alt: "Auditorium", category: "Facilities" },
  { id: 9, src: "/placeholder.svg?height=400&width=600", alt: "Hostel Rooms", category: "Accommodation" },
  { id: 10, src: "/placeholder.svg?height=400&width=600", alt: "Cafeteria", category: "Facilities" },
  { id: 11, src: "/placeholder.svg?height=400&width=600", alt: "Research Center", category: "Research" },
  { id: 12, src: "/placeholder.svg?height=400&width=600", alt: "Graduation Ceremony", category: "Events" },
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

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

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

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our vibrant campus life through these images showcasing our facilities, academic environment, and
            student activities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <Card
              key={image.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => openLightbox(image.id)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-medium">{image.alt}</p>
                    <p className="text-blue-200 text-sm">{image.category}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && selectedImageData && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                onClick={() => navigateImage("next")}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              <img
                src={selectedImageData.src || "/placeholder.svg"}
                alt={selectedImageData.alt}
                className="max-w-full max-h-full object-contain"
              />

              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-lg font-medium">{selectedImageData.alt}</p>
                <p className="text-blue-200">{selectedImageData.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
