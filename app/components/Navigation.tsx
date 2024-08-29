'useClient'

import { useNavMenu } from "../hooks/useNavigation";

const Navigation = () => {
  const { scrollToPart } = useNavMenu();

  const navData = [
    'about me', 'gallery', 'services', 'promotions', 'opinions', 'contact'
  ]

  return (
    <div className='flex'>
      {navData.map(navItem =>
        <button onClick={() => scrollToPart(navItem)} key={navItem} className='text-base mr-10 last:mr-0'>
          {navItem.toUpperCase()}
        </button>
      )}
    </div>
  )
}

export default Navigation