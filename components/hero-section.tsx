import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#161616] pt-2">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/promotors-bg.png')] bg-cover bg-center opacity-20" />
      </div>
      <Container>
        <div className="relative flex flex-col lg:flex-row min-h-[calc(100vh-5rem)] items-center">
          <div className="max-w-2xl space-y-6 lg:w-1/2">
            <h1 className="font-chakra-petch text-6xl font-bold leading-tight tracking-tight text-white">
              AUTO MAINTENANCE
              <br />
              & REPAIR SERVICE
            </h1>
            <p className="text-lg text-[#EDEDED]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt
            </p>
            <Link
              href="/services"
              className="inline-block bg-[#D16527] px-8 py-4 text-white hover:bg-[#D16527]/90 transition-colors"
            >
              GET SERVICE
            </Link>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lux-auto-o4Da4UCpgjITItm6C5Si7jMeY3eaHt.png"
                alt="Luxury Car"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

