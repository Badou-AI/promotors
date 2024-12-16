import Link from "next/link"

interface PageBannerProps {
  title: string
  breadcrumbs: Array<{
    label: string
    href: string
    active?: boolean
  }>
}

export function PageBanner({ title, breadcrumbs }: PageBannerProps) {
  return (
    <section className="bg-[#121212] py-8 mt-20">
      <div className="container relative py-8">
        <div className="relative z-10">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 font-chakra-petch text-base">
              {breadcrumbs.map((item, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <span className="mx-2 text-[#D16527]" aria-hidden="true">
                      {'>'}
                    </span>
                  )}
                  <Link
                    href={item.href}
                    className={item.active ? 'text-[#D16527]' : 'text-white hover:text-[#D16527] transition-colors'}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="font-chakra-petch text-[66px] font-bold leading-none text-white mt-4">
            {title}
          </h1>
        </div>
        <div 
          className="absolute top-0 right-0 bottom-0 left-1/2 bg-[url('/placeholder.svg')] bg-no-repeat bg-right bg-contain"
          aria-hidden="true"
        ></div>
      </div>
    </section>
  )
}

