import React from 'react'
import Image from 'next/image'

const pricings = [
  { title: 'Free', price: 0.00, features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'] },
  { title: 'Basic', price: 9.99, features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'] },
  { title: 'Pro', price: 99.99, features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'] },
]

export default function Header() {
  return (
    <>
      <div className='flex justify-center max-w-7xl w-full mt-10 flex-col relative left-0 right-0 mx-auto'>
        <div className='flex-1 text-center text-5xl'>Pricing</div>
        <div className='flex items-center flex-wrap gap-6 mt-5'>
          {pricings.map((pricing, index) => (
            <div className='max-w-[calc(426px-20px)] w-full min-h-[500px] border rounded-lg px-6 py-8 flex flex-col gap-6'>
              <div className='text-center text-3xl font-bold'>{pricing.title}</div>
              <div className='text-center text-3xl font-bold'>${pricing.price}/month</div>
              <ul className='space-y-3'>
                {pricing.features.map((feature, index) => (
                  <li className='flex gap-3'>
                    <Image src='/icons/checkbox-round.svg' alt={feature} width={20} height={24} className='text-[#6246ea]'/>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* 到最底部 */}
              <div className='flex-1'/>
              <button className='bg-[#6246ea] text-white py-2 rounded-lg'>Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}