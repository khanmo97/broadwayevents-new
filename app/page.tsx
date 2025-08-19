import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Packages from "@/components/Packages"
import About from "@/components/About"
import Gallery from "@/components/Gallery"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-black pt-24 md:pt-32">
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Packages />
      <Contact />
    </main>
  )
}
