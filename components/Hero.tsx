"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="flex items-start bg-gradient-to-br from-white via-accent-50 to-accent-100 pt-4 md:pt-6">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "animate-fade-in-left" : "opacity-0"} mt-1 md:mt-0`}>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Elegant Events
              <span className="block gold-gradient-text">Made Simple</span>
            </h1>

            <p className="text-base sm:text-lg text-primary-600 mb-8 leading-relaxed max-w-lg">
              Create unforgettable moments at Broadway Events in Garland, Texas. Our clean, elegant venue provides the
              perfect backdrop for your special occasions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="luxury-gradient-bg hover:opacity-90 text-white px-8 py-3 shadow-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call (469) 478-9012
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gold text-primary hover:bg-gold hover:text-white px-8 py-3 bg-transparent transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Simple Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gold-200">
                <div className="text-3xl font-bold text-primary mb-1">
                  100<span className="text-gold">+</span>
                </div>
                <div className="text-sm text-primary-600">Guests</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gold-200">
                <div className="text-3xl font-bold text-primary mb-1">
                  500<span className="text-gold">+</span>
                </div>
                <div className="text-sm text-primary-600">Events</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gold-200">
                <div className="text-3xl font-bold text-primary mb-1">
                  5.0<span className="text-gold">★</span>
                </div>
                <div className="text-sm text-primary-600">Rating</div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-gold-200 via-gold-300 to-gold-400 rounded-lg blur-lg opacity-30"></div>
              <Image
                src="/images/gallery/event-table-flower.jpg"
                alt="Classic floral centerpiece at Broadway Events"
                width={600}
                height={500}
                className="w-full h-80 md:h-96 object-cover rounded-lg shadow-xl relative"
                priority
              />
              <div className="absolute bottom-4 right-4 bg-white/98 backdrop-blur-sm px-5 py-2.5 rounded-lg ring-1 ring-gold-300 shadow-xl">
                <span className="text-base md:text-lg font-semibold text-primary tracking-wide">✨ Luxury Venue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
