'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Menus from './components/menus'
import './css/header.css'
import { defaultLocale } from '@/lib/i18n'

// menu list
const menus = [
  { name: 'Feature', link: '/#feature' },
  { name: 'Pricing', link: '/#pricing' },
  { name: 'FAQ', link: '/#faq' },
]

export default function Header() {

  const [langName, setLangName] = useState(defaultLocale);

  return (
    <>
      <header className='flex justify-center px-5 border-b'>
        <section className="max-w-screen-xl w-full flex h-14 items-center md:gap-28 sm:gap-10 gap-5 justify-between">
          <Link href={langName}>
            <Image src="vercel.svg" alt="Logo" width={100} height={100} />
          </Link>

          <div className='hidden md:flex flex-1 justify-between'>
            {/* 鼠标hover出现下划线 */}
            <menu className='flex md:gap-20 sm:gap-5 gap-3'>
              {menus.map((menu, index) => (
                <Link href={`${langName}/${menu.link}`} key={index} className='menu-link'>{menu.name}</Link>
              ))}
            </menu>
          </div>

          <div>
            <div>zh</div>
            <div className='flex md:hidden'>
              <Menus linkList={menus}/>
            </div>
          </div>
        </section>
      </header>
    </>
  )
}