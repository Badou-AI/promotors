import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const teamMembers = [
  {
    name: "BURTON LYONS",
    role: "CEO of Lorem",
    image: "/placeholder.svg?height=600&width=400",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  // Placeholder team members
  ...Array(7).fill(null).map((_, i) => ({
    name: `TEAM MEMBER ${i + 2}`,
    role: "Position",
    image: "/placeholder.svg?height=600&width=400",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  }))
]

export function Team() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="mb-12 font-['Chakra_Petch'] text-3xl md:text-[42px] leading-none">
        EXPERT TEAM MEMBERS
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="group relative h-[600px] overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform group-hover:translate-y-0">
              <div className="bg-[#121212] p-6">
                <h3 className="font-['Chakra_Petch'] text-[23px] leading-8">
                  {member.name}
                </h3>
                <p className="font-['Mulish'] text-[#EDEDED]/80">
                  {member.role}
                </p>
                <div className="mt-4 flex gap-4">
                  <a href={member.socials.facebook} className="text-[#FD6527] hover:text-white transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href={member.socials.twitter} className="text-[#FD6527] hover:text-white transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={member.socials.instagram} className="text-[#FD6527] hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href={member.socials.linkedin} className="text-[#FD6527] hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

