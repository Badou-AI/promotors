import Link from "next/link"

interface PaginationProps {
  currentPage: number
  totalPages: number
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`/shop?page=${page}`}
          className={`
            flex h-10 w-10 items-center justify-center font-chakra-petch
            ${page === currentPage
              ? 'bg-[#D16527] text-white'
              : 'text-white hover:text-[#D16527] transition-colors'
            }
          `}
        >
          {page}
        </Link>
      ))}
    </div>
  )
}

