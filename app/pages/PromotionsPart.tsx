import React from 'react'
import NavigationItem from '../shared/NavigationItem'
import Image from 'next/image'
import Button from '../UI/Button'
import Slogan from '../UI/Slogan'

const PromotionsPart = () => {
  return (
    <section
      id="promotions"
      className='flex flex-col items-start justify-center w-full max-w-[1110px] mx-auto'
    >
      <NavigationItem
        label='promotions'
      />
      <div className='flex items-center justify-between w-full mt-[60px]'>
        <Image
          src='/promotion_media/promotion_image.png'
          width={475}
          height={679}
          alt='girl&boy'
        />
        <div className='flex items-center justify-center h-full max-w-[550px]'>
          <div className='flex items-end justify-end flex-col text-right'>
            <p className='fontRasa text-[36px] uppercase leading-tight tracking-tight italic mb-[45px]'>
              True friends share everything – even <span className='font-bold'>discounts!</span> <br />Bring a friend and both get <span className='font-bold'>10% off!</span>
            </p>
            <Button
              label='book now'
            />
          </div>
        </div>
      </div>
      <Slogan
        slogan='Beauty starts with confidence, shines through a genuine smile, and is amplified by kindness. True beauty comes from within and is reflected in our actions.'
        mb='139px'
        mt='180px'
      />
    </section>
  )
}

export default PromotionsPart