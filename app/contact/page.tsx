"use client"

import type React from "react"


import { useState, useEffect } from "react"
import Navbar from "@/components/user/navbar"
import Footer from "@/components/user/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

import { MapPin, Phone, Mail, Clock, Send, Users, MessageSquare, HeadphonesIcon, Star, Shield } from "lucide-react"
import { useToast } from "@/hooks/use-toast"


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isVisible, setIsVisible] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid"
    if (!formData.subject.trim()) errors.subject = "Subject is required"
    if (!formData.message.trim()) errors.message = "Message is required"
    else if (formData.message.length < 10) errors.message = "Message must be at least 10 characters"

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  if (!validateForm()) {
    toast({
      title: "Validation Error ❌",
      description: "Please fix the errors in the form.",
      variant: "destructive",
    })
    return
  }

  setIsSubmitting(true)

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      toast({
        title: "✅ Message Sent!",
        description: "Thank you for contacting us. We’ll get back to you soon.",
      })

      // Reset the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general",
      })
    } else {
      toast({
        title: "❌ Failed to Send",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    }
  }  catch (err: unknown) {
  console.error("Send Message Error:", err)

  toast({
    title: "❌ Error Sending Message",
    description: "Please check your internet connection or try again later.",
    variant: "destructive",
  })
}
 finally {
    setIsSubmitting(false)
  }
}



  const contactInfo = [
    {
      icon: MapPin,
      title: "Main Campus",
      details: ["Kolar Road, Bhopal", "Madhya Pradesh 462042", "India"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 755 2740800", "+91 755 2740801", "+91 755 2740802"],
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@lnct.ac.in", "admissions@lnctgroup.in", "support@lnctgroup.in"],
      color: "from-purple-500 to-pink-600",
    },
  ]

  const stats = [
    { icon: Users, label: "Students Helped", value: "50,000+", color: "from-blue-500 to-indigo-600" },
    { icon: MessageSquare, label: "Queries Resolved", value: "25,000+", color: "from-emerald-500 to-teal-600" },
    { icon: HeadphonesIcon, label: "Support Hours", value: "24/7", color: "from-purple-500 to-pink-600" },
    { icon: Star, label: "Satisfaction Rate", value: "98%", color: "from-amber-500 to-orange-600" },
  ]

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "admissions", label: "Admissions" },
    { value: "technical", label: "Technical Support" },
    { value: "partnership", label: "Partnership" },
    { value: "careers", label: "Careers" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 to-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for admissions, partnerships, or any inquiries. We are here to help you on your
              educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative -mt-12 mx-4 md:mx-8 rounded-2xl shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="group p-8 bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-slate-900">Send us a Message</CardTitle>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Fill out the form below and we will get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-700 font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`transition-all duration-300 focus:scale-105 ${formErrors.name ? "border-red-500" : ""}`}
                        placeholder="Enter your full name"
                      />
                      {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`transition-all duration-300 focus:scale-105 ${formErrors.email ? "border-red-500" : ""}`}
                        placeholder="Enter your email"
                      />
                      {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700 font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="number"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="transition-all duration-300 focus:scale-105"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType" className="text-slate-700 font-medium">
                        Inquiry Type
                      </Label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 focus:scale-105"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-slate-700 font-medium">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`transition-all duration-300 focus:scale-105 ${formErrors.subject ? "border-red-500" : ""}`}
                      placeholder="Enter subject"
                    />
                    {formErrors.subject && <p className="text-red-500 text-sm">{formErrors.subject}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`min-h-[150px] transition-all duration-300 focus:scale-105 ${formErrors.message ? "border-red-500" : ""}`}
                      placeholder="Enter your message here..."
                    />
                    {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                      <h4 className="font-medium text-slate-900 mb-2 flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-slate-600" />
                        Response Time
                      </h4>
                      <p className="text-sm text-slate-600">We typically respond within 24 hours on business days.</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                      <h4 className="font-medium text-slate-900 mb-2 flex items-center">
                        <Shield className="w-4 h-4 mr-2 text-slate-600" />
                        Privacy Assured
                      </h4>
                      <p className="text-sm text-slate-600">Your information is secure and will not be shared.</p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-slate-600 to-slate-800 hover:from-slate-700 hover:to-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-lg mt-4"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  We are always here to help. Reach out to us through any of the following channels and we will respond
                  promptly to your inquiries.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <Card
                      key={index}
                      className={`group p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300`}
                          >
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                              {info.title}
                            </h3>
                            <div className="space-y-2">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-slate-600 group-hover:text-slate-500 transition-colors">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg md:text-xl text-slate-600">Quick answers to common questions</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What are the admission requirements?",
                answer:
                  "Admission requirements vary by program. Generally, you need to meet academic criteria and pass entrance exams.",
              },
              {
                question: "How long does it take to get a response?",
                answer: "We typically respond to all inquiries within 24 hours during business days.",
              },
              {
                question: "Do you offer scholarships?",
                answer: "Yes, we offer various merit-based and need-based scholarships for eligible students.",
              },
              {
                question: "Can I visit the campus?",
                answer: "We encourage campus visits. Please contact us to schedule a tour.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="group p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
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
