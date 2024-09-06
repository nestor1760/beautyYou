import React, { FC } from 'react'
import { INavItemProps } from '../types/types'

const NavigationItem: FC<INavItemProps> = ({ label }) => {
  return (
    <p className='text-[24px] italic'>
      {label.toUpperCase()}
    </p>
  )
}

export default NavigationItem