"use client"

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaBug } from "react-icons/fa"

const NavBar = () => {
  const links = [
    { id: 1, name: 'dashboard', href: '/' },
    { id: 2, name: 'Issues', href: '/issues' },
  ]

  const currentPath = usePathname()


  return (
    <nav className='flex h-[4rem] items-center border rounded-full mx-10 mt-10 justify-end'>
        <Link className='mx-auto text-xl' href="/"><FaBug className="h-10 w-10"/></Link>
        <ul className='flex mx-auto space-x-8 text-lg'>
          {
            links.map((item) => (
              <Link
              className={classNames({
                "text-slate-400" : item.href ===currentPath,
                "text-zinc-600" : item.href !==currentPath,
                "hover:text-white/30 transition-colors": true
              })}
               href={item.href} key={item.id}>{item.name}</Link>
            ))
          }
            
        </ul>
    </nav>
  )
}

export default NavBar