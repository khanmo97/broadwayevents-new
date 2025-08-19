import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-metallicGold">
      <div className="container-width py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex-col">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/broadway-new-logo.png"
                alt="Broadway Studios & Events"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4">Creating elegant and memorable events in Garland, Texas.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-metallicGold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-300 hover:text-metallicGold transition-colors text-sm font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#packages" className="text-gray-300 hover:text-metallicGold transition-colors text-sm font-medium">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-metallicGold transition-colors text-sm font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-metallicGold transition-colors text-sm font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-metallicGold uppercase tracking-wider">Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div>6246 Broadway Suite #A</div>
              <div>Garland, TX 75043</div>
              <div>
                <span className="text-metallicGold font-bold">(469) 478-9012</span>
              </div>
              <div>info@broadwayevents.com</div>
            </div>
          </div>
        </div>

        <div className="border-t border-metallicGold/30 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Broadway Studios & Events. All rights reserved.{" "}
            <span className="text-metallicGold">✨</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
