"use client"

import Image from "next/image"
import Link from "next/link"

const galleryImages = [
  {
    src: "/images/gallery/event-flower.jpg",
    alt: "Event Photo 1",
    title: "Flower Arrangement",
    description: "A beautiful display of fresh flowers for a special occasion.",
  },
  {
    src: "/images/gallery/event-group.jpg",
    alt: "Event Photo 2",
    title: "Group Photo",
    description: "A candid moment capturing the joy of a large group.",
  },
  {
    src: "/images/gallery/event-hall.jpg",
    alt: "Event Photo 3",
    title: "Event Hall",
    description: "The grand space where unforgettable memories are made.",
  },
  {
    src: "/images/gallery/event-people.jpg",
    alt: "Event Photo 4",
    title: "Event People",
    description: "A lively scene of guests enjoying the event.",
  },
  {
    src: "/images/gallery/event-table.jpg",
    alt: "Event Photo 5",
    title: "Event Table",
    description: "A beautifully set table for a memorable dinner.",
  },
  {
    src: "/images/gallery/event-table-flower.jpg",
    alt: "Event Photo 6",
    title: "Table with Flowers",
    description: "A romantic table arrangement with fresh flowers.",
  },
  {
    src: "/images/gallery/event-stage.jpg",
    alt: "Event Photo 7",
    title: "Event Stage",
    description: "The focal point of the event, where the magic happens.",
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-champagne">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-darkWarmGray mb-6">
            Event Gallery
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full"></div>
          <p className="text-lg text-warmGray mt-6 max-w-2xl mx-auto">
            Take a look at some of our recent events and see how we've transformed spaces 
            into unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gold/30 hover:shadow-gold transition-all duration-300 hover:scale-105"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-2">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-ivory rounded-2xl p-8 border border-gold/30 shadow-gold max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-darkWarmGray mb-4">
              Ready to Create Your Own Memories?
            </h3>
            <p className="text-warmGray mb-6">
              Let us help you plan an event that will be remembered for years to come.
            </p>
            <Link
              href="#contact"
              className="inline-block bg-gold hover:bg-goldDark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-gold"
            >
              Start Planning Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
