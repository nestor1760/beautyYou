"use client"

import React from 'react'
import Logo from '../shared/Logo'
import { useNavMenu } from '../hooks/useNavigation';
import FooterNav from './FooterNav';

const Footer = () => {
  const { scrollToStart } = useNavMenu();

  return (
    <footer className='w-full flex items-center justify-center flex-col border-t border-solid border-black'>
      <div className='flex items-start justify-between w-full max-w-[1110px] pt-[26px]'>
        <Logo
          fontSize='large'
          spanSize='large'
          onClick={() => scrollToStart()}
        />
        <FooterNav />
      </div>
    </footer>
  )
}

export default Footer