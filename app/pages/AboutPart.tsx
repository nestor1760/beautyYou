"use client"

import Image from 'next/image'
import React from 'react'
import NavigationItem from '../shared/NavigationItem'
import Button from '../UI/Button'
// import { useScrollPosition } from '../hooks/useScrollPosition'

const AboutPart = () => {

  // const scroll = useScrollPosition()

  // console.log(scroll);


  return (
    <section
      id='about me'
      className='flex items-center justify-center flex-col pt-[123px]'
    >
      <div className='flex items-start justify-between w-full max-w-[1110px]'>
        <Image
          src='/about_media/hero_image.png'
          width={475}
          height={659}
          alt='hero_icon'
        />
        <div className='flex items-end justify-between h-[659px] flex-col flex-grow'>
          <NavigationItem
            label='about me'
          />
          <div className='max-w-[542px] max-h-[252px] text-end'>
            <h2 className='text-[32px] mb-[60px] italic leading-10 uppercase'>
              Creating beauty with attention to every detail
            </h2>
            <p className='text-[16px] leading-4 text-end'>
              Hello! I&lsquo;m Sara, your brow artist with 6 years of experience. <br />My mission is to enhance your natural beauty through perfectly shaped brows. Join me for a session where every detail matters, and your satisfaction is the goal. You can expect personalized attention and customized solutions tailored to your unique brow needs and preferences. With my dedication and passion for beauty, I strive to exceed your expectations and leave you feeling empowered and confident in your look.
            </p>
          </div>
          <Button />
        </div>
      </div>
      <p className='w-[882px] mt-[200px] mb-[180px] text-[36px] italic uppercase text-center tracking-normal'>
        Beauty is not only a reflection, but also a feeling that permeates the soul and refreshes it with every breath
      </p>
    </section>
  )
}

export default AboutPart