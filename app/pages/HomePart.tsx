'use client'

import { BsArrowDown } from "react-icons/bs"
import { useVisible } from "../hooks/useVisible"

const HomePart = () => {
  const { ref, isVisible } = useVisible()

  console.log(isVisible);


  return (
    <section
      ref={ref}
      id="home"
      className={`
      flex 
      items-center 
      justify-center
      h-screen
      relative
      bg-[url('../../public/background_media/home-background.png')]
      w-screen 
      bg-cover 
      bg-center
      text-whiteColor
    `}>
      <div className='flex items-center justify-center flex-col w-full max-w-[1110px] leading-tight'>
        <h1 className='text-[64px] w-[988px] h-[156px] text-center'>BEAUTY LIVES INSIDE YOU, SHOW IT TO THE WORLD</h1>
        <div className='flex items-end justify-between absolute bottom-[18px] w-full max-w-[1110px] leading-tight'>
          <p className='w-[262px] text-base tracking-normal font-medium leading-tight'>Beauty is the silent poetry of the soul, painting vibrant hues in the heart&apos;s canvas without uttering a single word</p>
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
