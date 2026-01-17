"use client"

import { useEffect, useState } from "react"
import { Award, Users, Building2, CheckCircle2, TrendingUp, Shield, Home, Target } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0, sqft: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            animateCounters()
          }
        })
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById("about")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const targets = { projects: 67, clients: 17000, years: 13, sqft: 500 }
    const duration = 2000
    const steps = 60
    const increment = duration / steps

    let current = { projects: 0, clients: 0, years: 0, sqft: 0 }

    const timer = setInterval(() => {
      current.projects = Math.min(current.projects + targets.projects / steps, targets.projects)
      current.clients = Math.min(current.clients + targets.clients / steps, targets.clients)
      current.years = Math.min(current.years + targets.years / steps, targets.years)
      current.sqft = Math.min(current.sqft + targets.sqft / steps, targets.sqft)

      setCounters({
        projects: Math.floor(current.projects),
        clients: Math.floor(current.clients),
        years: Math.floor(current.years),
        sqft: Math.floor(current.sqft)
      })

      if (
        current.projects >= targets.projects &&
        current.clients >= targets.clients &&
        current.years >= targets.years &&
        current.sqft >= targets.sqft
      ) {
        clearInterval(timer)
        setCounters(targets)
      }
    }, increment)
  }

  const stats = [
    { value: counters.projects, suffix: "+", label: "Projects", icon: Building2 },
    { value: counters.clients, suffix: "+", label: "Happy Families", icon: Users },
    { value: counters.years, suffix: "+", label: "Years", icon: Award },
    { value: counters.sqft, suffix: "K+", label: "Sq.Ft", icon: TrendingUp }
  ]

  const features = [
    { icon: Award, title: "Premium Quality", desc: "Top-grade materials" },
    { icon: Shield, title: "Fully Legal", desc: "100% documentation" },
    { icon: Target, title: "Prime Locations", desc: "Strategic spots" },
    { icon: Home, title: "Modern Design", desc: "Contemporary style" }
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            <div className="w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse" />
            <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
              About Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3">
            Building Dreams Into Reality
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Split Layout - Image Left, Content Right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
          
          {/* Left: Image Section */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="/aboutUs.webp" 
                alt="Mahalaxmi Developers" 
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* RERA Badge */}
              <div className="absolute top-4 right-4 bg-primary rounded-full px-4 py-2 flex items-center gap-2 shadow-xl">
                <Award className="w-4 h-4 text-foreground" />
                <span className="text-xs font-bold text-foreground">RERA</span>
              </div>

              {/* Stats Grid Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat, idx) => {
                    const Icon = stat.icon
                    return (
                      <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
                        <Icon className="w-5 h-5 text-tcol mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white drop-shadow-lg">
                          {stat.value}{stat.suffix}
                        </div>
                        <div className="text-xs text-white/90">{stat.label}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content Section */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            
            {/* Description */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-primary leading-relaxed">
                With over <span className="text-secondary font-semibold">13 years of excellence</span> in real estate, Mahalaxmi Infra has established itself as a trusted name in Nagpur. We specialize in creating premium residential and commercial properties that combine quality, location, and value.
              </p>
              <p className="text-base sm:text-lg text-primary leading-relaxed">
                Our commitment to transparency, legal compliance, and customer satisfaction has helped over 1000 families find their dream properties across Nagpur's prime locations.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div 
                    key={idx} 
                    className="bg-white border border-gray-200 rounded-xl p-5 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.desc}</p>
                  </div>
                )
              })}
            </div>

            {/* CTA Button */}
            <div>
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                View Our Projects
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className={`flex flex-wrap justify-center items-center gap-6 pt-8 border-t border-gray-200 transition-all duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="flex items-center gap-2 text-primary">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">NMRDA Sanctioned</span>
          </div>
          <div className="w-px h-6 bg-gray-300"></div>
          <div className="flex items-center gap-2 text-primary">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-medium">RERA Approved</span>
          </div>
          <div className="w-px h-6 bg-gray-300"></div>
          <div className="flex items-center gap-2 text-primary">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">ISO Certified</span>
          </div>
        </div>
      </div>
    </section>
  )
}