"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-ivory">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-darkWarmGray mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full"></div>
          <p className="text-lg text-warmGray mt-6 max-w-2xl mx-auto">
            Ready to create your perfect event? Contact us today and let's start planning 
            something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-darkWarmGray mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-champagne/50 transition-colors duration-300">
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-darkWarmGray mb-1">Phone</h4>
                  <p className="text-gold font-bold text-lg">(469) 478-9012</p>
                  <p className="text-warmGray text-sm">Available for calls and text messages</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-champagne/50 transition-colors duration-300">
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-darkWarmGray mb-1">Location</h4>
                  <p className="text-warmGray">Garland, Texas</p>
                  <p className="text-warmGray text-sm">Conveniently located with easy access</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-champagne/50 transition-colors duration-300">
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-darkWarmGray mb-1">Business Hours</h4>
                  <p className="text-warmGray">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-warmGray text-sm">Weekend appointments available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Plan Your Event Section */}
          <div className="bg-champagne/50 rounded-2xl p-8 border border-gold/30 shadow-gold">
            <h3 className="text-2xl font-bold text-darkWarmGray mb-6">Plan Your Event</h3>
            <p className="text-warmGray mb-6">
              Tell us about your vision and we'll help bring it to life. Fill out the form below 
              and we'll get back to you within 24 hours.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg border border-gold/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg border border-gold/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                />
              </div>
              
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gold/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300"
              />
              
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-gold/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300"
              />
              
              <select className="w-full px-4 py-3 rounded-lg border border-gold/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300">
                <option value="">Select Event Type</option>
                <option value="graduation">Graduation Party</option>
                <option value="birthday">Birthday Celebration</option>
                <option value="corporate">Corporate Event</option>
                <option value="photography">Photography Session</option>
                <option value="babyshower">Baby Shower</option>
                <option value="wedding">Wedding Reception</option>
                <option value="other">Other</option>
              </select>
              
              <textarea
                placeholder="Tell us about your event vision..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gold/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300 resize-none"
              ></textarea>
              
              <button
                type="submit"
                className="w-full bg-gold hover:bg-goldDark text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-gold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
