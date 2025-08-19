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
    <section className="flex items-start bg-gradient-to-br from-black via-darkGray to-lightGray pt-4 md:pt-6">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "animate-fade-in-left" : "opacity-0"} mt-1 md:pt-6`}>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-wider">
              Elegant Events
              <span className="block text-metallicGold uppercase tracking-widest">Made Simple</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
              Create unforgettable moments at Broadway Events in Garland, Texas. Our clean, elegant venue provides the
              perfect backdrop for your special occasions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-metallicGold hover:bg-darkGold text-black px-8 py-3 shadow-lg font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-gold">
                <Phone className="mr-2 h-5 w-5" />
                Call (469) 478-9012
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-metallicGold text-metallicGold hover:bg-metallicGold hover:text-black px-8 py-3 bg-transparent transition-all duration-300 font-bold uppercase tracking-wider hover:shadow-gold"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Simple Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center p-4 bg-darkGray backdrop-blur-sm rounded-lg border border-metallicGold shadow-md hover:shadow-gold hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-1">
                  100<span className="text-metallicGold">+</span>
                </div>
                <div className="text-sm text-gray-400">Guests</div>
              </div>
              <div className="text-center p-4 bg-darkGray backdrop-blur-sm rounded-lg border border-metallicGold shadow-md hover:shadow-gold hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-1">
                  500<span className="text-metallicGold">+</span>
                </div>
                <div className="text-sm text-gray-400">Events</div>
              </div>
              <div className="text-center p-4 bg-darkGray backdrop-blur-sm rounded-lg border border-metallicGold shadow-md hover:shadow-gold hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-1">
                  5.0<span className="text-metallicGold">★</span>
                </div>
                <div className="text-sm text-gray-400">Rating</div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-metallicGold/40 via-metallicGold/60 to-neonGold/50 rounded-lg blur-lg opacity-50"></div>
              <Image
                src="/images/gallery/event-table-flower.jpg"
                alt="Classic floral centerpiece at Broadway Events"
                width={600}
                height={500}
                className="w-full h-80 md:h-96 object-cover rounded-lg shadow-xl relative"
                priority
              />
              <div className="absolute bottom-4 right-4 bg-black/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-metallicGold shadow-gold">
                <span className="text-sm font-bold text-metallicGold uppercase tracking-wider">✨ Luxury Venue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
