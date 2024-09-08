'use client'

import Logo from '../shared/Logo'
import Navigation from './Navigation'
import { useNavMenu } from '../hooks/useNavigation'
import { useRecoilState } from 'recoil'
import { headerState } from '../state/atoms/headerState'


const Header = () => {
  const { scrollToStart } = useNavMenu();

  const [visible, setVisible] = useRecoilState(headerState)

  console.log(visible);


  return (
    <header
      id='header'
      className={` 
        mx-auto 
        flex 
        items-center 
        justify-between 
        fixed 
        top-0 
        fontRasa 
        z-10
        bg-transparent
        duration-300
        ${(visible)
          ? 'text-whiteColor border-none w-full max-w-[1110px]'
          : `text-blackColor border-b border-blackColor bg-[url('../../public/background_media/background_general.png')] w-screen px-[10%]`
        }
      `}>
      <Logo
        fontSize='default'
        spanSize='default'
        onClick={() => scrollToStart()}
      />
      <Navigation />
    </header>
  )
}

export default Header

