import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"

interface CleaningServiceProps {
  title: string
  description: string
  features: string[]
  imageUrl: string
  imageAlt: string
  reverse?: boolean
}

function CleaningService({ title, description, features, imageUrl, imageAlt, reverse = false }: CleaningServiceProps) {
  return (
    <div className={`grid lg:grid-cols-2 gap-8 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      {reverse ? (
        <>
          <div className="space-y-6">
            <h2 className="font-chakra-petch text-4xl font-bold text-white">
              {title}
            </h2>
            <p className="text-[#EDEDED]">{description}</p>
            <ul className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-[#EDEDED]">
                  <div className="w-2 h-2 bg-[#D16527] shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="inline-block bg-[#D16527] px-8 py-4 text-white hover:bg-[#D16527]/90 transition-colors"
            >
              GET SERVICE
            </Link>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <div 
              className="absolute inset-0 z-10 bg-black bg-opacity-50" 
            />
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </>
      ) : (
        <>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <div 
              className="absolute inset-0 z-10 bg-black bg-opacity-50" 
            />
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-chakra-petch text-4xl font-bold text-white">
              {title}
            </h2>
            <p className="text-[#EDEDED]">{description}</p>
            <ul className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-[#EDEDED]">
                  <div className="w-2 h-2 bg-[#D16527] shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="inline-block bg-[#D16527] px-8 py-4 text-white hover:bg-[#D16527]/90 transition-colors"
            >
              GET SERVICE
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export function CarCleaningSection() {
  const services = [
    {
      title: "CAR EXTERIOR CLEANING: BASIC DETAILING",
      description: "Our basic detailing service ensures your car's exterior shines like new. We use premium products and techniques to clean, polish, and protect your vehicle's surface.",
      features: [
        "SAME DAY SERVICE",
        "CONVENIENT LOCATION",
        "ONLINE APPOINTMENT",
        "COMPLIMENTARY SHUTTLE"
      ],
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/detailing-manual-cleaning.jpg-roTed37kQNrhW5XKT6989Mvop4LoJ1.jpeg",
      imageAlt: "Car exterior cleaning and detailing"
    },
    {
      title: "RUBBING, WAXING, AND POLISHING",
      description: "Gravida quis blandit turpis cursus in hoc habitasse platea. Velit sed ullamcorper morbi tincidunt ornare massa eget. Odio morbi quis commodo odio aenean. Ut etiam sit amet nisl purus.",
      features: [
        "PROFESSIONAL TOOLS",
        "ECO-FRIENDLY PRODUCTS",
        "SCRATCH REMOVAL",
        "PAINT PROTECTION"
      ],
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/car-detailing-polishing.jpg-Tqzhe5FESLrua82GUWjB300cLVLMgh.jpeg",
      imageAlt: "Car waxing and polishing"
    }
  ]

  return (
    <section className="bg-[#161616] py-20">
      <Container>
        <div className="space-y-20">
          {services.map((service, index) => (
            <CleaningService
              key={index}
              {...service}
              reverse={index === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

