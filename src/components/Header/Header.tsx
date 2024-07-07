import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Menus from '../client/menus'
import './css/header.css'

// menu list
const menus = [
  { name: 'Feature', link: '/#feature' },
  { name: 'Pricing', link: '/#pricing' },
  { name: 'FAQ', link: '/#faq' },
]

export default function Header() {
  return (
    <>
      <header className='flex justify-center px-5 border-b'>
        <section className="max-w-screen-xl w-full flex h-14 items-center md:gap-28 sm:gap-10 gap-5 justify-between">
          <Link href="/">
            <Image src="vercel.svg" alt="Logo" width={100} height={100} />
          </Link>

          <div className='hidden md:flex flex-1 justify-between'>
            {/* 鼠标hover出现下划线 */}
            <menu className='flex md:gap-20 sm:gap-5 gap-3'>
              {menus.map((menu, index) => (
                <Link href={menu.link} key={index} className='menu-link'>{menu.name}</Link>
              ))}
            </menu>
          </div>

          <div className='flex md:hidden'>
            {/* 给menu组件传递参数 */}
            <Menus linkList={menus}/>
          </div>
        </section>
      </header>
    </>
  )
}