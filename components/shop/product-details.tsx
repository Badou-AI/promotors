'use client'

import { useState } from "react"
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function ProductDetails() {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-bold tracking-tight">
        SILENTBLOCK DAMPER<br />
        M12 Ø 75MM
      </h1>

      <div className="text-3xl font-bold">$20.99</div>

      {/* Rating */}
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="w-5 h-5 fill-[#D16527] text-[#D16527]"
          />
        ))}
      </div>

      <p className="text-white/80">
        Nisl purus in mollis nunc sed id. Nunc sed velit dignissim sodales ut eu sem. c
        scelerisque fermentum dui faucibus in ornare. Nisl condimentum id venenatis a
        condimentum. Id consectetur purus ut faucibus pulvinar
      </p>

      {/* Quantity Selector */}
      <div className="flex gap-4 items-center">
        <div className="flex border border-white/10 rounded">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 text-lg border-r border-white/10 hover:bg-white/5"
          >
            -
          </button>
          <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2 text-lg border-l border-white/10 hover:bg-white/5"
          >
            +
          </button>
        </div>
        <Button 
          className="bg-[#D16527] hover:bg-[#D16527]/90 text-white px-8 py-6 rounded"
        >
          BUY NOW
        </Button>
      </div>

      {/* Product Meta */}
      <div className="space-y-2 text-sm text-white/60">
        <div>CATEGORIES: AUTOMATIC, MECHANIC</div>
        <div>SKU: 01289</div>
        <div>TAGS: ENERGY, SPEED, SYSTEM</div>
      </div>
    </div>
  )
}

