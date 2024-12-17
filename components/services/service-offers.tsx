import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

const offers = [
  {
    discount: "20%",
    title: "$20 OFF ANY $100 SERVICE PURCHASE",
    description: "First-time customers only. Cannot be combined with other offers.",
  },
  {
    title: "FREE BRAKE INSPECTION OUR EXPERTS",
    description: "Professional brake system inspection by certified technicians.",
  },
  {
    title: "STANDARD BRAKE PREMIUM LOREM SERVICE",
    description: "Complete brake service package with premium parts and labor.",
  },
  {
    discount: "20%",
    title: "ANNUAL TECHNICAL INSPECTION OF CARS",
    description: "Comprehensive annual vehicle inspection and maintenance.",
  },
]

export function ServiceOffers() {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-2xl font-bold mb-4">SAVE MONEY ON AUTO REPAIR</h2>
        <p className="text-zinc-400 mb-12 max-w-2xl">
          Take advantage of our current service specials and savings opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className="p-6 border border-zinc-800 rounded-lg"
            >
              {offer.discount && (
                <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-md mb-4">
                  {offer.discount}
                </span>
              )}
              <h3 className="text-xl font-semibold mb-3">{offer.title}</h3>
              <p className="text-zinc-400 mb-4">{offer.description}</p>
              <Button variant="link" className="text-orange-600">
                MORE DETAILS
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
} 