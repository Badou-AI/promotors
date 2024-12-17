import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Container } from "@/components/ui/container"
import Image from "next/image"
const teamMembers = [
  {
    name: "Omar 'Chief' Diop",
    role: "Master Technician",
    image: "/crew/1-chief.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Anna 'Tata' Diop",
    role: "Service Advisor",
    image: "/crew/4-tata.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Abdoulaye 'Baba' Seck",
    role: "Head Mechanic",
    image: "/crew/2-baba.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Myriam 'Goldfingers' Faye",
    role: "Detailing Specialist",
    image: "/crew/3-myriam.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Hassan 'Ying' Sy",
    role: "Tire & Alignment Expert",
    image: "/crew/5-hassan-ying.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "David 'Handy' Diatta",
    role: "Bodywork Specialist",
    image: "/crew/6-david-handy.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Hussein 'Yang' Sy",
    role: "Electrical & Engine Specialist",
    image: "/crew/7-hussein-yang.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Malik 'Rook' Ba",
    role: "Apprentice Mechanic",
    image: "/crew/8-malik-rook.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  }
]

export function Team() {
  return (
    <section className="bg-[#161616] py-20">
      <Container>
        <h2 className="font-chakra-petch text-5xl font-bold text-white mb-12">
          EXPERT TEAM MEMBERS
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative h-[600px] overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={600}
                  className="h-full w-full object-cover"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform group-hover:translate-y-0">
                <div className="bg-[#121212] p-6">
                  <h3 className="font-chakra-petch text-2xl text-white">
                    {member.name}
                  </h3>
                  <p className="text-[#EDEDED]/80">
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
      </Container>
    </section>
  )
}

