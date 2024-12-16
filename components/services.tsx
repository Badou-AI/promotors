import Image from 'next/image'
import { Container } from "@/components/ui/container"

const services = [
  {
    name: "Engine Repair",
    description: "Complete engine repair and replacement services",
    icon: "/icons/engine-repair.svg",
  },
  {
    name: "Brake Repair",
    description: "Brake pad replacement and brake system repairs",
    icon: "/icons/brake-repair.svg",
  },
  {
    name: "Oil Change",
    description: "Regular oil changes and fluid maintenance",
    icon: "/icons/oil-change.svg",
  },
  {
    name: "Tire Repair",
    description: "Tire rotation, balancing, and replacement",
    icon: "/icons/tire-repair.svg",
  },
  {
    name: "Battery Service",
    description: "Battery testing, charging, and replacement",
    icon: "/icons/batteries.svg",
  },
  {
    name: "Car Diagnostics",
    description: "Computer diagnostics and troubleshooting",
    icon: "/icons/car-diagnostics.svg",
  },
  {
    name: "Clutch Replacement",
    description: "Clutch repair and replacement services",
    icon: "/icons/clutch-replacement.svg",
  },
  {
    name: "Timing Belt",
    description: "Timing belt inspection and replacement",
    icon: "/icons/timing-belt.svg",
  },
  {
    name: "Steering Service",
    description: "Power steering repair and maintenance",
    icon: "/icons/steering.svg",
  }
]

export function Services() {
  return (
    <section className="bg-[#121212] py-20">
      <Container>
        <h2 className="font-chakra-petch text-5xl font-bold text-white mb-12">
          OUR SERVICES
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="group flex items-start gap-4 bg-[#161616] p-6 border-t-[3px] border-transparent transition-all hover:border-[#FD6527]"
            >
              <div className="flex-shrink-0">
                <Image 
                  src={service.icon}
                  alt={service.name}
                  width={60}
                  height={60}
                />
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">{service.name}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

