'use client'

import { useState } from 'react'
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description")

  return (
    <Tabs defaultValue="description" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-3 bg-transparent p-0">
        {["Description", "Additional Information", "Reviews"].map((tab) => (
          <TabsTrigger
            key={tab}
            value={tab.toLowerCase().replace(' ', '-')}
            className={cn(
              "border-b-2 py-2 bg-transparent text-lg font-semibold transition-colors rounded-none",
              activeTab === tab.toLowerCase().replace(' ', '-')
                ? "border-[#FF4D07] text-[#FF4D07] bg-transparent"
                : "border-transparent text-white/60 hover:text-white"
            )}
            variant="ghost"
          >
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="description" className="mt-6">
        <DescriptionTab />
      </TabsContent>
      <TabsContent value="additional-information" className="mt-6">
        <AdditionalInformationTab />
      </TabsContent>
      <TabsContent value="reviews" className="mt-6">
        <ReviewsTab />
      </TabsContent>
    </Tabs>
  )
}

function DescriptionTab() {
  return (
    <div className="text-white/80 space-y-4">
      <p>
        The SILENTBLOCK DAMPER M12 Ø 75MM is a high-performance vibration isolation component designed to reduce noise and vibration in various mechanical systems. This innovative damper utilizes advanced materials and engineering to provide superior damping characteristics while maintaining durability and longevity.
      </p>
      <p>
        Key features of the SILENTBLOCK DAMPER include:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Precision-engineered M12 thread for easy installation and secure fitment</li>
        <li>75mm diameter provides optimal surface area for effective vibration absorption</li>
        <li>High-quality rubber compound offers excellent resistance to oil, heat, and environmental factors</li>
        <li>Designed for use in automotive, industrial, and marine applications</li>
        <li>Helps extend the life of surrounding components by reducing stress and wear</li>
      </ul>
    </div>
  )
}

function AdditionalInformationTab() {
  const specs = [
    { name: "Repair Kit Type", value: "Maintenance Kit" },
    { name: "Number of Pieces", value: "1" },
    { name: "Package Depth (cm)", value: "22.61 cm" },
    { name: "Package Depth (in)", value: "8.90 in" },
    { name: "Package Height (cm)", value: "6.86 cm" },
    { name: "Material", value: "High-grade rubber and steel" },
    { name: "Maximum Load", value: "500 kg" },
    { name: "Operating Temperature", value: "-40°C to 120°C" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {specs.map((spec, index) => (
        <div key={index} className="flex justify-between py-2 border-b border-white/10">
          <span className="text-white/60">{spec.name}</span>
          <span className="text-white font-medium">{spec.value}</span>
        </div>
      ))}
    </div>
  )
}

function ReviewsTab() {
  const reviews = [
    { author: "John D.", rating: 5, comment: "Excellent product. Significantly reduced vibration in my workshop machinery." },
    { author: "Sarah M.", rating: 4, comment: "Good quality damper. Installation was straightforward. Could be a bit more affordable." },
    { author: "Mike R.", rating: 5, comment: "Top-notch performance. Exactly what I needed for my custom car build." },
  ]

  return (
    <div className="space-y-6">
      {reviews.map((review, index) => (
        <div key={index} className="border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-white">{review.author}</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={cn(
                    "w-5 h-5",
                    star <= review.rating ? "text-[#FF4D07]" : "text-white/20"
                  )}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-white/80">{review.comment}</p>
        </div>
      ))}
    </div>
  )
}

