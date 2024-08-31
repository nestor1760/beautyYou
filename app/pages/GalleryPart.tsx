import React from 'react'
import NavigationItem from '../components/NavigationItem'
// import Image from 'next/image'

const GalleryPart = () => {

  // const galleryData = [
  //   {
  //     id: 1,
  //     path: '/gallery_media/gallery-image-01.png'
  //   },
  //   {
  //     id: 2,
  //     path: '/gallery_media/gallery-image-02.png'
  //   },
  //   {
  //     id: 3,
  //     path: '/gallery_media/gallery-image-03.png'
  //   },
  //   {
  //     id: 4,
  //     path: '/gallery_media/gallery-image-04.png'
  //   },
  //   {
  //     id: 5,
  //     path: '/gallery_media/gallery-image-05.png'
  //   },
  //   {
  //     id: 6,
  //     path: '/gallery_media/gallery-image-06.png'
  //   },
  //   {
  //     id: 7,
  //     path: '/gallery_media/gallery-image-07.png'
  //   },
  //   {
  //     id: 8,
  //     path: '/gallery_media/gallery-image-08.png'
  //   },
  //   {
  //     id: 9,
  //     path: '/gallery_media/gallery-image-09.png'
  //   },
  // ]

  return (
    <section id='gallery' className='flex flex-col items-start justify-between w-full max-w-[1110px] mx-auto'>
      <NavigationItem label='gallery' />
      <div className='w-full border-solid border-[2px] border-black mt-[65px] mb-[120px] flex flex-grow flex-wrap'>
        {/* {galleryData.map(photo =>
          <Image src={photo.path} width={160} height={160} key={photo.id} alt={`photo-${photo.id}`} />

        )} */}
      </div>
    </section>
  )
}

export default GalleryPart