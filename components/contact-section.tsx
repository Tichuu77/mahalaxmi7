"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Check } from "lucide-react"

export default function ContactMobileCompact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
      return
    }
    setStatus("sending")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setStatus("idle"), 5000)
      } else throw new Error()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Soft Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">Say Hello</h2>
          <p className="text-secondary text-lg">We’re here to help you 24×7</p>
        </div>

        {/* Contact Cards – Now 2 per row on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {/* Call Card */}
          <a
            href="tel:+917766768334"
            className="group flex flex-col items-center p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-primary/40 transition-all hover:scale-105"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-3">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <span className="text-primary font-bold text-sm">Call Us</span>
            <span className="text-secondary font-black text-lg mt-1">+917766768334</span>
          </a>

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/+917766768334"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-5 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-2xl border border-green-500/30 hover:border-green-500/60 transition-all hover:scale-105"
          >
            <div className="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center mb-3">
              <span className="text-white font-black text-xl">W</span>
            </div>
            <span className="text-primary font-bold text-sm">WhatsApp</span>
            <span className="text-green-600 font-black text-lg mt-1">Chat Now</span>
          </a>

          {/* Location Card */}
          <div className="group flex flex-col items-center p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-3">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <span className="text-primary font-bold text-sm">Visit Us</span>
            <span className="text-secondary font-black text-base text-center mt-1">Nagpur,<br />Maharashtra</span>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-6 md:p-8">
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex-center mx-auto mb-5">
                <Check className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-black text-primary mb-2">Thank You!</h3>
              <p className="text-secondary">We’ll contact you within 2 hours</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                  className="px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-primary placeholder:text-primary/50 focus:border-primary focus:outline-none text-base transition-all"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  required
                  className="px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-primary placeholder:text-primary/50 focus:border-primary focus:outline-none text-base transition-all"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject *"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-primary placeholder:text-primary/50 focus:border-primary focus:outline-none text-base transition-all"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your Message *"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-primary placeholder:text-primary/50 focus:border-primary focus:outline-none text-base transition-all resize-none"
              />

              {status === "error" && (
                <p className="text-red-400 text-sm text-center bg-red-500/10 py-3 rounded-xl">
                  Please fill all fields
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-5 bg-gradient-to-r from-primary to-secondary text-white font-black text-lg rounded-2xl shadow-xl hover:scale-[1.02] active:scale-98 transition-all duration-300 flex-center gap-3 disabled:opacity-70"
              >
                {status === "sending" ? "Sending..." : <>Send Message <Send className="w-6 h-6" /></>}
              </button>
            </form>
          )}
        </div>

        {/* Trust Line */}
        <p className="text-center mt-8 text-secondary/80 text-sm">
          Response in less than 2 hours • Free site visit • 100% secure
        </p>
      </div>
    </section>
  )
}