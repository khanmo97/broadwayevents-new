"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container-width">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-metallicGold to-neonGold mx-auto rounded-full"></div>
            <h2 className="font-playfair text-4xl font-bold text-white mt-6 mb-4 uppercase tracking-wider">Get In Touch</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-neonGold to-metallicGold mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to plan your event? Contact us to learn more about our venue
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="font-playfair text-2xl font-semibold text-white mb-8 uppercase tracking-wider">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-darkGray transition-colors">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-metallicGold to-neonGold flex items-center justify-center border-2 border-metallicGold">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 uppercase tracking-wider">Address</h4>
                  <p className="text-gray-300">
                    6246 Broadway Suite #A
                    <br />
                    Garland, TX 75043
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-darkGray transition-colors">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-metallicGold to-neonGold flex items-center justify-center border-2 border-metallicGold">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 uppercase tracking-wider">Phone</h4>
                  <p className="text-gray-300 font-medium">(469) 478-9012</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-darkGray transition-colors">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-metallicGold to-neonGold flex items-center justify-center border-2 border-metallicGold">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 uppercase tracking-wider">Email</h4>
                  <p className="text-gray-300">info@broadwayevents.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-darkGray transition-colors">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-metallicGold to-neonGold flex items-center justify-center border-2 border-metallicGold">
                  <Clock className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 uppercase tracking-wider">Hours</h4>
                  <p className="text-gray-300">
                    Monday - Friday: 9:00 AM - 8:00 PM
                    <br />
                    Saturday - Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Event Information */}
          <div>
            <div className="bg-darkGray border border-metallicGold rounded-xl p-8 shadow-gold">
              <h3 className="font-playfair text-2xl font-semibold text-white mb-6 uppercase tracking-wider">Plan Your Event</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white mb-3 uppercase tracking-wider">Event Types</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                    <div className="flex items-center p-2 rounded-lg hover:bg-lightGray transition-colors">
                      <span className="w-3 h-3 bg-metallicGold rounded-full mr-3"></span>
                      Graduations
                    </div>
                    <div className="flex items-center p-2 rounded-lg hover:bg-lightGray transition-colors">
                      <span className="w-3 h-3 bg-metallicGold rounded-full mr-3"></span>
                      Birthdays
                    </div>
                    <div className="flex items-center p-2 rounded-lg hover:bg-lightGray transition-colors">
                      <span className="w-3 h-3 bg-metallicGold rounded-full mr-3"></span>
                      Weddings
                    </div>
                    <div className="flex items-center p-2 rounded-lg hover:bg-lightGray transition-colors">
                      <span className="w-3 h-3 bg-metallicGold rounded-full mr-3"></span>
                      Corporate
                    </div>
                    <div className="flex items-center p-2 rounded-lg hover:bg-lightGray transition-colors">
                      <span className="w-3 h-3 bg-metallicGold rounded-full mr-3"></span>
                      Baby Showers
                    </div>
                    <div className="flex items-center p-2 rounded-lg hover:bg-lightGray transition-colors">
                      <span className="w-3 h-3 bg-metallicGold rounded-full mr-3"></span>
                      Photography
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-darkGray rounded-lg border border-metallicGold">
                  <h4 className="font-semibold text-white mb-2 uppercase tracking-wider">Capacity</h4>
                  <p className="text-gray-300">
                    Up to <span className="text-metallicGold font-bold text-lg">150</span> guests
                  </p>
                </div>

                <div className="p-4 bg-darkGray rounded-lg border border-metallicGold">
                  <h4 className="font-semibold text-white mb-2 uppercase tracking-wider">Starting Price</h4>
                  <p className="text-gray-300">
                    <span className="text-metallicGold font-bold text-lg">$299</span> for 4-hour events
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-darkGray rounded-xl border-2 border-metallicGold">
                <p className="text-white font-semibold text-center">
                  Call <span className="text-metallicGold text-lg font-bold">(469) 478-9012</span> to check
                  availability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
