import React from 'react'
import Logo from '../shared/Logo'

const Header = () => {
  return (
    <div className='min-w-[1200px] flex items-center justify-between'>
      <Logo fontSize='28px' spanSize='40px' />
    </div>
  )
}

export default Header