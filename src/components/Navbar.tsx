import Link from "next/link"

const Navbar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <img src="/ufc.svg" alt="UFC" className="h-12 w-16 mx-2" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/rankings">Rankings</Link></li>
          <li><Link href="/competitions">Competitions</Link></li>
          <li><Link href="/seasons">Seasons</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar