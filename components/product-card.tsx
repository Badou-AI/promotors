import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from 'lucide-react'

interface ProductCardProps {
  id: string
  name: string
  brand: string
  price: number
  originalPrice?: number
  image: string
  onSale?: boolean
}

export function ProductCard({
  id,
  name,
  brand,
  price,
  originalPrice,
  image,
  onSale = false
}: ProductCardProps) {
  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden bg-[#121212]">
        {onSale && (
          <div className="absolute left-0 top-0 z-10 bg-[#D16527] px-2 py-1 text-sm text-white">
            Sale
          </div>
        )}
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-2">
        <Link href={`/shop/${id}`} className="block">
          <h3 className="font-chakra-petch text-xl text-white transition-colors hover:text-[#D16527]">
            {name}
          </h3>
        </Link>
        <div className="text-sm uppercase text-[#606060]">{brand}</div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-chakra-petch text-xl text-white">
              $ {price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-[#606060] line-through">
                $ {originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            className="flex items-center gap-2 bg-[#D16527] px-4 py-2 text-sm text-white transition-colors hover:bg-[#D16527]/90"
          >
            <ShoppingCart className="h-4 w-4" />
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  )
}

