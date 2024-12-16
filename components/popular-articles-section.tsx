import Image from "next/image"
import Link from "next/link"

interface ArticleCardProps {
  image: string
  category: string
  title: string
  date: string
  comments: string
  featured?: boolean
}

function ArticleCard({ image, category, title, date, comments, featured = false }: ArticleCardProps) {
  return (
    <article className={`group relative ${featured ? 'col-span-full' : ''}`}>
      <div className={`relative ${featured ? 'aspect-[21/9]' : 'aspect-[16/9]'} w-full overflow-hidden`}>
        <div 
          className="absolute inset-0 z-10 bg-black bg-opacity-50" 
        />
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
        <div className="space-y-2">
          <div className="text-[#D16527] text-sm">{category}</div>
          <h3 className={`font-chakra-petch text-white ${featured ? 'text-3xl' : 'text-xl'}`}>
            {title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-[#EDEDED]">
            <span>{date}</span>
            <span>{comments}</span>
          </div>
        </div>
      </div>
      <Link
        href="/blog"
        className="absolute inset-0 z-30"
        aria-label={`Read more about ${title}`}
      >
        <span className="sr-only">Read more</span>
      </Link>
    </article>
  )
}

export function PopularArticlesSection() {
  const articles = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/car-battery-check.jpg-gdJyC57LGMObixeYh1eWconVyDXToL.jpeg",
      category: "CAR ADVICE",
      title: "SIGNS YOUR CAR BATTERY HAS TO BE REPLACED",
      date: "May 29 2023",
      comments: "No Comments",
      featured: true
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dark-luxury-car-interior.jpg-BxbF2RxxvjovCZVcrpinDpgmyEuWCp.jpeg",
      category: "CAR ADVICE",
      title: "HOW TO PROTECT THE INTERIOR OF YOUR CAR",
      date: "May 29 2023",
      comments: "No Comments"
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/check-engine-control-light-jSyN7Qpi3hrn8pPXzBOvo4UkdMzwGi.jpeg",
      category: "CAR ADVICE",
      title: "IS YOUR CAR'S CHECK ENGINE LIGHT FLASHING?",
      date: "May 29 2023",
      comments: "No Comments"
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/car-safety-accessories-2.jpg-kms4VsUUaCmbTfbDDVEcBojAKcwhO3.jpeg",
      category: "CAR ADVICE",
      title: "5 MUST-HAVE THINGS IN YOUR CAR FOR SAFETY",
      date: "May 29 2023",
      comments: "No Comments"
    }
  ]

  return (
    <section className="bg-[#161616] py-20">
      <div className="container">
        <h2 className="font-chakra-petch text-5xl font-bold text-white mb-12">
          POPULAR ARTICLES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  )
}

