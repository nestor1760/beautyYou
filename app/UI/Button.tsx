import React from 'react'

const Button = ({ label }: { label: string }) => {
  return (
    <button className='
    min-w-[200px] 
    min-h-[49px] 
    border-solid 
    border-[1.5px] 
    border-blackColor 
    text-[24px] 
    font-normal 
    hover:shadow-[4px_4px_8px_rgba(0,0,0,0.3)] 
    active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3)]
    transition-shadow 
    duration-300
    '>
      {label.toUpperCase()}
    </button>
  )
}

export default Button