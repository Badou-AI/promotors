import { Container } from "@/components/ui/container"
//import Image from "next/image"

const brands = [
  { name: "Brand 1", logo: "/brands/brand1.svg" },
  { name: "Brand 2", logo: "/brands/brand2.svg" },
  { name: "Brand 3", logo: "/brands/brand3.svg" },
  { name: "Brand 4", logo: "/brands/brand4.svg" },
  { name: "Brand 5", logo: "/brands/brand5.svg" }
]

export function BrandShowcase() {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-2xl font-bold mb-12 text-center">
          BEST MULTI BRAND CAR REPAIR SERVICE
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="aspect-[3/2] relative bg-zinc-900 rounded-lg flex items-center justify-center p-6"
            >
              {/* Temporarily using a placeholder div until brand logos are available */}
              <div className="w-full h-full bg-zinc-800/50 rounded flex items-center justify-center">
                <span className="text-zinc-600">{brand.name}</span>
              </div>
              {/* Uncomment when brand logos are available
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain p-6"
              />
              */}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
} 