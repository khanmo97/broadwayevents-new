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
    <section id="packages" className="section-padding bg-black">
      <div className="container-width">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-metallicGold to-neonGold mx-auto rounded-full"></div>
            <h2 className="font-playfair text-4xl font-bold text-white mt-6 mb-4 uppercase tracking-wider">Price List</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-neonGold to-metallicGold mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Simple, transparent pricing for your perfect event
          </p>

          {/* Friendly Disclaimer moved here */}
          <div className="bg-darkGray border border-metallicGold p-4 rounded-xl max-w-2xl mx-auto">
            <h4 className="font-playfair text-base font-semibold text-white mb-2">📝 Friendly Note</h4>
            <p className="text-gray-300 text-sm">
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
              className={`bg-darkGray border border-metallicGold rounded-xl p-8 relative transition-all duration-300 ${
                pkg.popular ? "ring-2 ring-metallicGold scale-105 shadow-gold" : "hover:shadow-gold hover:scale-105"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-metallicGold text-black px-6 py-2 rounded-full text-sm font-bold shadow-gold whitespace-nowrap uppercase tracking-wider">
                    ✨ Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-playfair text-2xl font-semibold text-white mb-2 uppercase tracking-wider">{pkg.name}</h3>
                <p className="text-gray-300 mb-4">{pkg.description}</p>
                <div className="text-4xl font-bold text-metallicGold mb-1">
                  <span className="text-metallicGold">$</span>
                  <span className="text-metallicGold">{pkg.price}</span>
                </div>
                <div className="text-gray-300">{pkg.duration}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-metallicGold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <span className="inline-block px-6 py-3 bg-metallicGold border-2 border-metallicGold rounded-full text-sm text-black font-bold hover:bg-darkGold transition-all duration-300 uppercase tracking-wider">
                  Contact us for availability
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Packages */}
        <div className="bg-darkGray border border-metallicGold rounded-xl p-8 mb-16 shadow-gold">
          <h3 className="font-playfair text-2xl font-semibold text-white mb-6 text-center uppercase tracking-wider">Custom Full Packages</h3>
          <p className="text-center text-gray-300 mb-8">
            We offer full packages which include everything in our Basic, Standard, or Premium package.
          </p>

          <div className="mt-8">
            <h4 className="font-playfair text-xl font-semibold text-white mb-6 text-center uppercase tracking-wider">
              Custom Package Can Include:
            </h4>
            <ul className="space-y-3 mb-8 max-w-2xl mx-auto">
              {plusFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-metallicGold mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <p className="text-gray-300 mb-4">
                <span className="font-semibold">Contact us for custom pricing</span> based on your specific needs and
                guest count.
              </p>
            </div>
          </div>
        </div>

        {/* Add-ons */}
        <div className="bg-darkGray border border-metallicGold rounded-xl p-8 mb-16 shadow-gold">
          <h3 className="font-playfair text-2xl font-semibold text-white mb-6 text-center uppercase tracking-wider">Additional Add-ons</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-lightGray transition-colors"
              >
                <span className="w-3 h-3 bg-metallicGold rounded-full"></span>
                <span className="text-gray-300">{addon}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offer */}
        <div className="mt-12 bg-darkGray border border-metallicGold p-8 rounded-xl shadow-gold">
          <h3 className="font-playfair text-xl font-semibold text-white mb-3 text-center uppercase tracking-wider">✨ Special Offer</h3>
          <p className="text-center text-gray-300">
            Book a full package for 2025 in January or February and receive a stunning basic backdrop for FREE!
            <br />
            <span className="text-metallicGold font-bold">Must pay deposit.</span>
          </p>
          <p className="text-xs text-center mt-4 text-gray-400">
            (Disclaimer: Backdrops and DJ services can be customized for an additional fee)
          </p>
        </div>
      </div>
    </section>
  )
}
