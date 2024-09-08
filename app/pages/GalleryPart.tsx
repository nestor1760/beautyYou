import React from 'react'
import NavigationItem from '../shared/NavigationItem'

import Image from 'next/image'
import { galleryData } from '../data/galleryData'

const GalleryPart = () => {

  return (
    <section id='gallery' className='flex flex-col items-start justify-between w-full max-w-[1110px] mx-auto'>
      <NavigationItem label='gallery' />
      <div className='mt-[65px] mb-[120px] grid grid-rows-2 grid-cols-5 gap-[30px]'>
        {galleryData.map(photo =>
          <Image
            src={photo.path}
            width={photo.width}
            height={photo.height}
            key={photo.id}
            alt={`photo-${photo.id}`}
            className=''
          />
        )}
      </div>
    </section>
  )
}

export default GalleryPart
