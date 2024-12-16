export function StatsSection() {
  return (
    <section className="bg-[#121212] py-20">
      <div className="container">
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "8K+", text: "Happy Clients dolor purus non enim praesent elementum" },
              { number: "22+", text: "Years on market diam vel quam elementum adipiscing commodo" },
              { number: "500+", text: "Instrument & parts suspendisse ante in nibh mauris egestas egestas" },
              { number: "99%", text: "Complate projects congue mauri aenean. Diam vel quam elementum" },
            ].map((stat, index) => (
              <div key={index}>
                <h3 className="font-chakra-petch text-[66px] leading-none font-bold text-white">
                  {stat.number}
                </h3>
              </div>
            ))}
          </div>
          <div className="w-full h-px bg-[#343434]"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "8K+", text: "Happy Clients dolor purus non enim praesent elementum" },
              { number: "22+", text: "Years on market diam vel quam elementum adipiscing commodo" },
              { number: "500+", text: "Instrument & parts suspendisse ante in nibh mauris egestas egestas" },
              { number: "99%", text: "Complate projects congue mauri aenean. Diam vel quam elementum" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="font-mulish text-base text-[#EDEDED]">
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

