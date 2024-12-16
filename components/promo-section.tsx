import Link from "next/link"

interface PromoCardProps {
  title: string
  description?: string
  price: number
  originalPrice?: number
  className?: string
  buttonText?: string
  showFrom?: boolean
}

function PromoCard({ 
  title, 
  description, 
  price, 
  originalPrice, 
  className = "", 
  buttonText,
  showFrom = false
}: PromoCardProps) {
  return (
    <div 
      className={`relative bg-[#121212] p-8 group overflow-hidden flex flex-col ${className}`}
    >
      <div className="relative z-10 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="font-chakra-petch text-3xl font-bold text-white mb-4 leading-tight">
            {title}
          </h3>
          {description && (
            <p className="text-[#EDEDED] text-base mb-6">
              {description}
            </p>
          )}
        </div>
        <div>
          <div className="h-1 w-16 bg-[#D16527] mb-4" />
          <div className="flex items-baseline gap-2">
            {showFrom && (
              <span className="text-sm text-[#EDEDED]">from</span>
            )}
            <span className="font-chakra-petch text-2xl text-white">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-[#606060] line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          {buttonText && (
            <Link
              href="/shop"
              className="inline-block bg-[#D16527] px-6 py-3 text-white mt-6 hover:bg-[#D16527]/90 transition-colors font-chakra-petch"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export function PromoSection() {
  return (
    <section className="py-20 bg-[#161616]">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left column (2/3 width) */}
          <div className="lg:col-span-2 grid grid-rows-[auto,1fr] gap-8">
            {/* Top cell */}
            <PromoCard
              title="GARAGE & AUTO SHOP EQUIPMENT"
              description="Essential equipment for auto repair and maintenance. In hac habitasse platea dictumst vestibulum rhoncus"
              price={49.99}
              showFrom={true}
              className="h-full"
            />
            {/* Bottom two cells */}
            <div className="grid sm:grid-cols-2 gap-8">
              <PromoCard
                title="0W20 SYNTHETIC MOTOR OIL, 5-L"
                price={34.99}
                originalPrice={39.99}
              />
              <PromoCard
                title="U1 12-VOLT 32 AH BATTERY"
                price={129.99}
                originalPrice={134.99}
              />
            </div>
          </div>
          
          {/* Right column (1/3 width) */}
          <div className="lg:row-span-1">
            <PromoCard
              title="SAVE $99 ON YOUR PURCHASE OF ANY SET OF MICHELIN TIRES"
              description="The instant savings will be deducted in the shopping cart on qualifying products"
              price={99}
              buttonText="UP TO $99"
              className="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

