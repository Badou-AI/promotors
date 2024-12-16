import { SiteHeader } from "@/components/site-header"
import { ProductGallery } from "@/components/shop/product-gallery"
import { ProductDetails } from "@/components/shop/product-details"
import { ProductTabs } from "@/components/shop/product-tabs"
import { PromoSection } from "@/components/shop/promo-section"
import { OtherProducts } from "@/components/shop/other-products"
import { SiteFooter } from "@/components/site-footer"
import { AnimationWrapper } from "@/components/animation-wrapper"
import Link from "next/link"

export default function ProductPage() {
  return (
    <>
      <SiteHeader hasNavBanner={false} />
      <AnimationWrapper>
        <div className="bg-[#161616] text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-white/60 hover:text-white">HOME</Link>
            <span className="text-white/60">•</span>
          <Link href="/shop" className="text-white/60 hover:text-white">SHOP</Link>
          <span className="text-white/60">•</span>
          <span className="text-[#FF4D07]">SINGLE PRODUCT</span>
        </div>

        {/* Product Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <ProductGallery />
          <ProductDetails />
        </div>

        <ProductTabs />
      </div>
      <PromoSection />
      <div className="container mx-auto px-4">
        <OtherProducts />
      </div>
        </div>
      </AnimationWrapper>
      <SiteFooter />
    </>
  )
}

