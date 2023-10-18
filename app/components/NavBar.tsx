import Link from 'next/link'
import React from 'react'
import { FaBug } from "react-icons/fa"

const NavBar = () => {
  return (
    <nav className='flex gap-4 h-[4rem] items-center border mx-10 mt-10 justify-end'>
        <Link className='mx-auto text-xl' href="/"><FaBug className="h-10 w-10"/></Link>
        <ul className='flex mx-auto space-x-8 text-lg'>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/issues">Issues</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar