import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Menus from '../client/menus'
export default async function Header() {
  return (
    <>
      <header className='flex justify-center px-5 border-b'>
        <section className="max-w-screen-xl w-full flex h-14 items-center md:gap-28 sm:gap-10 gap-5 justify-between">
          <Link href="/">
            <Image src="vercel.svg" alt="Logo" width={100} height={100}/>
          </Link>

          <div className='hidden md:flex flex-1 justify-between'>
            <menu className='flex md:gap-9 sm:gap-5 gap-3'>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Project</Link>
              </li>
              {/* <li>
                <Link href="/">Blog</Link>
              </li> */}
            </menu>
            <Link href="/">Sign in</Link>
          </div>

          <div className='flex md:hidden'>
            <Menus />
          </div>
        </section>
      </header>
    </>
  )
}