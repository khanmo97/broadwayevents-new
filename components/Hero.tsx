"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="flex items-start bg-luxury-gradient pt-4 md:pt-6">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="mt-1 md:pt-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-darkWarmGray mb-6 leading-tight tracking-wider">
              Elegant Events
              <span className="block text-gold uppercase tracking-widest">Made Simple</span>
            </h1>
            <p className="text-base sm:text-lg text-warmGray mb-8 leading-relaxed max-w-lg">
              Create unforgettable moments at Broadway Events in Garland, Texas. Our clean, elegant venue provides the
              perfect backdrop for your special occasions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="#contact"
                className="bg-gold hover:bg-goldDark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-gold hover:shadow-gold-glow transform hover:scale-105"
              >
                Plan Your Event
              </Link>
              <Link
                href="#gallery"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-gold"
              >
                View Gallery
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center p-4 bg-champagne/50 backdrop-blur-sm rounded-lg border border-gold/20 shadow-gold hover:shadow-gold-glow hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-gold mb-1">100<span className="text-gold">+</span></div>
                <div className="text-sm text-warmGray">Guests</div>
              </div>
              <div className="text-center p-4 bg-champagne/50 backdrop-blur-sm rounded-lg border border-gold/20 shadow-gold hover:shadow-gold-glow hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-gold mb-1">500<span className="text-gold">+</span></div>
                <div className="text-sm text-warmGray">Events</div>
              </div>
              <div className="text-center p-4 bg-champagne/50 backdrop-blur-sm rounded-lg border border-gold/20 shadow-gold hover:shadow-gold-glow hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-gold mb-1">5.0<span className="text-gold">★</span></div>
                <div className="text-sm text-warmGray">Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-gold/20 to-goldLight/20 rounded-lg blur-lg opacity-50"></div>
            <Image
              src="/images/gallery/event-table-flower.jpg"
              alt="Classic floral centerpiece at Broadway Events"
              width={600}
              height={500}
              className="w-full h-80 md:h-96 object-cover rounded-lg shadow-gold relative"
              priority
            />
            <div className="absolute bottom-4 right-4 bg-ivory/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-gold shadow-gold">
              <span className="text-sm font-bold text-gold uppercase tracking-wider">✨ Luxury Venue</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
