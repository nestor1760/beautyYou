import { FC } from 'react'
import '../styles/globals.css'
import { ILogoProps } from '../components/types/types'

const Logo: FC<ILogoProps> = ({ fontSize, spanSize }) => {

  console.log(fontSize, spanSize);


  return (
    <p>
      <span className={`fontBrygada text-[${fontSize}] font-bold text-blackColor`}>Beauty</span>
      <span className={`text-[${spanSize}] italic font-normal`} dangerouslySetInnerHTML={{ __html: '(You)' }} />
    </p>
  )
}

export default Logo