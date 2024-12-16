'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

interface Category {
  name: string
  href: string
}

interface Tag {
  name: string
  href: string
}

interface FeaturedProduct {
  id: string
  name: string
  brand: string
  price: number
  image: string
}

const categories: Category[] = [
  { name: "Tires & Wheels", href: "#" },
  { name: "Batteries", href: "#" },
  { name: "Auto Tools", href: "#" },
  { name: "Car Cleaning", href: "#" },
  { name: "Interior Accessories", href: "#" },
  { name: "Exterior Accessories", href: "#" },
]

const tags: Tag[] = [
  { name: "ALIGNMENT", href: "#" },
  { name: "ROTATION", href: "#" },
  { name: "SPEED", href: "#" },
  { name: "SERVICING", href: "#" },
  { name: "TIRE", href: "#" },
  { name: "ELECTRONIC", href: "#" },
  { name: "CLEANING", href: "#" },
  { name: "TEHNOLOGY", href: "#" },
  { name: "REPAIR", href: "#" },
]

const featuredProducts: FeaturedProduct[] = [
  {
    id: "1",
    name: "Car Shock Absorber",
    brand: "HSP",
    price: 19.99,
    image: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Silent Bloc Ø10-75mm",
    brand: "HTR",
    price: 15.99,
    image: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Ball Joint JBJ721",
    brand: "TRW",
    price: 39.99,
    image: "/placeholder.svg"
  },
]

export function ShopSidebar() {
  const [priceRange, setPriceRange] = useState([50])

  return (
    <div className="space-y-8">
      {/* Search */}
      <div>
        <h2 className="font-chakra-petch text-xl text-white mb-4">SEARCH</h2>
        <Input 
          type="search" 
          placeholder="Search..." 
          className="bg-[#121212] border-none text-white placeholder:text-[#606060]"
        />
      </div>

      {/* Categories */}
      <div>
        <h2 className="font-chakra-petch text-xl text-white mb-4">CATEGORIES</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name}>
              <Link
                href={category.href}
                className="flex items-center gap-2 text-[#EDEDED] hover:text-[#D16527] transition-colors"
              >
                <div className="h-2 w-2 bg-[#D16527]" />
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Tags */}
      <div>
        <h2 className="font-chakra-petch text-xl text-white mb-4">PRODUCT TAGS</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag.name}
              href={tag.href}
              className="bg-[#121212] px-3 py-1 text-sm text-[#EDEDED] hover:text-[#D16527] transition-colors"
            >
              {tag.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Filter by Price */}
      <div>
        <h2 className="font-chakra-petch text-xl text-white mb-4">FILTER BY PRICE</h2>
        <Slider
          defaultValue={[50]}
          max={810}
          min={50}
          step={1}
          value={priceRange}
          onValueChange={setPriceRange}
          className="py-4"
        />
        <div className="text-[#EDEDED]">
          Price: ${priceRange[0]} — $810
        </div>
      </div>

      {/* Featured Products */}
      <div>
        <h2 className="font-chakra-petch text-xl text-white mb-4">FEATURE PRODUCTS</h2>
        <div className="space-y-4">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.id}`}
              className="flex gap-4 group"
            >
              <div className="relative h-20 w-20 bg-[#121212]">
                <div 
                  className="absolute inset-0" 
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(209, 101, 39, 0.1) 10px, rgba(209, 101, 39, 0.1) 20px)',
                  }}
                />
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-chakra-petch text-white group-hover:text-[#D16527] transition-colors">
                  {product.name}
                </h3>
                <div className="text-sm text-[#606060]">{product.brand}</div>
                <div className="font-chakra-petch text-white">
                  $ {product.price.toFixed(2)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

