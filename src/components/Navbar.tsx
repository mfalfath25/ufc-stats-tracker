'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Box, Crown, Trophy } from "lucide-react"

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
  }
]

const Navbar = () => {
  const path = usePathname()

  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Image
          src={'/ufc.svg'}
          alt="UFC"
          className="mx-2 h-12 w-16"
          height={100}
          width={100}
        />
      </div>
        <ul className="menu menu-horizontal px-1">
        {
          navMenu.map((menu, index) => (
            <li key={index} className="menu-item">
              <Link href={menu.href} className={`menu-content ${path === menu.href ? 'active' : ''}`}>
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
