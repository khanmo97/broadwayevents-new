"use client"

import Image from "next/image"

const galleryImages = [
  "/images/gallery/event-flower.jpg",
  "/images/gallery/event-group.jpg",
  "/images/gallery/event-hall.jpg",
  "/images/gallery/event-people.jpg",
  "/images/gallery/event-table.jpg",
  "/images/gallery/event-table-flower.jpg",
  "/images/gallery/event-stage.jpg",
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-16">
      <div className="container-width">
        <h2 className="text-3xl font-bold text-center mb-8 font-playfair">
          Event Gallery <span className="text-gold-200">✨</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Event Photo ${index + 1}`}
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
