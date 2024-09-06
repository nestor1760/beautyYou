'use сlient'

import { navData } from "../data/navigationData";
import { useNavMenu } from "../hooks/useNavigation";

const Navigation = () => {
  const { scrollToPart } = useNavMenu();

  return (
    <nav className='flex'>
      {navData.map(navItem =>
        <button onClick={() => scrollToPart(navItem)} key={navItem} className='text-base mr-10 last:mr-0'>
          {navItem.toUpperCase()}
        </button>
      )}
    </nav>
  )
}

export default Navigation