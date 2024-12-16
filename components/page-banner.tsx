import Link from "next/link"
import { Container } from "@/components/ui/container"

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
    <section className="relative bg-[#121212] py-4 mt-0">
      <div 
        className="absolute inset-0 bg-[url('/endless-road.jpg')] bg-cover bg-center"
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 bg-black/85"
        aria-hidden="true"
      />
      <Container className="py-4">
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
          <h1 className="font-chakra-petch text-3xl font-bold leading-none text-white uppercase mt-4">
            {title}
          </h1>
        </div>
      </Container>
    </section>
  )
}

