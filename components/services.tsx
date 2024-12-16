import { Wrench, FuelIcon as Engine, Disc, Battery, Cog, Gauge, ShipWheelIcon as SteeringWheel, Clock, Car } from 'lucide-react'
import { Container } from "@/components/ui/container"

const services = [
  { icon: Disc, title: "BRAKE REPAIR" },
  { icon: Engine, title: "ENGINE REPAIR" },
  { icon: Car, title: "TIRE REPAIR" },
  { icon: Battery, title: "BATTERIES" },
  { icon: Cog, title: "CLUTCH REPLACEMENT" },
  { icon: Gauge, title: "CAR DIAGNOSTICS" },
  { icon: SteeringWheel, title: "STEERING" },
  { icon: Clock, title: "TIMING BELT" },
  { icon: Wrench, title: "GENERAL REPAIR" },
]

export function Services() {
  return (
    <section className="py-16">
      <Container>
        <h2 className="mb-12 font-['Chakra_Petch'] text-3xl md:text-[42px] leading-none">
          OUR SERVICES
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex items-center gap-4 bg-[#121212] p-6 transition-all hover:border-t-[3px] hover:border-[#FD6527]"
            >
              <service.icon className="h-[60px] w-[60px] text-[#FD6527]" />
              <h3 className="font-['Chakra_Petch'] text-[23px] leading-8">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

