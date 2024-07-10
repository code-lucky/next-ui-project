import React from 'react'
import Image from 'next/image'

const features = [
  { icon: '/icons/github-icon.svg', title: 'Feature 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { icon: '/icons/github-icon.svg', title: 'Feature 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { icon: '/icons/github-icon.svg', title: 'Feature 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { icon: '/icons/github-icon.svg', title: 'Feature 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { icon: '/icons/github-icon.svg', title: 'Feature 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { icon: '/icons/github-icon.svg', title: 'Feature 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
]

export default function Feature({ locale, langName = 'en' }) {
  return (
    <>
      <div className='flex justify-center max-w-7xl w-full mt-10 flex-col relative left-0 right-0 mx-auto'>
        <div className='flex-1 text-center text-5xl'>{locale.title}</div>
        <div className='flex items-center flex-wrap gap-6 mt-5'>
          {features.map((feature, index) => (
            <div className='max-w-[calc(426px-20px)] w-full min-h-[260px] bg-[#d1d1e9] rounded p-5 flex flex-col justify-center items-center gap-4 hover:cursor-pointer transform transition-transform duration-300 hover:scale-105'>
              <Image src={feature.icon} alt={feature.title} width={80} height={80} className='relative mx-auto left-0 right-0'/>
              <div className='text-center text-3xl font-bold'>{feature.title}</div>
              <div>{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}