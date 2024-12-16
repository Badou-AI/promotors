export function ServiceProcessSection() {
  const steps = [
    {
      number: "01",
      title: "MAKE AN APPOINTMENT",
      description: "Tempor id eu nisl nunc mi ipsum faucibus. Ac feugiat sed lectus vestibulum. Pellentesque habitant morbi tristique senectus"
    },
    {
      number: "02",
      title: "SELECT SERVICE",
      description: "Pretium quam vulputate dignissim suspendisse in est ante. Neque tempus quam pellentesque nec nam aliquam"
    },
    {
      number: "03",
      title: "CONFIRM REQUEST",
      description: "Ultricies eget nulla facilisi etiam dignissim diam quis enim lobortis. Phasellus vestibulum lectus mauris ultrices"
    },
    {
      number: "04",
      title: "GET YOUR CAR",
      description: "Feugiat vivamus at augue eget arcu. Amet purus gravida quis blandit turpis cursus in hac. Suspendisse potenti nullam"
    }
  ]

  return (
    <section className="bg-[#121212] py-20">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-16">
          <div>
            <h2 className="font-chakra-petch text-5xl font-bold text-white mb-6">
              HOW TO SERVICE
              <br />
              YOUR CAR
            </h2>
            <p className="text-[#EDEDED]">
              Egestas integer eget aliquet nibh praesent tristique magna. Porttittor
              magna sit porttitor mattis.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="space-y-4 group">
                <div className="h-[0.5px] bg-white group-hover:bg-[#D16527] transition-colors duration-300 mb-6"></div>
                <div className="text-[#D16527] font-chakra-petch text-xl">
                  {step.number}
                </div>
                <h3 className="font-chakra-petch text-2xl text-white">
                  {step.title}
                </h3>
                <p className="text-[#EDEDED]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

