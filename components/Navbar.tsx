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
        scrolled ? "bg-black/95 backdrop-blur-sm shadow-gold border-b-2 border-metallicGold" : "bg-transparent"
      }`}
    >
      <div className="container-width">
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
            <Link
              href="/"
              className="text-white hover:text-metallicGold transition-colors text-sm font-medium relative group uppercase tracking-wider"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-metallicGold to-metallicGold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#services"
              className="text-white hover:text-metallicGold transition-colors text-sm font-medium relative group uppercase tracking-wider"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-metallicGold to-metallicGold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#packages"
              className="text-white hover:text-metallicGold transition-colors text-sm font-medium relative group uppercase tracking-wider"
            >
              Packages
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-metallicGold to-metallicGold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-metallicGold transition-colors text-sm font-medium relative group uppercase tracking-wider"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-metallicGold to-metallicGold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-metallicGold transition-colors text-sm font-medium relative group uppercase tracking-wider"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-metallicGold to-metallicGold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-metallicGold transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t-2 border-metallicGold py-4 shadow-gold">
            <div className="px-4 pb-3 border-b border-metallicGold/50 mb-3">
              {/* Removed ThemeSwitcher from here */}
            </div>
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-metallicGold transition-colors text-sm font-medium px-4 py-2 rounded-lg hover:bg-darkGray uppercase tracking-wider"
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-white hover:text-metallicGold transition-colors text-sm font-medium px-4 py-2 rounded-lg hover:bg-darkGray uppercase tracking-wider"
              >
                Services
              </Link>
              <Link
                href="#packages"
                className="text-white hover:text-metallicGold transition-colors text-sm font-medium px-4 py-2 rounded-lg hover:bg-darkGray uppercase tracking-wider"
              >
                Packages
              </Link>
              <Link
                href="#about"
                className="text-white hover:text-metallicGold transition-colors text-sm font-medium px-4 py-2 rounded-lg hover:bg-darkGray uppercase tracking-wider"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-white hover:text-metallicGold transition-colors text-sm font-medium px-4 py-2 rounded-lg hover:bg-darkGray uppercase tracking-wider"
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
