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
  {
    name: "Throne chairs",
    description: "Luxurious seating for a regal feel.",
    price: 500,
    icon: Check,
  },
  {
    name: "Peacock chairs",
    description: "Elegant and eye-catching seating option.",
    price: 300,
    icon: Check,
  },
  {
    name: "Baby reveals",
    description: "Specialized setup for baby showers.",
    price: 200,
    icon: Check,
  },
  {
    name: "Letters",
    description: "Customized signage for your event.",
    price: 150,
    icon: Check,
  },
  {
    name: "Oh baby",
    description: "Decorative elements for a baby-themed event.",
    price: 100,
    icon: Check,
  },
  {
    name: "Mis quince",
    description: "Traditional Mexican quinceañera decorations.",
    price: 250,
    icon: Check,
  },
  {
    name: "Love",
    description: "Romantic and intimate decor for weddings.",
    price: 180,
    icon: Check,
  },
  {
    name: "15 años",
    description: "Decorative elements for a 15th birthday party.",
    price: 120,
    icon: Check,
  },
  {
    name: "Photography",
    description: "Professional photography services.",
    price: 800,
    icon: Check,
  },
]

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-champagne">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-darkWarmGray mb-6">
            Pricing Packages
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full"></div>
          <p className="text-lg text-warmGray mt-6 max-w-2xl mx-auto">
            Choose the perfect package for your event. All packages include our signature service 
            and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-ivory rounded-2xl p-8 border-2 shadow-gold hover:shadow-gold-glow transition-all duration-300 hover:scale-105 ${
                pkg.popular ? 'border-gold' : 'border-gold/30'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-darkWarmGray mb-4">{pkg.name}</h3>
                <div className="text-4xl font-bold text-gold mb-2">
                  ${pkg.price}
                  <span className="text-lg text-warmGray font-normal">/event</span>
                </div>
                <p className="text-warmGray">{pkg.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-warmGray">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gold hover:bg-goldDark text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Choose Package
              </button>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-darkWarmGray mb-8">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-ivory rounded-xl p-6 border border-gold/20 hover:bg-champagne/50 transition-colors duration-300">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <addon.icon className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-semibold text-darkWarmGray mb-2">{addon.name}</h4>
                <p className="text-warmGray text-sm mb-3">{addon.description}</p>
                <div className="text-gold font-bold">${addon.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
