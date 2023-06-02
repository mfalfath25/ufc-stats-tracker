import Link from "next/link"
import { Box, Crown, Trophy } from "lucide-react"
import Image from "next/image"
import ufcLogo from "@/public/ufc.svg"

const Navbar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Image src={ufcLogo} alt="UFC" className="h-12 w-16 mx-2" height={100} width={100} />
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