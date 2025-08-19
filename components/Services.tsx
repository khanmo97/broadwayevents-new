"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, PartyPopper, Briefcase, Camera, Baby, Heart } from "lucide-react"

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

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, cardIndex])
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll(".service-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-black">
      <div className="container-width">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-metallicGold to-neonGold mx-auto rounded-full"></div>
            <h2 className="font-playfair text-4xl font-bold text-white mt-6 mb-4 uppercase tracking-wider">Our Services</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-neonGold to-metallicGold mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We provide elegant venues for every special occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleCards.includes(index)

            return (
              <div
                key={service.title}
                data-index={index}
                className={`service-card bg-darkGray border border-metallicGold rounded-xl p-8 text-center transition-all duration-500 group hover:shadow-gold hover:scale-105 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-metallicGold to-neonGold rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-metallicGold group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-white mb-3 group-hover:text-metallicGold transition-colors uppercase tracking-wider">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
