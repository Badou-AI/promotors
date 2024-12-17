import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimationWrapper } from "@/components/animation-wrapper"
import { PageBanner } from "@/components/page-banner"
import { ServicesGrid } from "@/components/shared/services-grid"
import { ServicePromo } from "@/components/services/service-promo"
import { ServiceHighlight } from "@/components/services/service-highlight"
import { BrandShowcase } from "@/components/services/brand-showcase"
import { ServiceOffers } from "@/components/services/service-offers"

export default function ServicesPage() {
  return (
    <>
      <SiteHeader hasNavBanner={true} />
      <PageBanner 
        title="Services" 
        breadcrumbs={[
          { label: "Home", href: "/" }, 
          { label: "Services", href: "/services", active: true }
        ]} 
      />
      <AnimationWrapper>
        <main className="min-h-screen bg-[#161616] text-[#EDEDED]">
          <ServicesGrid variant="full" showDetailsLink={true} />
          <ServicePromo />
          <ServiceHighlight />
          <BrandShowcase />
          <ServiceOffers />
        </main>
      </AnimationWrapper>
      <SiteFooter />
    </>
  )
} 