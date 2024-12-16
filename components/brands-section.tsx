import Image from "next/image"

const brands = [
  { name: "Brand 1", logo: "/placeholder.svg" },
  { name: "Brand 2", logo: "/placeholder.svg" },
  { name: "Brand 3", logo: "/placeholder.svg" },
  { name: "Brand 4", logo: "/placeholder.svg" },
  { name: "Brand 5", logo: "/placeholder.svg" },
  { name: "Brand 6", logo: "/placeholder.svg" },
]

export function BrandsSection() {
  return (
    <section className="py-20 bg-[#161616]">
      <div className="container">
        <h2 className="font-chakra-petch text-5xl font-bold text-white text-center mb-12">
          BEST MULTI BRAND CAR REPAIR SERVICE
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="aspect-[3/2] relative bg-[#121212] group"
            >
              <div 
                className="absolute inset-0" 
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(209, 101, 39, 0.1) 10px, rgba(209, 101, 39, 0.1) 20px)',
                }}
              />
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain p-6"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

