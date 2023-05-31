import Link from "next/link"
import { Triangle, Crown, Trophy } from "lucide-react"

const Navbar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <img src="/ufc.svg" alt="UFC" className="h-12 w-16 mx-2" />
        <h1 className="italic hidden md:inline">Ultimate Fighting Championship Stats Tracker</h1>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home
              <Triangle color="#a6adae" size={18} strokeWidth={2} />
            </Link>
          </li>
          <li>
            <Link href="/rankings">Rankings
              <Crown color="#a6adae" size={18} strokeWidth={2} />
            </Link>
          </li>
          {/* <li><Link href="/competitions">Competitions</Link></li> */}
          <li>
            <Link href="/seasons">Seasons
              <Trophy color="#a6adae" size={18} strokeWidth={2} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar