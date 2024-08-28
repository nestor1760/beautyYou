import React from 'react'

const HomePart = () => {
  return (
    <section className={`
      flex 
      items-start 
      justify-center 
      h-[810px]
      bg-[url('../../public/images/home_media/home-background.png')]
      w-[1460px] 
      bg-cover 
      bg-center
      text-whiteColor
    `}>
      <h1 className='text-[64px] w-[988px] h-[156px] text-center mt-[292px]'>BEAUTY LIVES INSIDE YOU, SHOW IT TO THE WORLD</h1>
    </section>
  )
}

export default HomePart