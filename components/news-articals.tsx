"use client"

import { useState } from "react"
import { Calendar, User, ChevronDown, ChevronUp, Newspaper } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    title: "Mahalaxmi Launches New Luxury Residential Complex",
    excerpt: "Introducing our latest project featuring smart homes and sustainable living spaces in the heart of the city.",
    fullContent: "The Mahalaxmi Luxury Residential Complex marks a new milestone in sustainable architecture. Each unit is designed with eco-conscious materials, smart home integration, and green terraces for a natural lifestyle. Residents can enjoy modern amenities, lush gardens, and easy access to urban hotspots. This launch redefines urban luxury with purpose and sustainability at its core.",
    date: "March 15, 2025",
    author: "Mahalaxmi Team",
    category: "Project Launch",
    image: "/luxury-residential-complex.png",
  },
  {
    id: 2,
    title: "Sustainable Development: Our Commitment to Green Living",
    excerpt: "Learn how Mahalaxmi Infra is pioneering eco-friendly construction practices and green spaces.",
    fullContent: "At Mahalaxmi Infra, sustainability isn't just a trend — it's a commitment. From solar energy integration to rainwater harvesting, every project embraces green building standards. Our mission is to create living spaces that harmonize with nature while minimizing carbon footprint, offering a healthier and cleaner future for generations to come.",
    date: "March 10, 2025",
    author: "Sustainability Team",
    category: "Sustainability",
    image: "/green-sustainable-residential-development.jpg",
  },
  {
    id: 3,
    title: "Customer Success Story: From Dream to Reality",
    excerpt: "Meet the families who found their perfect home with Mahalaxmi. Read their inspiring stories.",
    fullContent: "For many families, Mahalaxmi projects have turned their dream homes into reality. Our customer-first approach ensures personalized experiences — from choosing the right floor plan to post-possession support. Their heartfelt testimonials remind us why we build not just homes, but lifelong happiness.",
    date: "March 5, 2025",
    author: "Marketing Team",
    category: "Success Stories",
    image: "/happy-family-new-home.jpg",
  },
]

export default function NewsTimeline() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="news" className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full border-2 border-primary/30 mb-6">
            <Newspaper className="w-5 h-5 text-secondary" />
            <span className="text-primary font-black text-sm uppercase tracking-wider">
              From The Desk
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-4">
            Latest News & Insights
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Updates, launches, and stories that shape the future of living in Nagpur
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent -translate-x-1/2 hidden md:block" />

          {newsArticles.map((article, index) => {
            const isExpanded = expandedId === article.id
            const isEven = index % 2 === 0

            return (
              <div
                key={article.id}
                className={`relative mb-16 md:mb-24 flex flex-col md:flex-row items-start gap-8 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 bg-gradient-to-br from-primary to-secondary rounded-full ring-8 ring-background shadow-lg z-10" />

                {/* Date Badge (Mobile & Desktop) */}
                <div className="md:w-5/12 flex md:justify-end">
                  <div className="bg-primary/10 border border-primary/30 rounded-2xl px-5 py-3">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                  </div>
                </div>

                {/* Article Card */}
                <div className="md:w-7/12 ml-16 md:ml-0">
                  <article
                    onClick={() => toggleExpand(article.id)}
                    className={`group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-primary/10 ${
                      isExpanded ? "ring-4 ring-primary/30" : ""
                    }`}
                  >
                    {/* Image + Category */}
                    <div className="relative h-56 md:h-64 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                      {/* Floating Category */}
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-black uppercase tracking-wider rounded-full shadow-2xl">
                          {article.category}
                        </span>
                      </div>

                      {/* Author */}
                      <div className="absolute bottom-4 left-6 flex items-center gap-2 text-white/90">
                        <User className="w-4 h-4" />
                        <span className="text-sm font-medium">{article.author}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 group-hover:text-secondary transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-primary/70 text-base leading-relaxed mb-6">
                        {article.excerpt}
                      </p>

                      {/* Expandable Content */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-primary/80 text-base leading-relaxed pt-4 border-t border-primary/20">
                          {article.fullContent}
                        </p>
                      </div>

                      {/* Read More / Less */}
                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-primary/10">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleExpand(article.id)
                          }}
                          className="flex items-center gap-3 text-secondary font-bold hover:text-primary transition-colors"
                        >
                          {isExpanded ? (
                            <>
                              Show Less <ChevronUp className="w-5 h-5" />
                            </>
                          ) : (
                            <>
                              Read Full Article <ChevronDown className="w-5 h-5" />
                            </>
                          )}
                        </button>

                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 group-hover:opacity-40 transition-opacity" />
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-20">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border-2 border-primary/30">
            <p className="text-primary font-semibold">More stories coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  )
}