import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed w-full h-15 bg-secondary">
      <div className="px-10 flex flex-row h-full">
        <Link href='/'>
          <Image src='/icons/next.svg' alt='Next.js Logo' width={100} height={100} 
            className="h-full filter-(--invert-light)"
          />
        </Link>
      </div>
    </header>
  )
}