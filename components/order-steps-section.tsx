import { Container } from "@/components/ui/container"

interface OrderStepProps {
  number: string
  title: string
  description: string
}

function OrderStep({ number, title, description }: OrderStepProps) {
  return (
    <div className="space-y-4 group">
      <div className="h-[0.5px] bg-white group-hover:bg-[#D16527] transition-colors duration-300 mb-6"></div>
      <div className="text-[#D16527] font-chakra-petch text-xl">
        {number}
      </div>
      <h3 className="font-chakra-petch text-2xl text-white">
        {title}
      </h3>
      <p className="text-[#EDEDED]">
        {description}
      </p>
    </div>
  )
}

export function OrderStepsSection() {
  return (
    <section className="py-20 bg-[#121212]">
      <Container>
        <div className="grid lg:grid-cols-[1fr,2fr] gap-16">
          <div>
            <h2 className="font-chakra-petch text-3xl font-bold text-white mb-6">
              PLACING AN ORDER
              <br />
              — STEP BY STEP
            </h2>
            <p className="text-[#EDEDED]">
              Egestas integer eget aliquet nibh praesent tristique magna. Porttittor
              magna sit porttitor mattis.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <OrderStep
              number="01"
              title="MAKE AN APPOINTMENT"
              description="Tempor id eu nisl nunc mi ipsum faucibus. Ac feugiat sed lectus vestibulum. Pellentesque habitant morbi tristique senectus"
            />
            <OrderStep
              number="02"
              title="SELECT SERVICE"
              description="Pretium quam vulputate dignissim suspendisse in est ante. Neque tempus quam pellentesque nec nam aliquam"
            />
            <OrderStep
              number="03"
              title="CONFIRM REQUEST"
              description="Ullamcorper eget nulla facilisi etiam. Integer eget aliquet nibh praesent tristique magna sit. Placerat vestibulum lectus mauris ultrices"
            />
            <OrderStep
              number="04"
              title="GET YOUR CAR"
              description="Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Tortor pretium viverra suspendisse potenti nullam"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

