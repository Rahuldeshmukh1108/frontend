import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function LocationSection() {
  const locations = [
    {
      name: "LNCT University - Main Campus",
      address: "Kolar Road, Bhopal, Madhya Pradesh 462042",
      phone: "+91 755 2740800",
      email: "info@lnctu.ac.in",
    },
    {
      name: "LNCT Indore Campus",
      address: "Indore, Madhya Pradesh",
      phone: "+91 731 2555555",
      email: "info@lnctindore.ac.in",
    },
    {
      name: "LNCT Bilaspur Campus",
      address: "Bilaspur, Chhattisgarh",
      phone: "+91 7752 123456",
      email: "info@lnctbilaspur.ac.in",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find us across multiple campuses in Central India, each equipped with world-class facilities and
            infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-blue-600" />
                  Campus Locations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.0234567890123!2d77.4126!3d23.2599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE1JzM1LjYiTiA3N8KwMjQnNDUuNCJF!5e0!3m2!1sen!2sin!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Details */}
          <div className="order-1 lg:order-2 space-y-6">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{location.name}</h3>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{location.address}</span>
                    </div>

                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <a href={`tel:${location.phone}`} className="text-gray-600 hover:text-green-600">
                        {location.phone}
                      </a>
                    </div>

                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                      <a href={`mailto:${location.email}`} className="text-gray-600 hover:text-red-600">
                        {location.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                  <div>Saturday: 9:00 AM - 2:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
