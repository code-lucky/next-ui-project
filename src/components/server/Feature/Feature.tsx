import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default async function Header() {
  return (
    <>
        <div className='flex justify-center max-w-7xl w-full mt-10 flex-col relative left-0 right-0 mx-auto'>
            <div className='flex-1 text-center text-5xl'>Feature</div>
            <div className='flex items-center flex-wrap gap-6 mt-5'>
                <div className='w-[calc(100%/3-20px)] h-[260px] bg-[#d1d1e9] rounded'></div>
                <div className='w-[calc(100%/3-20px)] h-[260px] bg-[#d1d1e9] rounded'></div>
                <div className='w-[calc(100%/3-20px)] h-[260px] bg-[#d1d1e9] rounded'></div>
                <div className='w-[calc(100%/3-20px)] h-[260px] bg-[#d1d1e9] rounded'></div>
            </div>
        </div>
    </>
  )
}