import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: "wrench",
    title: "Brake Repair",
    description: "Expert brake system repairs to ensure safety. Our certified technicians provide comprehensive brake service.",
  },
  {
    icon: "engine",
    title: "Engine Repair",
    description: "Professional engine diagnostics and repair services to keep your vehicle running smoothly.",
  },
  {
    icon: "tire",
    title: "Tire Repair",
    description: "Complete tire service including repairs, rotations, and replacements for optimal performance.",
  },
  {
    icon: "cooling",
    title: "Cooling System",
    description: "Expert cooling system maintenance and repairs to prevent overheating issues.",
  },
  {
    icon: "battery",
    title: "Battery Repair",
    description: "Battery testing, maintenance, and replacement services to keep you powered.",
  },
  {
    icon: "steering",
    title: "Steering Repair",
    description: "Professional steering system repairs for safe and responsive handling.",
  },
]

export function ServiceGrid() {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-2xl font-bold mb-12">OUR SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 border border-zinc-800 rounded-lg hover:border-orange-600 transition-colors"
            >
              <div className="mb-4">
                {/* You'll need to add your icon component/system here */}
                <span className="text-orange-600 text-3xl">[Icon]</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-zinc-400 mb-4">{service.description}</p>
              <Button variant="link" className="text-orange-600">
                DETAILS SERVICE
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
} 