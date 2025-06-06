import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function OwnerSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership & Vision</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionary leaders who have shaped LNCT Group into a premier educational institution
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="text-center p-8 hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <img
                  src="/images/jainarainchouksey.jpeg?height=128&width=128"
                  alt="Chairman"
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr. Jai Chouksey</h3>
              <p className="text-blue-600 font-semibold mb-4">Chairman & Founder</p>
              <Quote className="h-8 w-8 text-blue-300 mx-auto mb-4" />
              <p className="text-gray-600 italic">
                "Education is the foundation of progress. Our mission is to create leaders who will shape the future of
                our nation."
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <img
                  src="/images/choukseymam.jpeg?height=128&width=128"
                  alt="Director"
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mrs.Poonam Chouksey</h3>
              <p className="text-green-600 font-semibold mb-4">Vice Chairperson</p>
              <Quote className="h-8 w-8 text-green-300 mx-auto mb-4" />
              <p className="text-gray-600 italic">
                "We believe in nurturing not just academic excellence but also character and values that last a
                lifetime."
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <img
                  src="/images/anupamchouksey.jpeg?height=128&width=128"
                  alt="Vice Chairman"
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr.Anupam Chouksey</h3>
              <p className="text-purple-600 font-semibold mb-4">Secretary</p>
              <Quote className="h-8 w-8 text-purple-300 mx-auto mb-4" />
              <p className="text-gray-600 italic">
                "Innovation and technology are the pillars of modern education. We strive to stay ahead of the curve."
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-white/80 backdrop-blur">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Legacy</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a vision to transform the educational landscape of Central India, LNCT Group has grown from
                a single institution to a comprehensive educational ecosystem. Under the leadership of the Chouksey
                family, we have consistently maintained our commitment to excellence, innovation, and social
                responsibility. Our journey of over two decades reflects our dedication to creating future leaders and
                contributing to the nation's progress.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
