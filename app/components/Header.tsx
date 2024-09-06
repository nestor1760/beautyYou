'use client'

import Logo from '../shared/Logo'
import Navigation from './Navigation'
import { useNavMenu } from '../hooks/useNavigation'
import { useVisible } from '../hooks/useVisible'

const Header = () => {
  const { scrollToStart } = useNavMenu();
  const { isVisible } = useVisible()

  console.log(isVisible);

  return (
    <header
      id='header'
      className={`
        w-full 
        max-w-[1110px] 
        mx-auto 
        flex 
        items-center 
        justify-between 
        fixed 
        top-0 
        fontRasa 
        z-10
        bg-transparent
        ${(isVisible)
          ? 'text-whiteColor border-none'
          : `text-blackColor border-b border-blackColor bg-[url('../../public/background_media/background_general.png')]`
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
