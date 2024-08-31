'use client'

import React from 'react'
import Logo from '../shared/Logo'
import Navigation from './Navigation'
import { useNavMenu } from '../hooks/useNavigation'

const Header = () => {
  const { scrollToStart } = useNavMenu();

  return (
    <header className='w-full max-w-[1110px] mx-auto flex items-center justify-between fixed top-0 fontRasa text-whiteColor z-10'>
      <Logo fontSize='default' spanSize='default' onClick={() => scrollToStart()} />
      <Navigation />
    </header>
  )
}

export default Header
