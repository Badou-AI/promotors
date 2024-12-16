export function StatsSection() {
  return (
    <section className="bg-[#121212] py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { number: "8K+", text: "Happy Clients dolor purus non enim praesent elementum" },
              { number: "22+", text: "Years on market diam vel quam elementum adipiscing commodo" },
              { number: "500+", text: "Instrument & parts suspendisse ante in nibh mauris egestas egestas" },
              { number: "99%", text: "Complate projects congue mauri aenean. Diam vel quam elementum" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="font-chakra-petch text-[66px] leading-[1.1] font-bold text-white mb-4">
                  {stat.number}
                </h3>
                <p className="font-mulish text-[18px] leading-[26px] text-[#EDEDED]">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

