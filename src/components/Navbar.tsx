'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Box, Crown, Github, Trophy } from "lucide-react"

const navMenu = [
  {
    name: 'Home',
    icon: <Box color="#a6adae" size={18} strokeWidth={2} />,
    href: '/'
  },
  {
    name: 'Rankings',
    icon: <Crown color="#a6adae" size={18} strokeWidth={2} />,
    href: '/rankings'
  },
  {
    name: 'Seasons',
    icon: <Trophy color="#a6adae" size={18} strokeWidth={2} />,
    href: '/seasons'
  },
  {
    name: '',
    icon: <Github color="#a6adae" size={18} strokeWidth={2} />,
    href: 'https://github.com/mfalfath25/ufc-stats-tracker'
  }
]

const Navbar = () => {
  const path = usePathname()

  return (
    <div className="navbar bg-base-200">
      <div className="flex-1 hidden sm:flex">
        <Image
          src={'/ufc.svg'}
          alt="UFC"
          className="mx-2 h-12 w-16"
          height={100}
          width={100}
        />
      </div>
        <ul className="menu menu-horizontal sm:gap-2 gap-0 px-0 mx-auto">
        {
          navMenu.map((menu, index) => (
            <li key={index} className="menu-item">
              <Link href={menu.href} className={`menu-content px-2 ${path === menu.href ? 'active' : ''}`}>
                <span>{menu.icon}</span>
                {menu.name}
              </Link>
            </li>
          ))
          }
        </ul>
    </div>
  )
}

export default Navbar
