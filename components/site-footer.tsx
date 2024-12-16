import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

export function SiteFooter() {
  return (
    <footer className="bg-[#121212] pt-20 pb-4">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-0gupu7WPmxrffDyXYbc3Mf2jKRV6in.png"
                alt="ProMotors Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-[#EDEDED]">
              Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat
            </p>
            <div className="space-y-1">
              <div className="text-[#EDEDED]">Support center 24/7</div>
              <Link href="tel:+11234567890" className="text-white font-chakra-petch text-xl hover:text-[#D16527] transition-colors">
                + 1 123 456-7890
              </Link>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-chakra-petch text-white text-xl mb-6">ABOUT US</h3>
            <ul className="space-y-4">
              {['ABOUT US', 'OUR TEAM', 'OUR WORK', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link href="/" className="text-[#EDEDED] hover:text-[#D16527] transition-colors flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#D16527]" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h3 className="font-chakra-petch text-white text-xl mb-6">POPULAR SERVICES</h3>
            <ul className="space-y-4">
              {[
                'TIRE REPAIR',
                'BRAKE REPAIR',
                'ENGINE REPAIR',
                'CHARGING REPAIR',
                'COOLING SYSTEM',
                'WHEEL ALIGNMENT',
                'BATTERY SERVICE',
                'SUSPENSION'
              ].map((service) => (
                <li key={service}>
                  <Link href="/" className="text-[#EDEDED] hover:text-[#D16527] transition-colors flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#D16527]" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-chakra-petch text-white text-xl mb-6">SUBSCRIBE</h3>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-white uppercase">Your Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="bg-transparent border-t-0 border-x-0 border-b border-b-[#343434] rounded-none focus-visible:ring-0 focus-visible:border-b-[#D16527] placeholder:text-[#606060]"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-[#D16527] hover:bg-[#D16527]/90 text-white"
              >
                SUBSCRIBE
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#343434] pt-4 text-center text-[#EDEDED] text-sm">
          Merkulove © Promotors Template All rights reserved Copyrights 2022
        </div>
      </Container>
    </footer>
  )
}

