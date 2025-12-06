import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t-4 border-primary/10 relative overflow-hidden pt-16 pb-8">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2 cursor-pointer">
              <img src="/Malaxmi-Final-Logo.-2png.png" alt="Logo" className=" w-28 h-28" />
              <span
                style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
                className="font-bold text-primary text-lg"
              >
                 Mahalaxmi  Infra
              </span>
            </div>
            <p className="text-primary/60 text-sm leading-relaxed">
              Delivering premium solutions with excellence and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-8 ml-8">
            <h4
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="font-bold text-primary mb-4"
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              {[{href : "#about", label : "About"}, {href : "#amenities", label : "Amenities"}, {href : "#projects", label : "Projects"}, { label: "Gallery", href: "#gallery" }, ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-primary/60 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="mt-8 ml-8">
            <h4
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="font-bold text-primary mb-4"
            >
              Resources
            </h4>
            <ul className="space-y-2">
              {[ { label: "User Guide", href: "#user-guide" }, { label: "News", href: "#news" }, { href: "#testimonials", label: "Testimonials" }, { href: "#contact", label: "Contact" }].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-primary/60 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-8 ml-8">
            <h4
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="font-bold text-primary mb-4"
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="text-primary/60">
                Raj Wandhare
              </li>
              <li className="flex items-center gap-2 text-primary/60 text-sm">
                <Phone size={14} className="text-primary" />
               <a href="tel:+917766768334">+91 7766768334</a>
              </li>
              <li className="flex items-center gap-2 text-primary/60 text-sm">
                <Mail size={14} className="text-primary" />
                <a href="mailto:dighoriofficebranch@gmail.com">dighoriofficebranch@gmail.com</a>
              </li>
              <li className="flex items-start gap-2 text-primary/60 text-sm">
                <MapPin size={14} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="mt-0.5">
                  <span className="block">Nagpur Maharashtra India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px  bg-white/10 my-8"></div>

      
      </div>
    </footer>
  )
}
