"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ivory/95 backdrop-blur-md border-b border-gold shadow-gold" : "bg-ivory/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-32">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/broadway-new-logo.png"
              alt="Broadway Studios & Events"
              width={112}
              height={112}
              priority
              className="object-contain w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-warmGray hover:text-gold transition-colors duration-200 font-medium">
              About
            </Link>
            <Link href="#services" className="text-warmGray hover:text-gold transition-colors duration-200 font-medium">
              Services
            </Link>
            <Link href="#packages" className="text-warmGray hover:text-gold transition-colors duration-200 font-medium">
              Packages
            </Link>
            <Link href="#gallery" className="text-warmGray hover:text-gold transition-colors duration-200 font-medium">
              Gallery
            </Link>
            <Link href="#contact" className="text-warmGray hover:text-gold transition-colors duration-200 font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="#contact" 
              className="bg-gold hover:bg-goldDark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-gold hover:shadow-gold-glow"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-warmGray hover:text-gold hover:bg-champagne transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-ivory/98 backdrop-blur-md border-t border-gold shadow-gold">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="#about" 
                className="block px-3 py-2 text-warmGray hover:text-gold hover:bg-champagne rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#services" 
                className="block px-3 py-2 text-warmGray hover:text-gold hover:bg-champagne rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="#packages" 
                className="block px-3 py-2 text-warmGray hover:text-gold hover:bg-champagne rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Packages
              </Link>
              <Link 
                href="#gallery" 
                className="block px-3 py-2 text-warmGray hover:text-gold hover:bg-champagne rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="#contact" 
                className="block px-3 py-2 text-warmGray hover:text-gold hover:bg-champagne rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link 
                  href="#contact" 
                  className="block w-full text-center bg-gold hover:bg-goldDark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-gold"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
