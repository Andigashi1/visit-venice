'use client'

import logo from '@/public/logo.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {

  const pathname = usePathname();

  return (
    <div className="z-100 fixed top-8 left-0 w-[98%] mx-4 py-2 px-10 bg-white border border-neutral-200 shadow-lg flex justify-between items-center rounded-xl">
        <Image src={logo} className='w-20 h-12' alt='logo'/>
        <div className="flex gap-6 font-bold [&>*]:cursor-pointer">
            <Link href='/' className={pathname === '/' ? 'text-primary' : null}>Home</Link>
            <Link href='/history' className={pathname === '/history' ? 'text-primary' : null}>History</Link>
            <Link href='/places' className={pathname === '/places' ? 'text-primary' : null}>Places</Link>
            <Link href='/gallery' className={`${pathname === '/gallery' ? 'text-primary' : null} cursor-pointer`}>Gallery</Link>
        </div>
    </div>
  )
}

export default Nav