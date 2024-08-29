import { FC } from 'react'
import '../styles/globals.css'
import { ILogoProps } from '../types/types'

const Logo: FC<ILogoProps> = ({ fontSize, spanSize }) => {

  const fontSizeClass = fontSize === 'default' ? 'text-[28px]' : 'text-[45px]';
  const spanSizeClass = spanSize === 'default' ? 'text-[40px]' : 'text-[55px]';

  return (
    <p className={`fontBrygada ${fontSizeClass} font-bold cursor-pointer`}>
      Beauty
      <span className={`${spanSizeClass} italic font-normal`} dangerouslySetInnerHTML={{ __html: '(You)' }} />
    </p>
  )
}

export default Logo
