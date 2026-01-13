"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote, MapPin, User } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "Investing in a by Maha Laxmi Infra transparent process made effortless experience. The best decision I ever made. The local transparent process made it an effortless experience.",
    name: "Rajkumar Gharjale",
    location: "Nagpur",
    image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/1-9.png",
    rating: 5,
  },
  {
    id: 2,
    content:
      "I wanted to invest in a growing area, and plots in Nagpur Besa seemed perfect. Maha Laxmi Infra exceeded my expectations. Highly recommended!",
    name: "Priya Shah",
    location: "Mumbai",
    image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/3-4.png",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Investing in residential plots with Mahalaxmi Infra was one of my best decisions. Their transparency, clear titles, and prompt assistance gave me peace of mind.",
    name: "Karan Akojwar",
    location: "Pune",
    image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/4-2.png",
    rating: 5,
  },
]

export   function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  const currentTestimonial = testimonials[current]

  return (
    <section
      id="testimonials"
      className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full border-2 border-primary/30 shadow-lg">
            <Star className="w-4 h-4 text-secondary animate-pulse" />
            <span className="text-primary font-black text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em]">
              Client Stories
            </span>
            <Star className="w-4 h-4 text-secondary animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-4 md:mb-6 leading-tight px-4">
            What Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient">
              Clients Say
            </span>
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-secondary max-w-2xl mx-auto leading-relaxed px-4">
            Real experiences from satisfied property owners who trusted us with their investment dreams
          </p>
        </div>

        {/* Main Testimonial Card - Split Layout */}
        <div className="max-w-5xl mx-auto mb-8 md:mb-12">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-700 ${
                  index === current 
                    ? "opacity-100 scale-100 relative" 
                    : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
                }`}
              >
                <div className="relative">
                  {/* Gradient Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl md:rounded-[2.5rem] opacity-30 blur-2xl" />
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl md:rounded-[2.5rem] border border-white/30 overflow-hidden shadow-2xl">
                    
                    {/* Grid Layout */}
                    <div className="grid md:grid-cols-[auto,1fr] gap-6 md:gap-8 p-6 md:p-10 lg:p-12">
                      
                      {/* Left: Profile Section */}
                      <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-6">
                        {/* Avatar with Border */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-md opacity-50" />
                          <div className="relative w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full border-4 border-white/30 overflow-hidden shadow-2xl">
                            <img
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Verified Badge */}
                          <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-7 h-7 md:w-10 md:h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center border-2 md:border-4 border-white shadow-lg">
                            <Star className="w-3 h-3 md:w-5 md:h-5 text-white fill-white" />
                          </div>
                        </div>

                        {/* Name & Location */}
                        <div className="flex-1 md:text-center">
                          <h3 className="text-lg md:text-xl lg:text-2xl font-black text-primary mb-1 md:mb-2">
                            {testimonial.name}
                          </h3>
                          <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 rounded-full border border-primary/20">
                            <MapPin className="w-3 h-3 md:w-4 md:h-4 text-secondary" />
                            <span className="text-xs md:text-sm text-primary font-semibold">
                              {testimonial.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Content Section */}
                      <div className="flex flex-col justify-between">
                        
                        {/* Quote Icon */}
                        <div className="mb-4 md:mb-6">
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                          </div>
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mb-4 md:mb-6">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star 
                              key={i} 
                              className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400" 
                              style={{ animationDelay: `${i * 0.1}s` }}
                            />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-sm md:text-base lg:text-lg text-primary/80 leading-relaxed italic mb-6 md:mb-8">
                          "{testimonial.content}"
                        </p>

                        {/* Rating Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-400/20 to-amber-500/20 rounded-xl border border-amber-400/30 w-fit">
                          <span className="text-xl md:text-2xl font-black text-amber-500">5.0</span>
                          <span className="text-xs md:text-sm text-primary/70 font-semibold">Perfect Rating</span>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 md:w-40 md:h-40 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 md:gap-6">
          
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="group relative w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
            <div className="relative w-full h-full flex items-center justify-center">
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:-translate-x-0.5 transition-transform" />
            </div>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/20">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index)
                  setAutoplay(false)
                }}
                className="relative group"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {index === current ? (
                  <div className="flex items-center gap-2">
                    <div className="w-8 md:w-10 h-2 md:h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                    <span className="hidden md:inline text-xs font-bold text-primary">
                      {index + 1}/{testimonials.length}
                    </span>
                  </div>
                ) : (
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-primary/30 group-hover:bg-primary/50 transition-all group-hover:scale-125" />
                )}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="group relative w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
            <div className="relative w-full h-full flex items-center justify-center">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </div>

        {/* Thumbnail Preview - Desktop Only */}
        <div className="hidden lg:flex items-center justify-center gap-4 mt-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => {
                setCurrent(index)
                setAutoplay(false)
              }}
              className={`group relative transition-all duration-300 ${
                index === current 
                  ? 'scale-100 opacity-100' 
                  : 'scale-90 opacity-50 hover:opacity-75 hover:scale-95'
              }`}
            >
              <div className={`w-20 h-20 rounded-2xl overflow-hidden border-3 transition-all ${
                index === current 
                  ? 'border-primary shadow-xl shadow-primary/50' 
                  : 'border-white/20'
              }`}>
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {index === current && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 md:mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
          {[
            { value: "17000+", label: "Happy Clients" },
            { value: "5.0", label: "Average Rating" },
            { value: "100%", label: "Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/20">
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-1 md:mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-primary/70 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200%;
        }
        .bg-size-200 {
          background-size: 200%;
        }
      `}</style>
    </section>
  )
}