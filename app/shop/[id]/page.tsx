import { SiteHeader } from "@/components/site-header"
import { ProductGallery } from "@/components/shop/product-gallery"
import { ProductDetails } from "@/components/shop/product-details"
import { ProductTabs } from "@/components/shop/product-tabs"
import { PromoSection } from "@/components/shop/promo-section"
import { OtherProducts } from "@/components/shop/other-products"
import { SiteFooter } from "@/components/site-footer"
import { AnimationWrapper } from "@/components/animation-wrapper"
import { Container } from "@/components/ui/container"
import { PageBanner } from "@/components/page-banner"

export default function ProductPage() {
  return (
    <>
      <SiteHeader hasNavBanner={true} />
      <PageBanner 
        title="MICHELIN PILOT SPORT 4 S" 
        breadcrumbs={[
          { label: "HOME", href: "/" },
          { label: "SHOP", href: "/shop" },
          { label: "MICHELIN PILOT SPORT 4 S", href: "/shop/michelin-pilot-sport-4s", active: true }
        ]} 
      />
      <AnimationWrapper>
        <div className="bg-[#161616] text-white py-12">
          <Container>   
            {/* Product Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <ProductGallery />
              <ProductDetails />
            </div>

            <ProductTabs />
          </Container>
        </div>
        <PromoSection />
        <div className="bg-[#161616] py-20">
          <Container>
            <OtherProducts />
          </Container>
        </div>
      </AnimationWrapper>
      <SiteFooter />
    </>
  )
}

