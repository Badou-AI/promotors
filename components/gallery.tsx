"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = Array(8).fill(null).map((_, i) => ({
  src: "/placeholder.svg?height=400&width=300",
  title: `Work Title ${i + 1}`
}))

export function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="font-['Chakra_Petch'] text-3xl md:text-[42px] leading-none">
          OUR RECENT WORKS
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="rounded-none bg-[#121212] p-2 hover:bg-[#FD6527]"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="rounded-none bg-[#121212] p-2 hover:bg-[#FD6527]"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative min-w-[300px] group"
          >
            <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute inset-x-0 top-0 h-[3px] bg-[#FD6527] opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute inset-x-0 top-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <h3 className="font-['Chakra_Petch'] text-lg font-semibold text-white">
                {image.title}
              </h3>
            </div>
            <img
              src={image.src}
              alt={`Gallery image ${index + 1}`}
              className="h-[400px] w-[300px] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
