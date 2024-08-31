'use client'

import Logo from '../shared/Logo'
import Navigation from './Navigation'
import { useNavMenu } from '../hooks/useNavigation'

const Header = () => {
  const { scrollToStart } = useNavMenu();

  // useEffect(() => {
  //   function handleScroll() {
  //     const header = document.getElementById('header');
  //     const aboutMeComponent = document.getElementById('about me');

  //     if (!aboutMeComponent) return;
  //     if (!header) return;

  //     const aboutMeComponentPosition = aboutMeComponent.getBoundingClientRect().top;

  //     if (aboutMeComponentPosition <= 0) {
  //       header.classList.add('text-blackColor');
  //       header.classList.add('border-b-[0.7px]');
  //       header.classList.add('border-blackColor');
  //       header.classList.remove('text-whiteColor');
  //       header.classList.remove('border-b-0');
  //     } else {
  //       header.classList.add('border-b-0');
  //       header.classList.add('text-whiteColor');
  //       header.classList.remove('text-blackColor');
  //       header.classList.remove('border-b-[0.7px]');
  //       header.classList.remove('border-blackColor');
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <header
      id='header'
      className='
        w-full 
        max-w-[1110px] 
        mx-auto 
        flex 
        items-center 
        justify-between 
        fixed 
        top-0 
        fontRasa 
        text-whiteColor 
        z-10
        bg-transparent
        border-b-0
      '>
      <Logo fontSize='default' spanSize='default' onClick={() => scrollToStart()} />
      <Navigation />
    </header>
  )
}

export default Header
