import { Check, X } from 'lucide-react'
import Link from 'next/link'

interface PricingFeature {
  name: string
  personal: boolean
  professional: boolean
}

export function PricingSection() {
  const features: PricingFeature[] = [
    { name: "Pellentesque eu tincidunt", personal: true, professional: true },
    { name: "Morbi leo urna molestie mattis", personal: true, professional: true },
    { name: "Enim nulla aliquet porttitor lacus", personal: true, professional: true },
    { name: "Scelerisque eleifend donec pretium", personal: false, professional: true },
    { name: "Eget sit amet tellus cras adipiscing", personal: false, professional: true },
  ]

  const commonFeatures = [
    "SAME DAY SERVICE",
    "CONVENIENT LOCATION",
    "ONLINE APPOINTMENT"
  ]

  return (
    <section className="bg-[#161616] py-20">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-16">
          <div className="space-y-6">
            <h2 className="font-chakra-petch text-5xl font-bold text-white">
              AFFORDABLE
              <br />
              PRICING PLANS
            </h2>
            <p className="text-[#EDEDED]">
              Nibh mauris cursus mattis molestie a iaculis at erat.
              Venenatis cras sed felis eget velit aliquet sagittis id
              consectetur. In est ante in nibh mauris
            </p>
            <ul className="space-y-4">
              {commonFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-[#D16527]">
                  <div className="w-2 h-2 bg-[#D16527]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Plan */}
            <div className="group bg-[#121212] relative">
              <div className="h-[1px] w-full bg-transparent group-hover:bg-[#D16527] transition-colors duration-300 absolute top-0 left-0"></div>
              <div className="p-8 space-y-8">
                <div>
                  <div className="text-[#EDEDED] mb-2">PERSONAL</div>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-chakra-petch text-white">$</span>
                    <span className="text-6xl font-chakra-petch text-white">49.99</span>
                  </div>
                  <div className="text-[#EDEDED]">per mounth</div>
                </div>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      {feature.personal ? (
                        <Check className="w-5 h-5 text-[#D16527]" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600" />
                      )}
                      <span className="text-[#EDEDED]">{feature.name}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className="inline-block w-full bg-[#D16527] text-center px-8 py-4 text-white hover:bg-[#D16527]/90 transition-colors"
                >
                  GET STARTED
                </Link>
              </div>
            </div>
            {/* Professional Plan */}
            <div className="group bg-[#121212] relative">
              <div className="h-[1px] w-full bg-transparent group-hover:bg-[#D16527] transition-colors duration-300 absolute top-0 left-0"></div>
              <div className="p-8 space-y-8">
                <div>
                  <div className="text-[#EDEDED] mb-2">PROFESSIONAL</div>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-chakra-petch text-white">$</span>
                    <span className="text-6xl font-chakra-petch text-white">99.99</span>
                  </div>
                  <div className="text-[#EDEDED]">per mounth</div>
                </div>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      {feature.professional ? (
                        <Check className="w-5 h-5 text-[#D16527]" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600" />
                      )}
                      <span className="text-[#EDEDED]">{feature.name}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className="inline-block w-full bg-[#D16527] text-center px-8 py-4 text-white hover:bg-[#D16527]/90 transition-colors"
                >
                  GET STARTED
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

