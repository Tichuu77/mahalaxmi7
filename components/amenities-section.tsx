"use client"

import { Wifi, Dumbbell, Trees, Zap, Shield, Users } from "lucide-react"
import { useState } from "react"

const amenities = [
  {
    icon: Wifi,
    title: "Smart Home",
    description: "Advanced IoT integration",
    category: "facilities"
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art gym",
    category: "wellness"
  },
  {
    icon: Trees,
    title: "Green Spaces",
    description: "Lush landscaping",
    category: "wellness"
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "24/7 power supply",
    category: "facilities"
  },
  {
    icon: Shield,
    title: "Security",
    description: "CCTV surveillance",
    category: "facilities"
  },
  {
    icon: Users,
    title: "Community",
    description: "Social gathering spaces",
    category: "entertainment"
  },
  {
    emoji: "🏊",
    title: "Swimming Pool",
    description: "Olympic-sized pool",
    category: "wellness"
  },
  {
    emoji: "🎮",
    title: "Gaming Zone",
    description: "Indoor entertainment",
    category: "entertainment"
  },
  {
    emoji: "🧘",
    title: "Yoga & Meditation",
    description: "Wellness activities",
    category: "wellness"
  },
  {
    emoji: "🚗",
    title: "Covered Parking",
    description: "Multi-level parking",
    category: "facilities"
  },
  {
    emoji: "🎪",
    title: "Banquet Hall",
    description: "Event spaces",
    category: "entertainment"
  },
  {
    emoji: "👶",
    title: "Kids Play Area",
    description: "Safe playground",
    category: "entertainment"
  },
]

export   function AmenitiesSection() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredAmenities = amenities.filter(amenity => {
    if (activeTab === "all") return true
    return amenity.category === activeTab
  })

  return (
    <section id="amenities" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-primary/10 relative overflow-hidden">
      
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            
            {/* Left: Title Section */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
                <div className="w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse" />
                <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
                  Amenities
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3">
                Premium Lifestyle Features
              </h2>
              <p className="text-sm sm:text-base text-secondary max-w-xl">
                Experience luxury living with comprehensive facilities designed for your comfort
              </p>
            </div>

            {/* Right: Filter Tabs */}
            <div className="flex gap-2 flex-wrap md:flex-col md:items-end">
              {[
                { id: "all", label: "All Amenities" },
                { id: "wellness", label: "Wellness" },
                { id: "entertainment", label: "Entertainment" },
                { id: "facilities", label: "Facilities" }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-primary to-secondary text-foreground shadow-lg scale-105"
                      : "bg-primary/10 text-primary border border-primary/30 hover:border-primary/50 hover:shadow-md"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Amenities Bento Grid - Asymmetric Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 mb-8">
          {filteredAmenities.map((amenity, index) => {
            const Icon = amenity.icon
            // Create different sized cards for visual interest
            const spanClass = index === 0 || index === 5 ? "lg:col-span-2 lg:row-span-2" : ""
            const isLarge = index === 0 || index === 5
            
            return (
              <div
                key={index}
                className={`${spanClass} relative bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border-2 border-white/30 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
              >
                {/* Icon */}
                <div className={`${isLarge ? 'w-16 h-16 sm:w-20 sm:h-20 mb-4' : 'w-14 h-14 sm:w-16 sm:h-16 mb-3'} bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                  {amenity.emoji ? (
                    <span className={`${isLarge ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>{amenity.emoji}</span>
                  ) : (
                    <Icon className={`${isLarge ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-6 h-6 sm:w-8 sm:h-8'} text-white drop-shadow-lg`} />
                  )}
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className={`${isLarge ? 'text-base sm:text-lg' : 'text-sm sm:text-base'} font-bold text-primary mb-2 group-hover:text-secondary transition-colors drop-shadow-sm`}>
                    {amenity.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary/80 font-medium line-clamp-2">
                    {amenity.description}
                  </p>
                </div>

                {/* Decorative dot */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom Note with better styling */}
        <div className="text-center mt-10">
          <div className="inline-block px-6 py-3 bg-primary/5 rounded-full border border-primary/20">
            <p className="text-xs sm:text-sm text-secondary font-medium">
              ✨ Amenities may vary by project location
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
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