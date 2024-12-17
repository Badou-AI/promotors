import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Product {
  id: string
  name: string
  brand: string
  price: number
  originalPrice?: number
  image: string
  onSale?: boolean
}

const products: Product[] = [
  {
    id: "1",
    name: "Silent Bloc Ø10-75mm",
    brand: "WEROO",
    price: 49.99,
    image: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Brake Discs Front 282mm 4x100",
    brand: "ASCY",
    price: 69.99,
    originalPrice: 76.99,
    image: "/placeholder.svg",
    onSale: true,
  },
  {
    id: "3",
    name: "Conical Compression Spring",
    brand: "AUTOPARTI",
    price: 49.99,
    image: "/placeholder.svg",
  },
  {
    id: "4",
    name: "Oil Filter OF 15A/20A",
    brand: "GRIP",
    price: 19.90,
    image: "/placeholder.svg",
  },
]

export function OtherProducts() {
  return (
    <div className="py-16 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">OTHER PRODUCTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-[#121212] rounded-lg overflow-hidden group"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <div 
                className="absolute inset-0 z-10"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    #D16527,
                    #D16527 10px,
                    transparent 10px,
                    transparent 20px
                  )`,
                  opacity: 0.1
                }}
              />
              {product.onSale && (
                <div className="absolute top-4 left-4 z-20 bg-[#D16527] px-3 py-1 text-sm font-semibold">
                  Sale
                </div>
              )}
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">{product.name}</h3>
              <p className="text-white/60 text-sm mb-3">{product.brand}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-white/60 line-through text-sm">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <Button 
                  variant="ghost"
                  className="bg-[#D16527] hover:bg-[#D16527]/90 text-white px-4 py-2 transform -skew-x-12"
                >
                  <span className="inline-block transform skew-x-12">
                    ADD TO CART
                  </span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

