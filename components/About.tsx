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
    <section id="about" className="py-20 bg-champagne">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-darkWarmGray mb-6">
            About Broadway Studios & Events
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-warmGray mb-6 leading-relaxed">
              Welcome to Broadway Studios & Events, where elegance meets excellence in the heart of Garland, Texas. 
              Our venue is designed to create the perfect backdrop for your most cherished moments.
            </p>
            <p className="text-lg text-warmGray mb-8 leading-relaxed">
              From intimate gatherings to grand celebrations, we provide a sophisticated space that adapts to your vision. 
              Our dedicated team ensures every detail is perfect, making your event truly unforgettable.
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-warmGray">Elegant and versatile event space</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-warmGray">Professional event coordination</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-warmGray">State-of-the-art amenities</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-goldLight/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-ivory rounded-2xl p-8 border border-gold/30 shadow-gold">
              <h3 className="text-2xl font-bold text-darkWarmGray mb-4">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-darkWarmGray mb-1">Prime Location</h4>
                    <p className="text-warmGray text-sm">Conveniently located in Garland with easy access and parking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-darkWarmGray mb-1">Flexible Space</h4>
                    <p className="text-warmGray text-sm">Adaptable layout for events of all sizes and styles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-darkWarmGray mb-1">Expert Support</h4>
                    <p className="text-warmGray text-sm">Dedicated team to ensure your event runs smoothly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
