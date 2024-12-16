import { ProductCard } from "@/components/product-card"
import { ShopSidebar } from "@/components/shop-sidebar"
import { Pagination } from "@/components/pagination"

const products = [
  {
    id: "1",
    name: "Ball Joint TRW JBJ721",
    brand: "Ball Joint",
    price: 49.99,
    originalPrice: 59.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-car-brake-disc-with-caliper-UoCwgFkXA73CDxeTBfjGtuuus7jw0Q.png",
    onSale: true
  },
  {
    id: "2",
    name: "Belt Auxiliary X-234890",
    brand: "CONITECH",
    price: 49.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-differential-j4G3bk6CXSbXFhF2z3FrDkA56rSL86.png"
  },
  {
    id: "3",
    name: "Shock Absorber Monster FG 6182",
    brand: "MONSTER",
    price: 12.39,
    originalPrice: 14.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-natural-gas-meter-85upOuBHT7l2GdAOl8rBsJuzpULwC1.png",
    onSale: true
  },
  {
    id: "4",
    name: "Silent Bloc Ø10-75mm",
    brand: "WEHOO",
    price: 49.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-grarage-traffic-lights-iPrzizE9dbUqZVTP4HPmADpWBAWOgb.png"
  },
  {
    id: "5",
    name: "Brake Discs Front 282mm 4x100",
    brand: "ACY",
    price: 69.99,
    originalPrice: 76.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-engine-compressor-OTDp1PYWInYLfrBk3NFE3VnSn1aZuO.png",
    onSale: true
  },
  {
    id: "6",
    name: "Conical Compression Spring",
    brand: "AUTOPARTI",
    price: 49.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-car-wheel-on-alloy-disc-with-tyre-iYil5gR1hMmNcXuPDZOEzcosf7rZn4.png"
  },
  {
    id: "7",
    name: "Shock Absorber Mounting",
    brand: "MONSER",
    price: 11.99,
    originalPrice: 14.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-modern-diesel-engine-3GKYoe8xVuVDEsBLNWvMubeB53BUmN.png",
    onSale: true
  },
  {
    id: "8",
    name: "Tendicatena Tension Roller",
    brand: "ROLLER",
    price: 18.51,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-toolboox-tools-kit-cxpQe3A1BwQszSr0aaL5koFBEcuYGm.png"
  },
  {
    id: "9",
    name: "Oil Filter 12345",
    brand: "QWER",
    price: 49.99,
    originalPrice: 59.99,
    image: "/placeholder.svg",
    onSale: true
  },
  {
    id: "10",
    name: "Oil Filter DF 15A/20A",
    brand: "GRIP",
    price: 19.90,
    image: "/placeholder.svg"
  },
  {
    id: "11",
    name: "Olio Auto Formula F 5W30",
    brand: "MOTOR",
    price: 23.99,
    originalPrice: 35.99,
    image: "/placeholder.svg",
    onSale: true
  },
  {
    id: "12",
    name: "PS-3004 Oil Filter",
    brand: "PSS",
    price: 26.99,
    image: "/placeholder.svg"
  }
]

export function ShopGrid() {
  return (
    <section className="py-6">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1fr,320px]">
          <div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            <div className="mt-8">
              <Pagination currentPage={1} totalPages={3} />
            </div>
          </div>
          <aside>
            <ShopSidebar />
          </aside>
        </div>
      </div>
    </section>
  )
}

