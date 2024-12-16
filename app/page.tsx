import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { MaintenanceVideoSection } from "@/components/maintenance-video-section"
import { PricingSection } from "@/components/pricing-section"
import { CarCleaningSection } from "@/components/car-cleaning-section"
import { ServiceProcessSection } from "@/components/service-process-section"
import { PopularArticlesSection } from "@/components/popular-articles-section"
import { AppointmentSection } from "@/components/appointment-section"
import { SiteFooter } from "@/components/site-footer"
import { AnimationWrapper } from "@/components/animation-wrapper"

export default function Home() {
  return (
    <>
      <SiteHeader hasNavBanner={false} />
      <AnimationWrapper>
        <main>
          <HeroSection />
          <StatsSection />
          <ServicesSection />
          <MaintenanceVideoSection />
          <PricingSection />
          <CarCleaningSection />
          <ServiceProcessSection />
          <PopularArticlesSection />
          <AppointmentSection />
        </main>
      </AnimationWrapper>
      <SiteFooter />
    </>
  )
}

