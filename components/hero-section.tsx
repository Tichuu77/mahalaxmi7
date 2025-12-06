"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, MapPin, Award, TrendingUp, Phone, Building2, Users, CheckCircle, Sparkles } from "lucide-react"

export default function HeroSection() {
  const videoRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const script = document.createElement('script')
    script.src = 'https://unpkg.com/cloudinary-video-player@1.10.6/dist/cld-video-player.min.js'
    script.async = true
    document.body.appendChild(script)

    const link = document.createElement('link')
    link.href = 'https://unpkg.com/cloudinary-video-player@1.10.6/dist/cld-video-player.min.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    script.onload = () => {
      if (window.cloudinary && videoRef.current) {
        window.cloudinary.videoPlayer('cloudinary-player', {
          cloud_name: 'dxujnm2sl',
          publicId: 'Mahalaxmi_1_1_v6khvx',
          controls: false,
          autoplay: true,
          loop: true,
          muted: true,
          fluid: false,
          playsinline: true,
          bigPlayButton: false,
          showLogo: false,
          preload: 'auto',
        })
      }
    }

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
      if (document.head.contains(link)) document.head.removeChild(link)
    }
  }, [])

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  const locations = ['Besa', 'Beltarodi', 'Shankarpur', 'Wardha Road', 'Jamtha', 'Katol Road', 'Umred Road', 'Koradi Road', 'Samruddhi Circle']

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div ref={videoRef} className="w-full h-full">
          <video
            id="cloudinary-player"
            className="cld-video-player"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              filter: 'brightness(0.80)'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Floating Badge - Top Right */}
      <div className={`absolute top-8 right-8 z-20 transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
        <div className="bg-primary/95 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl border border-white/30 rotate-3 hover:rotate-0 transition-transform duration-300">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-foreground" />
            <div className="text-foreground">
              <div className="text-xs font-bold uppercase tracking-wider">RERA Approved</div>
              <div className="text-[10px] opacity-80">NMRDA Certified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Bottom Positioned */}
      <div className="relative z-10 w-full pb-16 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Title Section - Diagonal Layout */}
          <div className="mb-12">
            <div className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <div className="inline-block transform -skew-x-6 bg-gradient-to-r from-primary to-secondary px-8 py-3 mb-6">
                <h2 className="text-primary text-sm font-bold uppercase tracking-widest skew-x-6">
                  Nagpur's Trusted Name
                </h2>
              </div>
              
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-4">
                <span className="block text-primary drop-shadow-lg">MAHALAXMI</span>
                <span className="block text-secondary text-6xl sm:text-8xl lg:text-9xl -mt-2 drop-shadow-lg">INFRA</span>
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <p className="text-xl sm:text-2xl text-primary font-light italic">
                  Where Dreams Take Shape
                </p>
              </div>
            </div>
          </div>

          {/* Three Column Info Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            
            {/* Special Offer - Spans 2 on large screens */}
            <div className={`lg:col-span-2 bg-gradient-to-br from-secondary to-secondary/80 rounded-3xl p-8 shadow-2xl border border-white/20 transition-all duration-1000 delay-200 hover:scale-[1.02] ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="bg-primary/30 p-4 rounded-2xl">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-primary/70 text-sm uppercase tracking-wider mb-1">Exclusive Launch Offer</div>
                    <h3 className="text-primary font-black text-3xl mb-2">₹22 Lakh Only</h3>
                    <p className="text-primary/90 text-base">Premium Plots at Samruddhi Circle</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleScrollToSection("contact")}
                  className="group bg-primary hover:bg-primary/90 text-foreground px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all duration-300 shadow-xl whitespace-nowrap"
                >
                  Enquire Now
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Stats Card */}
            <div className={`bg-black/60 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-primary/30 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <h4 className="text-primary/80 text-sm uppercase tracking-wider mb-4">Our Legacy</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-tcol" />
                  <div>
                    <div className="text-3xl font-black text-tcol">15+</div>
                    <div className="text-xs text-primary/70">Completed Projects</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-tcol" />
                  <div>
                    <div className="text-3xl font-black text-tcol">500+</div>
                    <div className="text-xs text-primary/70">Satisfied Families</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-tcol" />
                  <div>
                    <div className="text-3xl font-black text-tcol">100%</div>
                    <div className="text-xs text-primary/70">Legal Compliance</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations - Spans full width */}
            <div className={`lg:col-span-3 bg-black/40 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/10 transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="bg-tcol/20 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-tcol" />
                  </div>
                  <div>
                    <h4 className="text-primary font-bold text-lg">Strategic Locations</h4>
                    <p className="text-primary/70 text-sm">Across Nagpur Metropolitan</p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {locations.map((loc, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-primary/90 hover:bg-white/20 transition-colors duration-200 cursor-default border border-white/10">
                        {loc}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Buttons Row */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <button 
              onClick={() => handleScrollToSection("contact")}
              className="group bg-primary hover:bg-primary/90 text-foreground px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Phone size={22} />
              <span>Schedule Site Visit</span>
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => handleScrollToSection("projects")}
              className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-primary px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl border border-white/30 transition-all duration-300 hover:scale-105"
            >
              Explore Projects
            </button>
          </div>

        </div>
      </div>

      {/* Decorative Corner Element */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/20 to-transparent rounded-tr-full -z-10"></div>

    </section>
  )
}

declare global {
  interface Window {
    cloudinary: {
      videoPlayer: (elementId: string, options: any) => any;
    };
  }
}