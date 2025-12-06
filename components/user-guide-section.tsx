"use client"

import { Home, Calendar, Briefcase, CheckCircle, ArrowRight, Lightbulb } from "lucide-react"
import { useState } from "react"

const guides = [
  {
    number: "01",
    title: "Explore Properties",
    description: "Browse through our extensive collection of premium residential and commercial properties in Nagpur.",
    icon: Home,
    emoji: "🏠",
    details: [
      "Visit our website and create an account",
      "Filter properties by location, price, and amenities",
      "Save your favorite properties to a wishlist",
    ],
  },
  {
    number: "02",
    title: "Schedule Site Visit",
    description: "Book a personalized site visit with our expert consultants to experience the property firsthand.",
    icon: Calendar,
    emoji: "📅",
    details: [
      "Select your preferred date and time",
      "Our team will confirm your visit within 24 hours",
      "Receive directions and consultant contact details",
    ],
  },
  {
    number: "03",
    title: "Consultation & Financing",
    description: "Get expert advice on financing options and investment benefits from our experienced team.",
    icon: Briefcase,
    emoji: "💼",
    details: [
      "Discuss investment strategies with our experts",
      "Explore various financing and payment options",
      "Get personalized financial advice",
    ],
  },
  {
    number: "04",
    title: "Complete Purchase",
    description: "Finalize your investment with our transparent and hassle-free documentation process.",
    icon: CheckCircle,
    emoji: "✅",
    details: [
      "Sign all required legal documents",
      "Complete payment processing",
      "Receive your property documentation",
    ],
  },
]

export   function UserGuideSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="user-guide" className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            <Lightbulb className="w-4 h-4 text-secondary" />
            <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
              User Guide
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Your Journey to Ownership
          </h2>
          <p className="text-secondary text-sm sm:text-base max-w-2xl mx-auto">
            Follow our simple 4-step process to own your dream property
          </p>
        </div>

        {/* Timeline Layout - Desktop and Tablet */}
        <div className="hidden md:block relative mb-16">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-20"></div>
          
          <div className="grid grid-cols-4 gap-4 lg:gap-6">
            {guides.map((guide, index) => {
              const Icon = guide.icon
              const isHovered = hoveredIndex === index
              
              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Card */}
                  <div className={`relative bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-300 ${
                    isHovered ? 'border-primary shadow-2xl -translate-y-2' : 'border-white/40'
                  }`}>
                    
                    {/* Step Number - Centered at Top */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                      <div className="relative">
                        <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl transition-transform duration-300 ${
                          isHovered ? 'scale-110' : ''
                        }`}>
                          <span className="text-white font-black text-2xl">{guide.number}</span>
                        </div>
                        {/* Pulse ring */}
                        {isHovered && (
                          <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></div>
                        )}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-4 mt-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isHovered ? 'scale-110 rotate-6' : ''
                    }`}>
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-primary mb-3 text-center">
                      {guide.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-primary/70 leading-relaxed text-center mb-4">
                      {guide.description}
                    </p>

                    {/* Details List */}
                    <div className="space-y-2">
                      {guide.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-xs text-primary/80 leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Arrow to next */}
                    {index < guides.length - 1 && (
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <ArrowRight className="w-6 h-6 text-primary/40" />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Cards - Stacked */}
        <div className="md:hidden space-y-6 mb-12">
          {guides.map((guide, index) => {
            const Icon = guide.icon
            
            return (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < guides.length - 1 && (
                  <div className="absolute left-6 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary opacity-30 -mb-6"></div>
                )}
                
                <div className="flex gap-4">
                  {/* Left: Number Circle */}
                  <div className="flex-shrink-0">
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                      <span className="text-white font-black text-lg">{guide.number}</span>
                    </div>
                  </div>

                  {/* Right: Card */}
                  <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-2xl p-5 border-2 border-white/40 shadow-lg">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-base font-bold text-primary flex-1">
                        {guide.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-primary/70 leading-relaxed mb-4">
                      {guide.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2 bg-primary/5 rounded-xl p-3">
                      <p className="text-xs font-semibold text-primary mb-2">Steps:</p>
                      {guide.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-xs text-primary/80 leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quick Tips - Grid Layout */}
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border-2 border-primary/30 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary">
              Pro Tips for Success
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "💡",
                title: "Compare Properties",
                desc: "Visit multiple properties at different times of the day to make an informed decision."
              },
              {
                icon: "🎯",
                title: "Legal Review",
                desc: "Review all documents carefully and consult with our experts for clarifications."
              },
              {
                icon: "📚",
                title: "Expert Support",
                desc: "Our support team is available 24/7 to assist you throughout your journey."
              }
            ].map((tip, index) => (
              <div key={index} className="group p-5 rounded-2xl bg-white/30 border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h4 className="text-base font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {tip.title}
                </h4>
                <p className="text-sm text-primary/70 leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}