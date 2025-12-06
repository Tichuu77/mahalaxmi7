"use client"

import { useEffect, useState, useRef } from "react"
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react"

const galleryItems = [
  { id: 1, src: "/gallery1.jpg", alt: "Morning View", category: "exterior" },
  { id: 2, src: "/gallery2.jpg", alt: "Well Maintained Square", category: "amenities" },
  { id: 3, src: "/gallery3.jpg", alt: "Good Entrance", category: "exterior" },
  { id: 4, src: "/gallery4.jpg", alt: "Tree covered", category: "landscape" },
  { id: 5, src: "/gallery5.jpg", alt: "Night View", category: "exterior" },
  { id: 6, src: "/gallery6.jpg", alt: "Cozy Living Space", category: "interior" },
  { id: 7, src: "/gallery7.jpg", alt: "Designer Interiors", category: "interior" },
  { id: 8, src: "/gallery8.jpg", alt: "Premium Amenities", category: "amenities" },
  { id: 9, src: "/gallery9.jpg", alt: "Swimming Pool", category: "amenities" },
  { id: 10, src: "/gallery10.jpg", alt: "Evening View", category: "exterior" },
  { id: 11, src: "/gallery11.jpg", alt: "Playground", category: "amenities" },
  { id: 12, src: "/gallery12.jpg", alt: "Top View", category: "exterior" },
]

export   function GallerySection() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const sliderRef = useRef<HTMLDivElement>(null)

  const categories = ["all", "exterior", "interior", "amenities", "landscape"]

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById("gallery")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedId !== null) {
        const currentIndex = filteredItems.findIndex(item => item.id === selectedId)
        if (e.key === "ArrowRight") {
          const newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1
          setSelectedId(filteredItems[newIndex].id)
        }
        if (e.key === "ArrowLeft") {
          const newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1
          setSelectedId(filteredItems[newIndex].id)
        }
        if (e.key === "Escape") setSelectedId(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedId, filteredItems])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  const navigateModalImage = (direction: 'prev' | 'next') => {
    if (selectedId === null) return
    const currentIndex = filteredItems.findIndex(item => item.id === selectedId)
    let newIndex
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1
    }
    setSelectedId(filteredItems[newIndex].id)
  }

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            
            {/* Left: Title */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
                <Camera className="w-4 h-4 text-secondary" />
                <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
                  Gallery
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3">
                Visual Inspiration
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>

            {/* Right: Category Filters */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveFilter(cat)
                    setCurrentSlide(0)
                  }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 capitalize ${
                    activeFilter === cat
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105"
                      : "bg-white/60 backdrop-blur-sm text-primary border-2 border-primary/30 hover:border-primary/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Grid - Stacked Cards */}
        <div className="md:hidden space-y-4">
          {filteredItems.map((item, index) => {
            const isFeature = index === 0
            
            return (
              <div
                key={item.id}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-active:opacity-20 blur-lg transition duration-300"></div>
                
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-xl ${isFeature ? 'h-96' : 'h-64'}`}
                  onClick={() => setSelectedId(item.id)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-active:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-primary uppercase tracking-wider shadow-lg">
                      {item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={`absolute ${isFeature ? 'bottom-8 left-6 right-6' : 'bottom-5 left-5 right-5'}`}>
                    <p className={`text-white font-black ${isFeature ? 'text-2xl' : 'text-xl'} mb-2 drop-shadow-2xl`}>
                      {item.alt}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                      <span className="text-white/90 text-sm font-medium">Tap to expand</span>
                    </div>
                  </div>

                  {/* Progress indicator */}
                  {isFeature && (
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Camera className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}

          {/* Load More Indicator */}
          <div className="text-center pt-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border-2 border-primary/30">
              <span className="text-primary text-sm font-semibold">{filteredItems.length} Photos</span>
            </div>
          </div>
        </div>

        {/* Desktop Grid - Alternating Heights */}
        <div className="hidden md:grid grid-cols-4 gap-4 lg:gap-6">
          {filteredItems.map((item, index) => {
            // Create different sized cards
            const isLarge = index % 7 === 0
            const isTall = index % 5 === 0 && index % 7 !== 0
            
            return (
              <div
                key={item.id}
                className={`group cursor-pointer relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  isLarge ? 'col-span-2 row-span-2 h-96' : 
                  isTall ? 'row-span-2 h-96' : 
                  'h-44'
                }`}
                onClick={() => setSelectedId(item.id)}
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition duration-500"></div>
                
                <div className="relative w-full h-full">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Content overlay */}
                  <div className={`absolute ${isLarge ? 'bottom-6 left-6 right-6' : 'bottom-4 left-4 right-4'}`}>
                    <span className="text-secondary text-xs uppercase tracking-wider block mb-1 font-semibold">
                      {item.category}
                    </span>
                    <p className={`text-white font-bold ${isLarge ? 'text-xl' : 'text-sm'} drop-shadow-lg`}>
                      {item.alt}
                    </p>
                  </div>

                  {/* Zoom icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📸</div>
            <p className="text-primary/60 text-lg">No images in this category</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedId !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedId(null)}
        >
          <div className="relative max-w-6xl w-full h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredItems.find((item) => item.id === selectedId)?.src}
              alt="Gallery"
              className="w-full h-full object-contain rounded-2xl"
            />
            
            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateModalImage('prev') }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/20 hover:bg-white rounded-full transition-all shadow-2xl hover:scale-110"
              aria-label="Previous"
            >
              <ChevronLeft size={28} className="text-primary hover:text-background" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateModalImage('next') }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/40 hover:bg-white rounded-full transition-all shadow-2xl hover:scale-110"
              aria-label="Next"
            >
              <ChevronRight size={28} className="text-primary hover:text-background" />
            </button>

            {/* Close button */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 p-3 bg-white/40 hover:bg-white rounded-full transition-all shadow-2xl hover:scale-110"
              aria-label="Close"
            >
              <X size={24} className="text-primary hover:text-background" />
            </button>

            {/* Image info */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-md rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-primary font-bold text-lg mb-1">
                    {filteredItems.find((item) => item.id === selectedId)?.alt}
                  </p>
                  <span className="text-secondary text-sm uppercase tracking-wider font-semibold">
                    {filteredItems.find((item) => item.id === selectedId)?.category}
                  </span>
                </div>
                <div className="text-sm text-primary/90">
                  {filteredItems.findIndex((item) => item.id === selectedId) + 1} / {filteredItems.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}