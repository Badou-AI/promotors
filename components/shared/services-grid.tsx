import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Service {
  icon: string
  title: string
  description: string
}

interface ServicesGridProps {
  variant?: 'compact' | 'full' // compact for About page, full for Services page
  title?: string
  className?: string
  showDetailsLink?: boolean
}

const services: Service[] = [
  {
    icon: "/icons/brake-repair.svg",
    title: "Brake Repair",
    description: "Expert brake system repairs to ensure safety. Our certified technicians provide comprehensive brake service.",
  },
  {
    icon: "/icons/engine-repair.svg",
    title: "Engine Repair",
    description: "Professional engine diagnostics and repair services to keep your vehicle running smoothly.",
  },
  {
    icon: "/icons/tire-repair.svg",
    title: "Tire Repair",
    description: "Complete tire service including repairs, rotations, and replacements for optimal performance.",
  },
  {
    icon: "/icons/oil-change.svg",
    title: "Cooling System",
    description: "Expert cooling system maintenance and repairs to prevent overheating issues.",
  },
  {
    icon: "/icons/timing-belt.svg",
    title: "Battery Repair",
    description: "Battery testing, maintenance, and replacement services to keep you powered.",
  },
  {
    icon: "/icons/steering.svg",
    title: "Steering Repair",
    description: "Professional steering system repairs for safe and responsive handling.",
  },
  {
    icon: "/icons/brake-repair.svg",
    title: "Transmission Service",
    description: "Complete transmission diagnostics, maintenance, and repair services.",
  },
  {
    icon: "/icons/engine-repair.svg",
    title: "AC Service & Repair",
    description: "Full air conditioning system service, from diagnostics to repairs.",
  },
  {
    icon: "/icons/tire-repair.svg",
    title: "Oil Change Service",
    description: "Regular oil changes and fluid maintenance to keep your engine running smoothly.",
  }
]

export function ServicesGrid({ 
  variant = 'full', 
  title = "OUR SERVICES",
  className = "",
  showDetailsLink = false
}: ServicesGridProps) {
  // For About page, show only first 3 services
  const displayedServices = variant === 'compact' ? services.slice(0, 3) : services

  return (
    <section className={`py-16 ${className}`}>
      <Container>
        <h2 className="text-2xl font-bold mb-12">{title}</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service, index) => (
            <div 
              key={index}
              className="p-6 border border-zinc-800 rounded-none hover:border-[#FD6527] transition-colors"
            >
              <div className="mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="text-[#FD6527]"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-zinc-400 mb-4">{service.description}</p>
              {showDetailsLink && (
                    <Button variant="link" className="text-[#FD6527]">
                  DETAILS SERVICE
                </Button>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
} 