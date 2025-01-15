import { useState } from 'react'
import { navLinks } from '../constants/index'

const NavItems = () => {
      return(
            <ul className="nav-ul">
                  {navLinks.map(({id, name, href}) => (
                        <li key={id} className="nav-li">
                              <a href={href} className="nav-li_a">
                                    {name}
                              </a>
                        </li>
                  ))}
            </ul>
      )
}

export const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false)  

  const toggleMenu = () => {
    setIsOpened((previousState) => !previousState)
  }

  return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Arunachalam Nachiappan 
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpened ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpened ? 'max-h-screen' : 'max-h-0'}`}>
            <nav className='p-5'>
                  <NavItems />
            </nav>
      </div>
    </header>
  )
}
