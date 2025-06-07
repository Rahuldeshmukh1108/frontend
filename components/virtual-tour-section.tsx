"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Maximize,
  MapPin,
  
  Building,
 
  Loader2,
 
  Eye,
} from "lucide-react"

export default function VirtualTourSection() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
 
  const tourUrl = "https://tour.lnct.ac.in/LNCT/"


  const stats = [
    { label: "Campus Area", value: "100+", unit: "Acres", icon: MapPin },
    { label: "Academic Blocks", value: "8+", unit: "Buildings", icon: Building },
    { label: "Laboratories", value: "50+", unit: "Labs", icon: Building },
  
  ]

  

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const handleExternalLink = () => {
    window.open(tourUrl, "_blank")
  }

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-6">
              <Eye className="h-4 w-4 text-cyan-400 animate-pulse" />
              <span className="text-sm text-cyan-300">Live Virtual Experience</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              360° Virtual Campus Tour
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Experience our state-of-the-art LNCT campus facilities with an immersive virtual journey through our
              world-class infrastructure and learning environments.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-300px)] min-h-[600px]">
            {/* Virtual Tour Viewer - Takes 3 columns */}
            <div className="lg:col-span-3 space-y-4">
              <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl h-full flex flex-col">
                <CardHeader className="pb-4">
                  <CardTitle className="text-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xl">Interactive LNCT Campus Tour</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handleFullscreen}
                        className="border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                      >
                        <Maximize className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handleExternalLink}
                        className="border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pb-4">
                  <div className="relative h-full rounded-xl overflow-hidden group">
                    {isLoading && (
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm flex items-center justify-center z-10">
                        <div className="text-center">
                          <Loader2 className="h-12 w-12 text-cyan-400 animate-spin mx-auto mb-4" />
                          <p className="text-lg font-semibold text-white">Loading Virtual Tour...</p>
                          <div className="w-48 h-2 bg-white/20 rounded-full mt-4 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-loading-bar"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <iframe
                      src={tourUrl}
                      className="w-full h-full border-0 transition-all duration-500 group-hover:scale-[1.02]"
                      allowFullScreen
                      title="LNCT Virtual Campus Tour"
                      loading="lazy"
                      onLoad={() => setIsLoading(false)}
                    />
                 
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Takes 1 column */}
            <div className="space-y-4 h-full overflow-y-auto custom-scrollbar">
             

              {/* Campus Stats */}
              <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-xl">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Building className="h-5 w-5 text-purple-400" />
                    Campus Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-300 group hover:scale-105"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                            <IconComponent className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-slate-300 text-sm">{stat.label}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">{stat.value}</div>
                          <div className="text-slate-400 text-xs">{stat.unit}</div>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>

              {/* Tour Controls */}
              <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-xl">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    onClick={handleExternalLink}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open in New Tab
                  </Button>
                  <Button
                    onClick={handleFullscreen}
                    variant="outline"
                    className="w-full border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                  >
                    <Maximize className="h-4 w-4 mr-2" />
                    Fullscreen View
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black animate-fade-in">
          <div className="absolute top-4 right-4 z-10">
            <Button
              onClick={handleFullscreen}
              variant="outline"
              size="sm"
              className="bg-black/50 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
            >
              ✕ Close Fullscreen
            </Button>
          </div>
          <iframe
            src={tourUrl}
            className="w-full h-full border-0"
            allowFullScreen
            title="LNCT Virtual Campus Tour - Fullscreen"
          />
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

        @keyframes loading-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </>
  )
}
