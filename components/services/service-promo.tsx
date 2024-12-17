import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

export function ServicePromo() {
  return (
    <section className="py-16 bg-[url('/service-promo-bg.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/50" />
      <Container className="relative">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold mb-6">
            BATTERY, STARTING AND CHARGING REPAIR
          </h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2">
              <span className="text-orange-600">•</span>
              SAME DAY SERVICE
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-600">•</span>
              ONLINE APPOINTMENT
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-600">•</span>
              CONVENIENT LOCATION
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-600">•</span>
              COMPLIMENTARY SHUTTLE
            </li>
          </ul>
          <Button>GET SERVICE</Button>
        </div>
      </Container>
    </section>
  )
} 