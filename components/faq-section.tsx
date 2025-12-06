"use client"

import { useState } from "react"
import { ChevronDown, Home, IndianRupee, ShieldCheck, Handshake, CalendarCheck, Trees, Phone } from "lucide-react"

const faqs = [
  { q: "What types of plots do you offer?", a: "Residential & commercial plots in prime Nagpur locations – Besa, Wardha Road, Jamtha, etc. All NMRDA + RERA approved.", icon: Home },
  { q: "Price range?", a: "Starting from just ₹22 Lakh. Flexible plans & up to 90% bank loan available.", icon: IndianRupee },
  { q: "Are projects legally clear?", a: "100% RERA registered & NMRDA sanctioned. Zero risk, full transparency.", icon: ShieldCheck },
  { q: "Finance options?", a: "Bank loans, EMI plans & in-house financing. We guide you at every step.", icon: Handshake },
  { q: "How to visit site?", a: "Just WhatsApp or call us – we’ll arrange free site visit in 24 hrs!", icon: CalendarCheck },
  { q: "What amenities?", a: "Wide roads, street lights, gardens, security, water & electricity – fully developed layouts.", icon: Trees },
]

export   function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Cute Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-5 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-5 w-56 h-56 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto px-5">
        {/* Header – Short & Sweet */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
            Got Questions?
          </h2>
          <p className="text-secondary text-lg">We’ve got quick answers</p>
        </div>

        {/* Compact FAQ Cards */}
        <div className="space-y-4">
          {faqs.map((item, i) => {
            const Icon = item.icon
            const isOpen = open === i

            return (
              <div
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-400 ${
                  isOpen ? "shadow-2xl shadow-primary/20" : "shadow-md"
                }`}
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 ${isOpen ? "bg-gradient-to-r from-primary to-secondary opacity-20" : ""}`} />
                
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl flex justify-center items-center shrink-0 transition-all duration-300 ${
                        isOpen 
                          ? "bg-gradient-to-br from-primary to-secondary text-white shadow-xl scale-110" 
                          : "bg-primary/10 text-primary"
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Question */}
                      <h3 className="text-primary font-bold text-base md:text-lg pt-1.5 pr-8">
                        {item.q}
                      </h3>
                    </div>

                    {/* Chevron */}
                    <ChevronDown className={`w-6 h-6 text-primary transition-transform duration-500 mt-1.5 ${
                      isOpen ? "rotate-180" : ""
                    }`} />
                  </div>

                  {/* Answer – Slides in smoothly */}
                  <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-40 mt-4" : "max-h-0"}`}>
                    <p className="text-primary/80 text-sm md:text-base leading-relaxed pl-16 pr-4">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Cute CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border-2 border-primary/30 shadow-xl">
            <p className="text-primary font-bold text-lg mb-4">
              Still confused?
            </p>
            <a
              href="https://wa.me/917766768334"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-black rounded-2xl hover:scale-105 transition-transform shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}