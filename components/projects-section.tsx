"use client"

import { useState } from "react"
import { ArrowRight, MapPin, Phone, CheckCircle, Building2, Calendar, TrendingUp } from "lucide-react"

type Project = {
  id: number
  title: string
  image: string
  description: string
  location: string
  status: string
}

const projects = {
  ongoing: [
    {
      id: 2,
      title: "Mahalaxmi Nagar-31",
      image: "/ongoingProject8.webp",
      description: "Ready to move residential layout on Besa-Pipla Road, opposite Zudio & Croma. Prime location with up to 90% bank finance.",
      location: "MOUZA - BESA",
      status: "ongoing"
    },
    {
      id: 3,
      title: "Mahalaxmi Nagar-39",
      image: "/ongoingProject5.webp",
      description: "New project on Katol Road, Fetri (Chicholi), touching Outer Ring Road. Fully developed NMRDA & RL sanctioned.",
      location: "MOUZA - FETRI",
      status: "ongoing"
    },
    {
      id: 4,
      title: "Mahalaxmi Nagar-41",
      image: "/ongoingProject3.webp",
      description: "Premium layout near Samruddhi Mahamarg with clubhouse & swimming pool. NMRDA + RL approved. Up to 90% finance.",
      location: "MOUZA - GOMGAON",
      status: "ongoing"
    },
    {
      id: 5,
      title: "Mahalaxmi Nagar - 42",
      image: "/ongoingProject2.webp",
      description: "Well-connected plots near Jamtha, Wardha Road. NMRDA & RL sanctioned with excellent amenities.",
      location: "MOUZA - JAMTHA",
      status: "ongoing"
    },
    {
      id: 6,
      title: "Mahalaxmi Nagar - 43",
      image: "/ongoingProject10.webp",
      description: "Ready-to-move plots behind Royal Gondwana School, Shankarpur. Fully developed with 90% finance.",
      location: "MOUZA - SHANKARPUR",
      status: "ongoing"
    },
    {
      id: 7,
      title: "Mahalaxmi Nagar - 45",
      image: "/ongoingProject11.webp",
      description: "Premium plotted development near Samruddhi Mahamarg, close to AIIMS, IIM, MIHAN & D-Mart.",
      location: "MOUZA - SUMTHANA",
      status: "ongoing"
    },
    {
      id: 11,
      title: "Mahalaxmi Nagar - 47",
      image: "/ongoingProject12.jpg",
      description: "New launch behind Haldiram & AM Cinema on Koradi Road. NMRDA & RL approved with 90% finance.",
      location: "KORADI ROAD (Behind Haldiram)",
      status: "ongoing"
    },
  ],
  completed: [
    {
      id: 12,
      title: "Mahalaxmi Nagar - 37",
      image: "/completedProject1.webp",
      description: "NMRDA & RL sanctioned layout in Kotewada. 75-80% bank loan approved.",
      location: "MOUZA - KOTEWADA",
      status: "completed"
    },
    {
      id: 13,
      title: "Mahalaxmi Nagar - 35",
      image: "/completedProject2.webp",
      description: "Fully delivered premium layout with all amenities completed.",
      location: "MOUZA - KOTEWADA",
      status: "completed"
    },
    {
      id: 14,
      title: "Mahalaxmi Nagar - 34",
      image: "/completedProject3.webp",
      description: "Successfully delivered project with high appreciation value.",
      location: "MOUZA - BAHADURA",
      status: "completed"
    },
  ],
  upcoming: [
    { id: 15, title: "Mahalaxmi Nagar - 48", image: "/plotDef.avif", description: "", location: "", status: "upcoming" },
    { id: 16, title: "Mahalaxmi Nagar - 49", image: "/plotDef.avif", description: "", location: "", status: "upcoming" },
    { id: 17, title: "Mahalaxmi Nagar - 50", image: "/plotDef.avif", description: "", location: "", status: "upcoming" },
  ]
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  const statusConfig = {
    completed: { color: "from-green-500 to-emerald-600", icon: CheckCircle, label: "Completed" },
    ongoing: { color: "from-blue-500 to-cyan-600", icon: TrendingUp, label: "Ongoing" },
    upcoming: { color: "from-orange-500 to-red-600", icon: Calendar, label: "Upcoming" },
  }

  const config = statusConfig[project.status as keyof typeof statusConfig]
  const StatusIcon = config.icon

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in "${project.title}" at ${project.location || 'Nagpur'}. Please share details.`
    window.open(`https://wa.me/917766768334?text=${encodeURIComponent(message)}`, "_blank")
  }

  const isReversed = index % 2 === 1

  return (
    <div
      className="group relative flex flex-col lg:flex-row bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 hover:border-primary/50 transition-all duration-500 shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image - Full width on mobile, half on large screens */}
      <div className={`relative w-full lg:w-1/2 h-64 lg:h-auto ${isReversed ? 'lg:order-last' : ''}`}>
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/10 lg:to-black/40" />

        {/* Project ID Badge */}
        <div className="absolute top-4 left-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl">
            <span className="text-white font-black text-2xl">{project.id}</span>
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${config.color} text-white shadow-lg text-xs font-bold uppercase`}>
            <StatusIcon className="w-4 h-4" />
            {config.label}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl sm:text-3xl font-black text-primary mb-3">
            {project.title}
          </h3>
          <div className="flex gap-3 mb-5">
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <div className="h-1 w-12 bg-gradient-to-r from-secondary to-transparent rounded-full" />
          </div>

          {project.location && (
            <div className="flex items-center gap-3 mb-4 text-sm">
              <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="font-semibold text-primary">{project.location}</span>
            </div>
          )}

          {project.description ? (
            <p className="text-primary/70 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
              {project.description}
            </p>
          ) : (
            <p className="text-primary/50 italic text-sm">Details coming soon...</p>
          )}

          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="flex items-center gap-2 px-4 py-3 bg-primary/10 rounded-xl border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold text-primary uppercase">NMRDA Approved</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/10 rounded-xl border border-secondary/20">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs font-bold text-secondary uppercase">90% Finance</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleWhatsApp}
          className="w-full group/btn relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-secondary p-1"
        >
          <div className={`w-full h-full bg-background rounded-2xl px-6 py-4 flex items-center justify-between transition-all duration-300 group-hover/btn:bg-opacity-0`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-primary">Get Details on WhatsApp</span>
            </div>
            <ArrowRight className="w-5 h-5 text-primary group-hover/btn:translate-x-2 transition-transform" />
          </div>
        </button>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "completed" | "ongoing" | "upcoming">("all")

  const allProjects = [...projects.ongoing, ...projects.completed, ...projects.upcoming]
  const filteredProjects = activeTab === "all" ? allProjects : allProjects.filter(p => p.status === activeTab)

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full border border-primary/30 mb-6">
            <Building2 className="w-5 h-5 text-secondary" />
            <span className="text-primary font-black text-sm uppercase tracking-wider">Our Projects</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <span className="text-primary">Premium Plots in</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Nagpur's Best Locations</span>
          </h2>
          <p className="text-secondary/80 text-lg max-w-3xl mx-auto">
            NMRDA approved • Up to 90% bank finance • Ready & upcoming projects
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {[
              { label: "All", value: "all", count: allProjects.length },
              { label: "Ongoing", value: "ongoing", count: projects.ongoing.length },
              { label: "Completed", value: "completed", count: projects.completed.length },
              { label: "Upcoming", value: "upcoming", count: projects.upcoming.length },
            ].map(tab => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value as any)}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  activeTab === tab.value
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                    : "bg-white/10 text-primary border border-primary/30 hover:bg-white/20"
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 lg:space-y-16">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))
          ) : (
            <div className="text-center py-20">
              <p className="text-6xl mb-4">Under Construction</p>
              <p className="text-xl text-primary/70">Exciting new projects launching soon!</p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-primary mb-4">
            Ready to Own Your Dream Plot?
          </h3>
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
            Limited plots available • High appreciation potential • Easy financing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/917766768334" target="_blank" rel="noopener noreferrer"
              className="px-8 py-5 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" />
              WhatsApp Now
            </a>
            <a href="#contact" className="px-8 py-5 bg-background border-2 border-primary text-primary font-bold rounded-2xl   transition-all">
              Schedule Site Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}