"use client"

import { GraduationCap, PartyPopper, Briefcase, Camera, Baby, Heart, Users, Music, Coffee, Gift } from "lucide-react"

const services = [
  {
    title: "Graduation Parties",
    description: "Celebrate academic achievements with elegant setups and professional service.",
    icon: GraduationCap,
  },
  {
    title: "Birthday Celebrations",
    description: "Make birthdays memorable with customizable decorations and festive atmosphere.",
    icon: PartyPopper,
  },
  {
    title: "Corporate Events",
    description: "Professional meeting space with modern amenities for business gatherings.",
    icon: Briefcase,
  },
  {
    title: "Photography Sessions",
    description: "Beautiful backdrops and professional lighting for stunning photo shoots.",
    icon: Camera,
  },
  {
    title: "Baby Showers",
    description: "Charming setups designed for comfort and joy in celebrating new beginnings.",
    icon: Baby,
  },
  {
    title: "Wedding Receptions",
    description: "Romantic ambiance and elegant details for your perfect wedding celebration.",
    icon: Heart,
  },
]

const additionalServices = [
  { name: "Event Planning", icon: Users },
  { name: "Audio/Visual", icon: Music },
  { name: "Catering Support", icon: Coffee },
  { name: "Decorations", icon: Gift },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-ivory">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-darkWarmGray mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full"></div>
          <p className="text-lg text-warmGray mt-6 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we provide comprehensive event services 
            to make your special day truly memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-champagne/50 backdrop-blur-sm rounded-xl p-8 border border-gold/20 shadow-gold hover:shadow-gold-glow transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gold rounded-xl flex items-center justify-center mb-6 group-hover:bg-goldDark transition-colors duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-darkWarmGray mb-4">{service.title}</h3>
              <p className="text-warmGray leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-darkWarmGray mb-6">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <span className="text-warmGray font-medium">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
