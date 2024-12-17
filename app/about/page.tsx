import { Benefits } from "@/components/benefits"
import { ServicesGrid } from "@/components/shared/services-grid"
import { Gallery } from "@/components/gallery"
import { Steps } from "@/components/steps"
import { Team } from "@/components/team"
import { CTA } from "@/components/cta"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimationWrapper } from "@/components/animation-wrapper"
import { PageBanner } from "@/components/page-banner"

export default function AboutPage() {
  return (
    <>
      <SiteHeader hasNavBanner={true} />
      <PageBanner title="About Us" breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about", active: true }]} />
      <AnimationWrapper>
        <main className="min-h-screen bg-[#161616] text-[#EDEDED]">
          <Benefits />
          <ServicesGrid variant="full" showDetailsLink={false} />
          <Gallery />
          <Steps />
          <Team />
          <CTA />
        </main>
      </AnimationWrapper>
      <SiteFooter />
    </>
  )
}


