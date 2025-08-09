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
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-700 ${isVisible ? "animate-fade-in-left" : "opacity-0 -translate-x-4"}`}
          >
            <div className="inline-block mb-4">
              <div className="h-1 w-16 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"></div>
              <h2 className="font-playfair text-4xl font-bold text-primary mt-6">
                Why Choose <span className="gold-gradient-text">Broadway Events</span>
              </h2>
            </div>
            <p className="text-lg text-primary-600 mb-8 leading-relaxed">
              Located in Garland, Texas, we've been creating memorable events for over a decade. Our venue combines
              modern amenities with elegant simplicity.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 border-2 border-gold-200 rounded-xl bg-gradient-to-br from-gold-50 to-gold-100 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold text-primary mb-2">Award Winning</div>
                <div className="text-sm text-primary-600">
                  Best Venue <span className="text-gold font-semibold">2023</span>
                </div>
              </div>
              <div className="text-center p-6 border-2 border-gold-200 rounded-xl bg-gradient-to-br from-gold-50 to-gold-100 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold text-primary mb-2">Expert Team</div>
                <div className="text-sm text-primary-600">
                  Professional <span className="text-gold font-semibold">Staff</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${isVisible ? "animate-fade-in-right" : "opacity-0 translate-x-4"}`}
          >
            <div className="gold-card clean-card rounded-xl p-8 bg-gradient-to-br from-white to-accent-50 border-2 border-gold-200">
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-6">What's Included</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-primary-600 group-hover:text-primary transition-colors">{feature}</span>
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
