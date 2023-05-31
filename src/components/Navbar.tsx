import Link from "next/link"
import { Box, Crown, Trophy } from "lucide-react"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Image src="/ufc.svg" alt="UFC" className="h-12 w-16 mx-2" height={100} width={100} />
        <h1 className="italic hidden md:inline">Ultimate Fighting Championship Stats Tracker</h1>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/" className="gap-2">Home
              <Box color="#a6adae" size={18} strokeWidth={2} />
            </Link>
          </li>
          <li>
            <Link href="/rankings" className="gap-2">Rankings
              <Crown color="#a6adae" size={18} strokeWidth={2} />
            </Link>
          </li>
          <li>
            <Link href="/seasons" className="gap-2">Seasons
              <Trophy color="#a6adae" size={18} strokeWidth={2} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar