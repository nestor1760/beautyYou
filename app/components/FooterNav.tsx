'use client'

import Link from "next/link";
import { navData, socialData } from "../data/navigationData"
import { useNavMenu } from "../hooks/useNavigation";

const FooterNav = () => {
  const { scrollToPart } = useNavMenu();

  return (
    <div className="flex items-start justify-start flex-col w-full max-w-[485px]">
      <div className="flex items-start justify-between w-full mb-[26px]">
        <div className="flex items-start justify-start flex-col">
          <div className='flex items-start justify-start flex-col'>
            {socialData.map(socialItem =>
              <a
                href={socialItem.link}
                key={socialItem.id}
                target="_blank"
                rel="noopener noreferrer"
                className='text-base mb-[15px] last:mb-0 italic hover:underline decoration-solid'
              >
                {socialItem.name.toUpperCase()}
              </a>
            )}
          </div>
        </div>
        <nav className='flex items-start justify-start flex-col'>
          {navData.map(navItem =>
            <button
              onClick={() => scrollToPart(navItem)}
              key={navItem}
              className='text-base mb-[15px] last:mb-0 italic hover:underline decoration-solid'
            >
              {navItem.toUpperCase()}
            </button>
          )}
        </nav>
        <div className="flex items-start justify-start flex-col">
          <Link href='#' className='text-base mb-[15px] last:mb-0 italic hover:underline decoration-solid'>
            PRIVACY POLICY
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FooterNav