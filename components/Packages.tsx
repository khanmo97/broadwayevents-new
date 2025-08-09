"use client"

import { Check } from "lucide-react"

const packages = [
  {
    name: "Basic Package",
    price: 2000,
    duration: "8 hours",
    description: "Perfect for intimate gatherings",
    features: [
      "100 guests",
      "Round tables",
      "White chiavari chairs",
      "6ft tables",
      "Linens",
      "2 restrooms",
      "Bluetooth speaker",
      "Basic cleaning",
    ],
  },
  {
    name: "Standard Package",
    price: 2500,
    duration: "8 hours",
    description: "Our most popular package",
    features: [
      "150 guests",
      "Round tables",
      "White chiavari chairs",
      "6ft tables",
      "Linens",
      "2 restrooms",
      "Bluetooth speaker",
      "Basic cleaning",
    ],
    popular: true,
  },
  {
    name: "Premium Package",
    price: 3000,
    duration: "8 hours",
    description: "The ultimate experience",
    features: [
      "200 guests",
      "Round tables",
      "White chiavari chairs",
      "6ft tables",
      "Linens",
      "2 restrooms",
      "Bluetooth speaker",
      "Basic cleaning",
    ],
  },
]

const plusFeatures = [
  "Centerpieces",
  "Gourmet food and servers (buffet style)",
  "Professional DJ / Sparks / Clouds",
  "Skilled bartender",
  "Full-service cleaning",
  "Armed security service",
  "City requirement when serving/consuming alcoholic beverages",
]

const addOns = [
  "Throne chairs",
  "Peacock chairs",
  "Baby reveals",
  "Letters",
  "Oh baby",
  "Mis quince",
  "Love",
  "15 años",
  "Photography",
]

export default function Packages() {
  return (
    <section id="packages" className="section-padding warm-gradient-bg">
      <div className="container-width">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"></div>
            <h2 className="font-playfair text-4xl font-bold text-primary mt-6 mb-4">Price List</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-gold-600 to-gold-400 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto mb-6">
            Simple, transparent pricing for your perfect event
          </p>

          {/* Friendly Disclaimer moved here */}
          <div className="bg-gradient-to-r from-accent-100 via-accent-200 to-accent-100 border border-gold-200 p-4 rounded-xl max-w-2xl mx-auto">
            <h4 className="font-playfair text-base font-semibold text-primary mb-2">📝 Friendly Note</h4>
            <p className="text-primary-600 text-sm">
              Last minute guest count increases will be accommodated at a surcharge to ensure we can provide the best
              service for your event.
            </p>
          </div>
        </div>

        {/* Basic Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pt-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`gold-card clean-card rounded-xl p-8 relative transition-all duration-300 bg-gradient-to-br from-white to-accent-50 ${
                pkg.popular ? "ring-2 ring-gold scale-105 shadow-2xl" : "hover:shadow-xl"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="luxury-gradient-bg text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg whitespace-nowrap">
                    ✨ Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-playfair text-2xl font-semibold text-primary mb-2">{pkg.name}</h3>
                <p className="text-primary-600 mb-4">{pkg.description}</p>
                <div className="text-4xl font-bold text-primary mb-1">
                  <span className="gold-gradient-text">$</span>
                  <span className="gold-gradient-text">{pkg.price}</span>
                </div>
                <div className="text-primary-600">{pkg.duration}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-primary-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <span className="inline-block px-6 py-3 bg-gradient-to-r from-gold-100 to-gold-200 border-2 border-gold-300 rounded-full text-sm text-primary font-medium hover:shadow-md transition-all duration-300">
                  Contact us for availability
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Packages */}
        <div className="bg-gradient-to-br from-white to-accent-50 rounded-xl p-8 mb-16 gold-card border-2 border-gold-200 shadow-lg">
          <h3 className="font-playfair text-2xl font-semibold text-primary mb-6 text-center">Custom Full Packages</h3>
          <p className="text-center text-primary-600 mb-8">
            We offer full packages which include everything in our Basic, Standard, or Premium package.
          </p>

          <div className="mt-8">
            <h4 className="font-playfair text-xl font-semibold text-primary mb-6 text-center">
              Custom Package Can Include:
            </h4>
            <ul className="space-y-3 mb-8 max-w-2xl mx-auto">
              {plusFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-primary-600 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <p className="text-primary-600 mb-4">
                <span className="font-semibold">Contact us for custom pricing</span> based on your specific needs and
                guest count.
              </p>
            </div>
          </div>
        </div>

        {/* Add-ons */}
        <div className="bg-gradient-to-br from-white to-accent-50 rounded-xl p-8 gold-card border-2 border-gold-200 shadow-lg">
          <h3 className="font-playfair text-2xl font-semibold text-primary mb-6 text-center">Additional Add-ons</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gold-50 transition-colors"
              >
                <span className="w-3 h-3 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"></span>
                <span className="text-primary-600">{addon}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offer */}
        <div className="mt-12 bg-gradient-to-r from-gold-100 via-gold-200 to-gold-100 border-2 border-gold-300 p-8 rounded-xl shadow-lg">
          <h3 className="font-playfair text-xl font-semibold text-primary mb-3 text-center">✨ Special Offer</h3>
          <p className="text-center text-primary-700">
            Book a full package for 2025 in January or February and receive a stunning basic backdrop for FREE!
            <br />
            <span className="text-gold-800 font-semibold">Must pay deposit.</span>
          </p>
          <p className="text-xs text-center mt-4 text-primary-500">
            (Disclaimer: Backdrops and DJ services can be customized for an additional fee)
          </p>
        </div>
      </div>
    </section>
  )
}
