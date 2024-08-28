'useClient'

const Navigation = () => {
  const navData = [
    'about me', 'gallery', 'services', 'promotions', 'opinions', 'contact'
  ]

  return (
    <div className='flex'>
      {navData.map(navItem =>
        <a href='#' key={navItem} className='text-base mr-10 last:mr-0'>
          {navItem.toUpperCase()}
        </a>
      )}
    </div>
  )
}

export default Navigation