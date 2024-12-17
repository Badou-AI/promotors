import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import Image from "next/image"

const progressStyle = "bg-gradient-to-r from-[#D16527] to-[#D16527] rounded-none"
const progressTrackStyle = "bg-[#121212] rounded-none"

export function Benefits() {
  return (
    <section className="bg-[#161616] py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-chakra-petch text-5xl font-bold text-white">
                WE MAKE AUTO REPAIR
                <br />
                MORE CONVENIENT
              </h2>
              <p className="text-[#EDEDED]">
                Amet commodo nulla facilisi nullam vehiculo. Purus in mollis nunc
                sed. Accumsan tortor posuere ac ut consequat semper viverra
                nam. Augue lacus viverra vitae congue eu consequat ac felis
                donec
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Amet commodo nulla facilisi nullam vehiculo. Purus in mollis nunc
                sed. Accumsan tortor posuere ac ut consequat semper viverra
                nam. Augue lacus viverra vitae congue eu consequat ac felis
                donec
              </p>
              <p>
                Acuam, quos. Accumsan tortor posuere ac ut consequat semper viverra
                nam. Augue lacus viverra vitae congue eu consequat ac felis
                donec
              </p>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between font-chakra-petch">
                  <span className="text-2xl text-white">Highly Qualified Experts</span>
                  <span className="text-2xl font-bold text-white">90%</span>
                </div>
                <Progress 
                  value={90} 
                  className={cn("h-2", progressTrackStyle)} 
                  indicatorClassName={progressStyle}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between font-chakra-petch">
                  <span className="text-2xl text-white">Clean, Modern Facility</span>
                  <span className="text-2xl font-bold text-white">99%</span>
                </div>
                <Progress 
                  value={99} 
                  className={cn("h-2", progressTrackStyle)} 
                  indicatorClassName={progressStyle}
                />
              </div>
            </div>
          </div>
          <div className="relative aspect-square w-full">
            {/* <div className="absolute inset-0 bg-black/50" /> */}
            <Image
              src="/propics/pro-tire-repair.jpg"
              alt="Auto repair facility"
              className="h-full w-full object-cover"
              width={600}
              height={600}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

