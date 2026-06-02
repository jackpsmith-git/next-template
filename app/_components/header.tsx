import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed w-full h-15 bg-secondary shadow-lg">
      <div className="px-16 flex flex-row h-full w-full">
        <Link href='/'>
          <Image src='/icons/next.svg' alt='Next.js Logo' width={100} height={100} 
            className="h-full filter-(--invert-light)"
            />
        </Link>
      </div>
    </header>
  )
}