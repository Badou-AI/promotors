"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  indicatorClassName?: string
}

export function Progress({ className, value, indicatorClassName, ...props }: ProgressProps) {
  return (
    <div className={cn("relative h-4 w-full overflow-hidden", className)} {...props}>
      <div
        className={cn("h-full w-full flex-1 transition-all", indicatorClassName)}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  )
}
