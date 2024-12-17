import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

export function ServiceHighlight() {
  return (
    <section className="py-16 bg-[#1A1A1A]">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">
            WHEEL ALIGNMENT AND SUSPENSION REPAIR
          </h2>
          <p className="text-zinc-400 mb-8">
            Expert auto service to keep your car in top condition. Our certified technicians use state-of-the-art equipment to ensure your vehicle&apos;s alignment and suspension systems are functioning optimally.
          </p>
          <Button>GET SERVICE</Button>
        </div>
      </Container>
    </section>
  )
} 