import React from 'react'
import Logo from '../shared/Logo'
import Navigation from './Navigation'

const Header = () => {

  return (
    <div className='w-full max-w-[1200px] mx-auto flex items-center justify-between fixed top-0 fontRasa text-whiteColor'>
      <Logo fontSize='default' spanSize='default' />
      <Navigation />
    </div>
  )
}

export default Header