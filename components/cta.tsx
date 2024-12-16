import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

export function CTA() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-black/50">
        <img
          src="/placeholder.svg?height=600&width=1920"
          alt="Background"
          className="h-full w-full object-cover opacity-50"
        />
      </div>
      <Container>
        <div className="relative text-center">
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="font-chakra-petch text-5xl font-bold text-white">
              BOOK YOUR SERVICE TODAY
            </h2>
            <p className="text-[#EDEDED]">
              Egestas integer eget aliquet nibh praesent tristique magna.
              Penatibus et magnis dis parturient montes nascetur ridiculus
            </p>
            <Button 
              className="bg-[#FD6527] hover:bg-[#FD6527]/90 text-white rounded-none px-8 py-4 text-base font-chakra-petch"
            >
              BOOK SERVICE NOW
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

