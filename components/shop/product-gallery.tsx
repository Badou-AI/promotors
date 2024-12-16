'use client'

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  // Placeholder images - replace with actual product images
  const images = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ]

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "w-20 h-20 border border-white/10 rounded overflow-hidden",
              selectedImage === index && "border-[#FF4D07]"
            )}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 border border-white/10 rounded overflow-hidden">
        <Image
          src={images[selectedImage]}
          alt="Product main image"
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

