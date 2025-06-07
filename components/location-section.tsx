"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Navigation, ExternalLink } from "lucide-react"

export default function LocationSection() {
  const [selectedLocation, setSelectedLocation] = useState(0)

  const locations = [
    {
      name: "LNCT University - Main Campus",
      address: "Kolar Road, Bhopal, Madhya Pradesh 462042",
      phone: "+91 755 2740800",
      email: "info@lnctu.ac.in",
      coordinates: "23.2514407581099,77.52465896518126",
      mapUrl: "https://maps.app.goo.gl/kxVfM2kztXa9Qjo16",
      description: "Our flagship campus with state-of-the-art facilities and modern infrastructure.",
    },
    {
      name: "LNCT Indore Campus",
      address: "Indore, Madhya Pradesh 452020",
      phone: "+91 731 2555555",
      email: "info@lnctindore.ac.in",
      coordinates: "22.626830043431344,75.75502564003308",
      mapUrl: "https://maps.app.goo.gl/vmmxjGud5wom9urB9",
      description: "Expanding our reach in the commercial capital of Madhya Pradesh.",
    },
    {
      name: "LNCT Jabalpur Campus",
      address: "Jabalpur, Madhya Pradesh 482053",
      phone: "+91 7752 123456",
      email: "info@lnctbilaspur.ac.in",
      coordinates: "23.153836134562567,79.79603550193742",
      mapUrl: "https://maps.app.goo.gl/EFTGHhpKB8KeT5S66",
      description: "Serving the educational needs of Chhattisgarh region.",
    },
  ]


  // Google Maps embed URL with multiple locations
 const mapEmbedUrl = `https://www.google.com/maps/embed/v1/view?key=AIzaSyC886x88iX1x7E9ZQF37YJUMzA-YJlenVY&center=${locations[selectedLocation].coordinates}&zoom=14&maptype=roadmap`

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find us across multiple campuses in Central India, each equipped with world-class facilities and
            infrastructure to provide the best educational experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {locations.map((location, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 ${
                selectedLocation === index ? "ring-2 ring-blue-500 shadow-lg" : ""
              }`}
              onClick={() => setSelectedLocation(index)}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold text-gray-900 flex items-start justify-between">
                  <span className="flex-1">{location.name}</span>
                  <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 ml-2" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">{location.description}</p>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{location.address}</span>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                    <a
                      href={`tel:${location.phone}`}
                      className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-red-600 mr-3 flex-shrink-0" />
                    <a
                      href={`mailto:${location.email}`}
                      className="text-sm text-gray-600 hover:text-red-600 transition-colors"
                    >
                      {location.email}
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(location.mapUrl, "_blank")
                    }}
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Map Section */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-3" />
                <div>
                  <h3 className="text-xl font-bold">Campus Locations</h3>
                  <p className="text-blue-100 text-sm mt-1">Currently viewing: {locations[selectedLocation].name}</p>
                </div>
              </div>
              <Button
                variant="secondary"
                size="sm"
                onClick={() =>
                  window.open(`https://maps.google.com/?q=${locations[selectedLocation].coordinates}`, "_blank")
                }
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Open in Maps
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="aspect-video bg-gray-100 relative">
              <iframe
  src={mapEmbedUrl}
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="w-full h-full"
/>


              {/* Location overlay */}
              { <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-sm">
                <h4 className="font-semibold text-gray-900 mb-2">{locations[selectedLocation].name}</h4>
                <p className="text-sm text-gray-600 mb-3">{locations[selectedLocation].address}</p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(`tel:${locations[selectedLocation].phone}`)}
                  >
                    <Phone className="h-3 w-3 mr-1" />
                    Call
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(`mailto:${locations[selectedLocation].email}`)}
                  >
                    <Mail className="h-3 w-3 mr-1" />
                    Email
                  </Button>
                </div>
              </div> }
            </div>
          </CardContent>
        </Card>

       
      </div>
    </section>
  )
}
