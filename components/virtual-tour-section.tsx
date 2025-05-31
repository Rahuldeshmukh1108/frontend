"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw, Maximize } from "lucide-react"

export default function VirtualTourSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">360° Virtual Campus Tour</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Experience our state-of-the-art campus facilities from the comfort of your home. Take a virtual walk through
            our classrooms, laboratories, libraries, and recreational areas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main 360 View */}
          <div className="lg:col-span-2">
            <Card className="bg-black/20 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <span>Interactive Campus Tour</span>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="border-gray-600 text-white hover:bg-white hover:text-black"
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-white hover:bg-white hover:text-black"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-white hover:bg-white hover:text-black"
                    >
                      <Maximize className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <Play className="h-10 w-10 text-white ml-1" />
                    </div>
                    <p className="text-lg font-semibold">Click to start 360° tour</p>
                    <p className="text-sm text-blue-200 mt-2">Drag to look around • Click hotspots to navigate</p>
                  </div>

                  {/* Simulated 360 view elements */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 right-8 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 left-1/3 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tour Navigation */}
          <div className="space-y-6">
            <Card className="bg-black/20 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Tour Locations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Main Entrance",
                  "Academic Block",
                  "Library",
                  "Computer Labs",
                  "Engineering Labs",
                  "Auditorium",
                  "Sports Complex",
                  "Hostel Facilities",
                  "Cafeteria",
                  "Administrative Block",
                ].map((location, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start text-left text-white hover:bg-white/10"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {location}
                  </Button>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-black/20 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-blue-200">Campus Area</span>
                  <span className="text-white font-semibold">100+ Acres</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Buildings</span>
                  <span className="text-white font-semibold">25+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Laboratories</span>
                  <span className="text-white font-semibold">50+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Classrooms</span>
                  <span className="text-white font-semibold">200+</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
