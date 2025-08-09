"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"></div>
            <h2 className="font-playfair text-4xl font-bold text-primary mt-6 mb-4">Get In Touch</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-gold-600 to-gold-400 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Ready to plan your event? Contact us to learn more about our venue
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="font-playfair text-2xl font-semibold text-primary mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-accent-50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-200 to-gold-400 flex items-center justify-center border-2 border-gold-300">
                  <MapPin className="h-6 w-6 text-gold-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Address</h4>
                  <p className="text-primary-600">
                    6246 Broadway Suite #A
                    <br />
                    Garland, TX 75043
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-accent-50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-200 to-gold-400 flex items-center justify-center border-2 border-gold-300">
                  <Phone className="h-6 w-6 text-gold-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Phone</h4>
                  <p className="text-primary-600 font-medium">(469) 478-9012</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-accent-50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-200 to-gold-400 flex items-center justify-center border-2 border-gold-300">
                  <Mail className="h-6 w-6 text-gold-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Email</h4>
                  <p className="text-primary-600">info@broadwayevents.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-accent-50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-200 to-gold-400 flex items-center justify-center border-2 border-gold-300">
                  <Clock className="h-6 w-6 text-gold-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Hours</h4>
                  <p className="text-primary-600">
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
            <div className="gold-card clean-card rounded-xl p-8 bg-gradient-to-br from-white to-accent-50 border-2 border-gold-200 shadow-lg">
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-6">Plan Your Event</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Event Types</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm text-primary-600">
                    <div className="flex items-center p-2 rounded-lg hover:bg-gold-50 transition-colors">
                      <span className="w-3 h-3 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mr-3"></span>
                      Graduations
                    </div>
                    <div className="flex items-center p-2 rounded-lg hover:bg-gold-50 transition-colors">
                      <span className="w-3 h-3 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mr-3"></span>
                      Birthdays
                    </div>
                    <div className="flex items-center p-2 rounded-lg hover:bg-gold-50 transition-colors">
                      <span className="w-3 h-3 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mr-3"></span>
                      Weddings
                    </div>
                    <div className="flex items-center p-2 rounded-lg hover:bg-gold-50 transition-colors">
                      <span className="w-3 h-3 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mr-3"></span>
                      Corporate
                    </div>
                    <div className="flex items-center p-2 rounded-lg hover:bg-gold-50 transition-colors">
                      <span className="w-3 h-3 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mr-3"></span>
                      Baby Showers
                    </div>
                    <div className="flex items-center p-2 rounded-lg hover:bg-gold-50 transition-colors">
                      <span className="w-3 h-3 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mr-3"></span>
                      Photography
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-gold-50 to-gold-100 rounded-lg border border-gold-200">
                  <h4 className="font-semibold text-primary mb-2">Capacity</h4>
                  <p className="text-primary-600">
                    Up to <span className="gold-gradient-text font-bold text-lg">150</span> guests
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-gold-50 to-gold-100 rounded-lg border border-gold-200">
                  <h4 className="font-semibold text-primary mb-2">Starting Price</h4>
                  <p className="text-primary-600">
                    <span className="gold-gradient-text font-bold text-lg">$299</span> for 4-hour events
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-gold-100 via-gold-200 to-gold-100 rounded-xl border-2 border-gold-300">
                <p className="text-primary font-semibold text-center">
                  Call <span className="gold-gradient-text text-lg font-bold">(469) 478-9012</span> to check
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
