const steps = [
  {
    number: "01",
    title: "MAKE AN APPOINTMENT",
    description: "Tempor id eu nul nunc mi ipsum faucibus. Ac feugiat sed lectus vestibulum. Pellentesque habitant morbi tristique senectus."
  },
  {
    number: "02",
    title: "SELECT SERVICE",
    description: "Pretium quam vulputate dignissim suspendisse in est ante. Neque tempus quam pellentesque nec nam aliquam."
  },
  {
    number: "03",
    title: "CONFIRM REQUEST",
    description: "Ullamcorper eget nulla facilisi etiam. Integer eget aliquet nibh praesent tristique magna sit. Placerat vestibulum lectus mauris ultrices"
  },
  {
    number: "04",
    title: "GET YOUR CAR",
    description: "Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Tortor pretium viverra suspendisse potenti nullam"
  }
]

export function Steps() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="lg:grid lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4 mb-12 lg:mb-0">
          <h2 className="font-['Chakra_Petch'] text-3xl md:text-[42px] leading-none">
            HOW TO SERVICE
            <br />
            YOUR CAR
          </h2>
          <p className="font-['Mulish'] text-lg leading-[26px] max-w-2xl">
            Egestas integer eget aliquet nibh praesent tristique magna. Penatibus magnis dis parturient montes
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {steps.map((step) => (
            <div key={step.number} className="group space-y-4">
              <div className="font-['Chakra_Petch'] text-[#FD6527] text-2xl font-semibold">
                {step.number}
              </div>
              <h3 className="font-['Chakra_Petch'] text-[23px] leading-8">
                {step.title}
              </h3>
              <p className="font-['Mulish'] text-lg leading-[26px] text-[#EDEDED]/80">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

