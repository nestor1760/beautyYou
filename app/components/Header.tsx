'use client'

import Logo from '../shared/Logo'
import Navigation from './Navigation'
import { useNavMenu } from '../hooks/useNavigation'
import { useRecoilState } from 'recoil'
import { headerState } from '../state/atoms/headerState'


const Header = () => {
  const { scrollToStart } = useNavMenu();
  const [visible, setVisible] = useRecoilState(headerState)

  return (
    <header
      id='header'
      className={` 
        mx-auto 
        flex 
        items-center 
        justify-center 
        fixed 
        top-0 
        fontRasa 
        z-10
        duration-300
        ${(visible)
          ? 'text-whiteColor border-none w-full max-w-[1110px] bg-transparent'
          : `text-blackColor border-b border-blackColor bg-[url('../../public/background_media/background_general.png')] backdrop-blur-md w-screen`
        }
      `}>
      <div className='flex items-center justify-between w-full max-w-[1110px]'>
        <Logo
          fontSize='default'
          spanSize='default'
          onClick={() => scrollToStart()}
        />
        <Navigation />
      </div>
    </header>
  )
}

export default Header

