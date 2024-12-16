import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export function Benefits() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-['Chakra_Petch'] text-3xl md:text-[42px] leading-none">
              WE MAKE AUTO REPAIR
              <br />
              MORE CONVENIENT
            </h2>
            <p className="font-['Mulish'] text-lg leading-[26px]">
              Amet commodo nulla facilisi nullam vehiculo. Purus in mollis nunc
              sed. Accumsan tortor posuere ac ut consequat semper viverra
              nam. Augue lacus viverra vitae congue eu consequat ac felis
              donec
            </p>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between font-['Chakra_Petch']">
                <span className="text-lg font-semibold">Highly Qualified Experts</span>
                <span className="text-lg font-bold">90%</span>
              </div>
              <Progress value={90} className={cn("h-2 bg-[#121212]", progressStyle)} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between font-['Chakra_Petch']">
                <span className="text-lg font-semibold">Clean, Modern Facility</span>
                <span className="text-lg font-bold">99%</span>
              </div>
              <Progress value={99} className={cn("h-2 bg-[#121212]", progressStyle)} />
            </div>
          </div>
        </div>
        <div className="relative aspect-square w-full">
          <div className="absolute inset-0 bg-black/50" />
          <img
            src="/placeholder.svg?height=600&width=600"
            alt="Auto repair facility"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

const progressStyle = cn(
  "[&>div]:bg-[#FD6527]"
)

