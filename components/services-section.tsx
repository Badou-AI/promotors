import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Container } from "@/components/ui/container"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  iconAlt: string
}

function ServiceCard({ title, description, icon, iconAlt }: ServiceCardProps) {
  return (
    <div className="space-y-4 group">
      <div className="h-[0.5px] bg-white group-hover:bg-[#D16527] transition-colors duration-300 mb-6"></div>
      <div className="p-6 inline-block">
        <Image 
          src={icon} 
          alt={iconAlt} 
          width={48} 
          height={48}
          className="w-12 h-12 object-contain"
        />
      </div>
      <h3 className="font-chakra-petch text-2xl text-white">
        {title}
      </h3>
      <p className="text-[#EDEDED] font-mulish">
        {description}
      </p>
      <Link 
        href="/services" 
        className="inline-flex items-center text-[#D16527] font-chakra-petch hover:text-[#D16527]/90 transition-colors"
      >
        DETAILS SERVICE
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  )
}

export function ServicesSection() {
  const services = [
    {
      title: "BRAKE REPAIR",
      description: "Eget velit aliquet sagittis id consectetur. Elit ut aliquam purus sit amet luctus. Odio eu feugiat pretium nibh ipsum consequat nisi vel",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brake-icon-rZsOljGhwVThjYiTyF8ErG4uIBiFY1.png",
      iconAlt: "Brake Repair Icon"
    },
    {
      title: "ENGINE REPAIR",
      description: "Etiam erat velit scelerisque in. Posuere morbi leo urna molestie at elementum eu. Placerat in egestas erat imperdiet sed euismod",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/engine-icon-M7SI8W7hKA1jIFyfyR3GMnseo3OZwp.png",
      iconAlt: "Engine Repair Icon"
    },
    {
      title: "TIRE REPAIR",
      description: "Fermentum posuere urna nec tincidunt praesent. Dignissim enim sit amet venenatis. Lorem ipsum dolor sit amet consectetur",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tire-icon-yHuLWmNs1I9YgkIZhS8Yex8Co54fkn.png",
      iconAlt: "Tire Repair Icon"
    },
    {
      title: "COOLING SYSTEM",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cooling-icon-37iDLS9Nb6dFoTZeTiiVwghHE2DTg4.png",
      iconAlt: "Cooling System Icon"
    },
    {
      title: "BATTERY REPAIR",
      description: "At auctor urna nunc id cursus metus. In vitae turpis massa sed. Duis aute irure dolor in reprehenderit in voluptate velit",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/battery-icon-haTQGPjQL8V9Ihwdteu8LEr5D21jfc.png",
      iconAlt: "Battery Repair Icon"
    },
    {
      title: "STEERING REPAIR",
      description: "Fusce id velit ut tortor pretium viverra suspendisse. Ullamcorper malesuada proin libero nunc consequat interdum",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/steering-icon-JrBfrSlKXAPDQNPysWB2bNLNENjwPQ.png",
      iconAlt: "Steering Repair Icon"
    }
  ]

  return (
    <section className="bg-[#161616] py-20">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <h2 className="font-chakra-petch text-5xl font-bold text-white mb-6 md:mb-0">
            OUR SERVICES
          </h2>
          <Link
            href="/services"
            className="inline-block bg-[#D16527] px-8 py-4 text-white hover:bg-[#D16527]/90 transition-colors"
          >
            ALL SERVICES
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Container>
    </section>
  )
}

