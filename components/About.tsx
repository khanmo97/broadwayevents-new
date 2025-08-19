"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    "Spacious hall for 100+ guests",
    "Round tables and elegant seating",
    "Professional sound system",
    "6-foot rectangle serving tables",
    "Flexible lighting control",
    "Dedicated parking",
    "Professional coordination",
    "Custom decoration options",
  ]

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-black">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-700 ${isVisible ? "animate-fade-in-left" : "opacity-0 -translate-x-4"}`}
          >
            <div className="inline-block mb-4">
              <div className="h-1 w-16 bg-gradient-to-r from-metallicGold to-neonGold rounded-full"></div>
              <h2 className="font-playfair text-4xl font-bold text-white mt-6 tracking-wider">
                Why Choose <span className="text-metallicGold uppercase">Broadway Events</span>
              </h2>
            </div>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Located in Garland, Texas, we've been creating memorable events for over a decade. Our venue combines
              modern amenities with elegant simplicity.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 border border-metallicGold rounded-xl bg-darkGray hover:shadow-gold hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-white mb-2 uppercase tracking-wider">Award Winning</div>
                <div className="text-sm text-gray-400">
                  Best Venue <span className="text-metallicGold font-bold">2023</span>
                </div>
              </div>
              <div className="text-center p-6 border border-metallicGold rounded-xl bg-darkGray hover:shadow-gold hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-white mb-2 uppercase tracking-wider">Expert Team</div>
                <div className="text-sm text-gray-400">
                  Professional <span className="text-metallicGold font-bold">Staff</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${isVisible ? "animate-fade-in-right" : "opacity-0 translate-x-4"}`}
          >
            <div className="gold-card clean-card rounded-xl p-8 bg-darkGray border border-metallicGold shadow-gold">
              <h3 className="font-playfair text-2xl font-semibold text-white mb-6 uppercase tracking-wider">What's Included</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <CheckCircle className="h-5 w-5 text-metallicGold flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
