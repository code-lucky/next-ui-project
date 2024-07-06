import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default async function Header() {
  return (
    <>
        <div className='flex justify-center max-w-7xl w-full mt-10 flex-col relative left-0 right-0 mx-auto'>
            <div className='flex-1 text-center text-5xl'>Pricing</div>
            <div className='flex items-center flex-wrap gap-6 mt-5'>
              <div className='max-w-[calc(100%/3-20px)] w-full min-h-[400px] rounded border'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className='max-w-[calc(100%/3-20px)] w-full min-h-[400px] rounded border'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className='max-w-[calc(100%/3-20px)] w-full min-h-[400px] rounded border'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
        </div>
    </>
  )
}