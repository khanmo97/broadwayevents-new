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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg border-b-2 border-gold-200" : "bg-transparent"
      }`}
    >
      <div className="container-width">
        <div className="flex justify-between items-center h-20 md:h-32">
          <Link href="/" className="flex items-center">
            <div className="rounded-full bg-white ring-1 ring-gold-300 shadow-md p-1 md:p-2">
              <Image
                src="/images/broadway_enhanced_shadow-sBjg3tijybFkuFFoY11xBCUA5jngwi.svg"
                alt="Broadway Studios & Events"
                width={112}
                height={112}
                priority
                className="object-contain contrast-150 saturate-125 w-12 h-12 sm:w-14 sm:h-14 md:w-28 md:h-28"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-primary hover:text-gold transition-colors text-sm font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#services"
              className="text-primary hover:text-gold transition-colors text-sm font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#packages"
              className="text-primary hover:text-gold transition-colors text-sm font-medium relative group"
            >
              Packages
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#about"
              className="text-primary hover:text-gold transition-colors text-sm font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#contact"
              className="text-primary hover:text-gold transition-colors text-sm font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary hover:text-gold transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t-2 border-gold-200 py-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-primary hover:text-gold transition-colors text-sm font-medium px-4 py-2 rounded-lg hover:bg-gold-50"
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-primary hover:text-gold transition-colors text-sm font-medium px-4 py-2 rounded-lg hover:bg-gold-50"
              >
                Services
              </Link>
              <Link
                href="#packages"
                className="text-primary hover:text-gold transition-colors text-sm font-medium px-4 py-2 rounded-lg hover:bg-gold-50"
              >
                Packages
              </Link>
              <Link
                href="#about"
                className="text-primary hover:text-gold transition-colors text-sm font-medium px-4 py-2 rounded-lg hover:bg-gold-50"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-primary hover:text-gold transition-colors text-sm font-medium px-4 py-2 rounded-lg hover:bg-gold-50"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
