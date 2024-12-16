import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageBanner } from "@/components/page-banner"
import { ShopGrid } from "@/components/shop-grid"
import { PromoSection } from "@/components/promo-section"
import { OrderStepsSection } from "@/components/order-steps-section"
import { BrandsSection } from "@/components/brands-section"
import { AnimationWrapper } from "@/components/animation-wrapper"

export default function ShopPage() {
  return (
    <>
      <SiteHeader hasNavBanner={true} />
      <PageBanner
        title="SHOP"
        breadcrumbs={[
          { label: "HOME", href: "/" },
          { label: "SHOP", href: "/shop", active: true },
        ]}
      />
      <AnimationWrapper>
        <main>
          <ShopGrid />
          <PromoSection />
          <OrderStepsSection />
          <BrandsSection />
        </main>
      </AnimationWrapper>
      <SiteFooter />
    </>
  )
}

