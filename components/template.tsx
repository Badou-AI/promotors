import { SiteHeader } from "@/components/site-header"

interface TemplateProps {
  children: React.ReactNode
}

export function Template({ children }: TemplateProps) {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main className="flex-1 pt-20">
        {children}
      </main>
    </div>
  )
} 