import { Button } from "@/components/ui/button"
import Image from "next/image"

export function PromoSection() {
  return (
    <div className="bg-[#121212]">
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              SPEND $150+ AND GET $20<br />
              BONUS CT MONEY
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Tristique senectus et netus et malesuada. Sagittis nisl rhoncus mattis
              rhoncus urna neque viverra. Fermentum dui faucibus in ornare quam
              viverra. Netus et malesuada fames ac turpis.
            </p>
            <Button 
              className="bg-[#FF4D07] hover:bg-[#FF4D07]/90 text-white px-8 py-3 transform -skew-x-12"
            >
              <span className="inline-block transform skew-x-12">
                GO TO SHOP
              </span>
            </Button>
          </div>
          <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden">
            <div 
              className="absolute inset-0 z-10"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  #FF4D07,
                  #FF4D07 10px,
                  transparent 10px,
                  transparent 20px
                )`,
                opacity: 0.1
              }}
            />
            <Image
              src="/placeholder.svg"
              alt="Promo image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

