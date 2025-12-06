"use client"

import { Check, Zap, Trophy, Users, Heart, Lightbulb, Star, TrendingUp, Shield, Award } from "lucide-react"

const reasons = [
  {
    icon: Trophy,
    title: "Proven Excellence",
    description: "Award-winning solutions trusted by industry leaders",
    stat: "10+",
    statLabel: "Years"
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Cutting-edge technology and forward-thinking approach",
    stat: "100%",
    statLabel: "Quality"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals with years of experience",
    stat: "50+",
    statLabel: "Experts"
  },
  {
    icon: Heart,
    title: "Customer Focused",
    description: "Your satisfaction is our top priority always",
    stat: "500+",
    statLabel: "Happy Clients"
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description: "Tailored approaches for unique challenges",
    stat: "1000+",
    statLabel: "Projects"
  },
  {
    icon: Check,
    title: "Quality Assured",
    description: "Rigorous standards and quality control processes",
    stat: "99%",
    statLabel: "Satisfaction"
  },
]

const achievements = [
  { icon: Award, label: "Industry Awards", value: "15+" },
  { icon: Shield, label: "Years Experience", value: "10+" },
  { icon: Star, label: "Client Rating", value: "4.9/5" },
  { icon: TrendingUp, label: "Growth Rate", value: "200%" },
]

export   function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full border-2 border-primary/30 shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse" />
            <span className="text-primary font-black text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em]">
              Why Choose Us
            </span>
            <div className="w-2 h-2 bg-gradient-to-br from-secondary to-primary rounded-full animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-4 md:mb-6 leading-tight px-4">
            What Makes Us
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient">
              Stand Out
            </span>
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-secondary max-w-2xl mx-auto leading-relaxed px-4">
            Experience excellence through innovation, expertise, and unwavering commitment to your success
          </p>
        </div>

        {/* Reasons Grid - Staggered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            const isEven = index % 2 === 0
            
            return (
              <div
                key={index}
                className={`group relative ${index % 3 === 1 ? 'lg:mt-8' : ''}`}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500" />
                
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/20 group-hover:border-primary/40 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl p-5 md:p-7">
                  
                  {/* Top Section */}
                  <div className="flex items-start justify-between mb-4 md:mb-5">
                    {/* Icon */}
                    <div className="relative">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      {/* Number Badge */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 md:w-7 md:h-7 rounded-lg bg-secondary text-white text-xs md:text-sm font-black flex items-center justify-center shadow-lg">
                        {index + 1}
                      </div>
                    </div>

                    {/* Stat Badge */}
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        {reason.stat}
                      </div>
                      <div className="text-[10px] md:text-xs text-primary/60 font-bold uppercase tracking-wider">
                        {reason.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-black text-primary mb-2 md:mb-3 leading-tight">
                      {reason.title}
                    </h3>
                    <p className="text-xs md:text-sm text-primary/70 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-tl from-secondary/10 to-transparent rounded-tl-full" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Achievements Banner */}
        <div className="mb-10 md:mb-16">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-[2px] md:p-[3px] rounded-2xl md:rounded-3xl">
              <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl" />
            </div>

            {/* Content */}
            <div className="relative p-6 md:p-10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <div key={index} className="text-center group cursor-pointer">
                      <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-background/50 to-primary/10 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                      </div>
                      <div className="text-2xl md:text-3xl lg:text-4xl font-black text-primary mb-1 md:mb-2">
                        {achievement.value}
                      </div>
                      <div className="text-xs md:text-sm text-secondary font-semibold">
                        {achievement.label}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Benefits - Split Design */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-8">
          
          {/* Left Card */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl md:rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500" />
            
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/20 p-6 md:p-8 shadow-xl">
              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                  <Trophy className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-primary">Proven Track Record</h3>
              </div>
              
              <ul className="space-y-3 md:space-y-4">
                {["10+ years industry experience", "500+ satisfied clients", "Industry-leading satisfaction rate"].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <span className="text-sm md:text-base text-primary/80 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Card */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-2xl md:rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500" />
            
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/20 p-6 md:p-8 shadow-xl">
              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-primary">Comprehensive Support</h3>
              </div>
              
              <ul className="space-y-3 md:space-y-4">
                {["24/7 customer support", "Regular updates & training", "Dedicated account managers"].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                    </div>
                    <span className="text-sm md:text-base text-primary/80 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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