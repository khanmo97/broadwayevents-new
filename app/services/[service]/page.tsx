import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Calendar, Users, Clock, Star } from "lucide-react"
import Link from "next/link"

const serviceDetails = {
  graduation: {
    title: "Graduation Parties",
    description: "Celebrate academic achievements in style with our elegant graduation party setup.",
    longDescription:
      "Mark this milestone moment with a celebration that honors years of hard work and dedication. Our graduation party package transforms our elegant venue into the perfect space for celebrating academic achievements with family and friends.",
    image: "/placeholder.svg?height=500&width=800",
    features: [
      "Customizable cap and gown photo area with professional backdrop",
      "Achievement display boards for showcasing accomplishments",
      "Family-style seating arrangements for intimate conversations",
      "Graduation-themed decorations in school colors",
      "Professional sound system for speeches and music",
      "Dedicated gift and card display table",
      'Complimentary "Congratulations Graduate" banner',
      "Photo booth props and graduation-themed accessories",
    ],
    included: [
      "Round tables seating 8-10 guests each",
      "Elegant chiavari chairs with cushions",
      "Premium linens in your choice of colors",
      "6-foot rectangle tables for food service",
      "Professional Bluetooth sound system",
      "Ambient lighting control",
      "Dedicated parking spaces",
      "Professional setup and cleanup service",
    ],
    pricing: {
      essential: 299,
      premium: 449,
      luxury: 699,
    },
    duration: "4-8 hours depending on package",
    capacity: "Up to 100 guests",
    testimonial: {
      text: "The graduation party exceeded all our expectations. The setup was beautiful and the staff made sure everything ran smoothly. Our daughter felt so special!",
      author: "Sarah Johnson",
      rating: 5,
    },
  },
  parties: {
    title: "Birthday & Celebrations",
    description: "Make every birthday and celebration memorable with our festive party packages.",
    longDescription:
      "From milestone birthdays to anniversary celebrations, we create the perfect atmosphere for your special day. Our party packages are designed to bring joy, laughter, and unforgettable memories to your celebration.",
    image: "/placeholder.svg?height=500&width=800",
    features: [
      "Custom balloon arrangements and decorations",
      "Dedicated dance floor with party lighting",
      "DJ booth setup with professional sound system",
      "Party games and entertainment area",
      "Birthday throne or special seating for guest of honor",
      "Photo booth with fun props and backdrops",
      "Cake display table with elegant presentation",
      "Party favor station setup",
    ],
    included: [
      "Round tables with festive linens",
      "Comfortable seating for all guests",
      "Premium sound system with microphone",
      "6-foot rectangle tables for catering",
      "Party lighting and ambiance control",
      "Dedicated gift table area",
      "Professional event coordination",
      "Complete setup and cleanup service",
    ],
    pricing: {
      essential: 329,
      premium: 499,
      luxury: 749,
    },
    duration: "4-8 hours depending on package",
    capacity: "Up to 120 guests",
    testimonial: {
      text: "Our 50th anniversary party was absolutely perfect! The decorations were stunning and the staff went above and beyond to make our day special.",
      author: "Robert & Mary Chen",
      rating: 5,
    },
  },
  conferences: {
    title: "Corporate Events & Conferences",
    description: "Professional meeting space with modern amenities for successful business events.",
    longDescription:
      "Elevate your corporate events with our professional venue that combines business functionality with elegant ambiance. Perfect for conferences, seminars, product launches, and corporate celebrations.",
    image: "/placeholder.svg?height=500&width=800",
    features: [
      "Professional presentation area with large screen",
      "High-speed Wi-Fi throughout the venue",
      "Advanced AV equipment and technical support",
      "Breakout areas for networking and discussions",
      "Registration and welcome desk setup",
      "Corporate branding and signage display",
      "Coffee and refreshment stations",
      "Business-appropriate lighting and acoustics",
    ],
    included: [
      "Conference-style table arrangements",
      "Executive seating with note-taking surfaces",
      "Professional sound and microphone system",
      "Projection screen and AV equipment",
      "High-speed internet access",
      "Climate control for comfort",
      "Dedicated parking for attendees",
      "Professional event coordination",
    ],
    pricing: {
      essential: 399,
      premium: 599,
      luxury: 899,
    },
    duration: "4-10 hours depending on package",
    capacity: "Up to 150 attendees",
    testimonial: {
      text: "Our annual conference was a huge success! The professional setup and technical support made our presentations seamless. Highly recommended!",
      author: "David Martinez, CEO TechCorp",
      rating: 5,
    },
  },
  photography: {
    title: "Photography Sessions",
    description: "Beautiful backdrops and professional lighting for stunning portrait sessions.",
    longDescription:
      "Transform your photography sessions with our versatile venue featuring multiple backdrop options and professional lighting setups. Perfect for family portraits, engagement photos, professional headshots, and creative shoots.",
    image: "/placeholder.svg?height=500&width=800",
    features: [
      "Multiple backdrop options (elegant, rustic, modern)",
      "Professional lighting equipment and setup",
      "Props and accessories library",
      "Changing area with full-length mirror",
      "Climate-controlled environment",
      "Flexible furniture arrangements",
      "Natural light options with window settings",
      "Professional photography consultation",
    ],
    included: [
      "Professional lighting kit",
      "Variety of backdrop options",
      "Props and styling accessories",
      "Comfortable seating areas",
      "Full-length mirrors and prep area",
      "Climate control for comfort",
      "Flexible scheduling options",
      "Equipment setup assistance",
    ],
    pricing: {
      essential: 199,
      premium: 299,
      luxury: 449,
    },
    duration: "2-6 hours depending on package",
    capacity: "Individual to family groups",
    testimonial: {
      text: "The photography session was amazing! The lighting was perfect and the variety of backdrops gave us so many beautiful options. Our family photos turned out stunning!",
      author: "Jennifer Adams",
      rating: 5,
    },
  },
  "baby-showers": {
    title: "Baby Showers",
    description: "Celebrate new beginnings with our charming baby shower packages.",
    longDescription:
      "Welcome the newest family member with a beautiful baby shower celebration. Our venue provides the perfect setting for this special occasion with soft, elegant decorations and comfortable arrangements for expecting mothers and their loved ones.",
    image: "/placeholder.svg?height=500&width=800",
    features: [
      "Soft, themed decorations in pastel colors",
      "Comfortable seating for expecting mother",
      "Gift display and opening area",
      "Baby shower games and activity stations",
      "Diaper cake display table",
      "Photo booth with baby-themed props",
      "Refreshment and dessert stations",
      "Keepsake guest book station",
    ],
    included: [
      "Round tables with soft linens",
      "Comfortable chairs with cushions",
      "Gift display tables and areas",
      "Soft background music system",
      "Gentle ambient lighting",
      "Refreshment serving tables",
      "Professional decoration setup",
      "Complete cleanup service",
    ],
    pricing: {
      essential: 279,
      premium: 429,
      luxury: 649,
    },
    duration: "3-6 hours depending on package",
    capacity: "Up to 80 guests",
    testimonial: {
      text: "My baby shower was absolutely perfect! The decorations were so beautiful and the atmosphere was exactly what I dreamed of. Thank you for making this day so special!",
      author: "Amanda Wilson",
      rating: 5,
    },
  },
  weddings: {
    title: "Wedding Receptions",
    description: "Create magical moments with our romantic wedding reception packages.",
    longDescription:
      "Begin your happily ever after in our elegant venue designed for romance and celebration. Our wedding packages create the perfect atmosphere for your special day with beautiful decorations, romantic lighting, and exceptional service.",
    image: "/placeholder.svg?height=500&width=800",
    features: [
      "Romantic lighting and ambiance",
      "Bridal suite for preparation",
      "Elegant table settings with centerpieces",
      "Dance floor with special lighting",
      "Wedding cake display area",
      "Gift and card table setup",
      "Professional wedding coordination",
      "Romantic photo opportunities throughout venue",
    ],
    included: [
      "Round tables with premium linens",
      "Elegant chiavari chairs",
      "Professional sound system for ceremony and reception",
      "Dance floor with romantic lighting",
      "Bridal suite access",
      "Wedding cake table setup",
      "Professional wedding coordinator",
      "Complete setup and cleanup service",
    ],
    pricing: {
      essential: 599,
      premium: 899,
      luxury: 1299,
    },
    duration: "6-10 hours depending on package",
    capacity: "Up to 150 guests",
    testimonial: {
      text: "Our wedding reception was absolutely magical! Every detail was perfect and the staff made sure our day was stress-free and beautiful. We couldn't have asked for more!",
      author: "Michael & Jessica Thompson",
      rating: 5,
    },
  },
}

export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((service) => ({
    service: service,
  }))
}

export async function generateMetadata({ params }: { params: { service: string } }) {
  const service = serviceDetails[params.service as keyof typeof serviceDetails]

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.title} - Elegance Event Hall`,
    description: service.description,
  }
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = serviceDetails[params.service as keyof typeof serviceDetails]

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">{service.title}</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{service.longDescription}</p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Users className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">{service.capacity}</div>
                  <div className="text-sm text-gray-600">Capacity</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">{service.duration}</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
              </div>

              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Calendar className="h-5 w-5 mr-2" />
                Book This Service
              </Button>
            </div>

            <div className="animate-fade-in-right">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8">Special Features</h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8">What's Included</h2>
              <div className="space-y-4">
                {service.included.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-cream-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">Package Pricing</h2>
            <p className="text-lg text-gray-600">Choose the perfect package for your {service.title.toLowerCase()}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">Essential</h3>
              <div className="text-4xl font-bold text-emerald-600 mb-6">${service.pricing.essential}</div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Choose Essential</Button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center ring-2 ring-emerald-600 scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</div>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">Premium</h3>
              <div className="text-4xl font-bold text-emerald-600 mb-6">${service.pricing.premium}</div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Choose Premium</Button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">Luxury</h3>
              <div className="text-4xl font-bold text-emerald-600 mb-6">${service.pricing.luxury}</div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Choose Luxury</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-purple-50 to-cream-50 rounded-2xl p-8">
            <div className="flex justify-center mb-4">
              {[...Array(service.testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 mb-6 italic">"{service.testimonial.text}"</blockquote>
            <cite className="font-semibold text-gray-900">- {service.testimonial.author}</cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Book Your {service.title}?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact us today to check availability and customize your perfect event package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              <Calendar className="h-5 w-5 mr-2" />
              Book Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
            >
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
