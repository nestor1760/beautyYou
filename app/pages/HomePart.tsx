import React from 'react'
import { BsArrowDown } from "react-icons/bs";

const HomePart = () => {

  console.log();


  return (
    <section className={`
      flex 
      items-center 
      justify-center
      h-[810px]
      bg-[url('../../public/images/home_media/home-background.png')]
      w-screen 
      bg-cover 
      bg-center
      text-whiteColor
    `}>
      <div className='flex items-center justify-center flex-col w-full max-w-[1110px]'>
        <h1 className='text-[64px] w-[988px] h-[156px] text-center mt-[292px] mb-[264px]'>BEAUTY LIVES INSIDE YOU, SHOW IT TO THE WORLD</h1>
        <div className='flex items-end justify-between w-full'>
          <p className='w-[262px] text-base tracking-normal font-medium'>Beauty is the silent poetry of the soul, painting vibrant hues in the heart&apos;s canvas without uttering a single word</p>
          <div className='flex items-center justify-center flex-col w-[63px]'>
            <BsArrowDown size={22} />
            <p className='mt-[10px] text-[20px]'>SCROLL</p>
          </div>
          <p className='w-[135px] h-[19px]'>50.0647° N, 19.9450° E</p>
        </div>
      </div>
    </section>
  )
}

export default HomePart