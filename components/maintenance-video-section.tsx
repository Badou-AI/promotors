import { Play } from 'lucide-react'
import Image from 'next/image'

export function MaintenanceVideoSection() {
  return (
    <section className="bg-[#161616] py-20">
      <div className="container">
        <h2 className="font-chakra-petch text-5xl font-bold text-white mb-12">
          MAINTENANCE & REPAIRS
        </h2>
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/car-maintenance-and-repair.jpg-eczOUd5WfTdQUbNEKtkmTKSfLURS3M.jpeg"
            alt="Car Maintenance and Repair"
            fill
            className="object-cover"
          />
          <div 
            className="absolute inset-0 bg-black bg-opacity-50" 
          />
          {/* Play button */}
          <button 
            className="absolute inset-0 m-auto w-16 h-16 bg-[#D16527] hover:bg-[#D16527]/90 transition-colors flex items-center justify-center"
            aria-label="Play video"
          >
            <Play className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}

