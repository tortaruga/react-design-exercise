import openMenu from '/images/open-menu.png'
import closeMenu from '/images/close-menu.png'
import { useState } from 'react'

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false); 

    function toggleMenu() {
        setIsOpen(prevState => !prevState)
    }

    return (
        <nav>
            <div className='nav--group'>
              <button className='mobile-menu-btn'
                    aria-label={isOpen ? "open menu icon" : "close menu icon"} 
                    onClick={toggleMenu}>
                <img src={isOpen ? closeMenu : openMenu} 
                     alt={isOpen ? "open menu icon" : "close menu icon"} />
              </button>

              <ul className="nav--links nav--desktop-menu">
                <li className="nav--link">link</li>
                <li className="nav--link">link</li>
                <li className="nav--link">link</li>
              </ul>

              <h1 className="nav--logo">logo</h1>

              <ul className="nav--links nav--desktop-menu">
                <li className="nav--link">link</li>
                <li className="nav--link">link</li>
                <li className="nav--link">link</li>
              </ul>
 
            </div>
            
              <ul className={isOpen ? 'nav--mobile-menu show' : 'nav--mobile-menu hide'}>
                <li className="nav--link">link</li>
                <li className="nav--link">link</li>
                <li className="nav--link">link</li>
                <li className="nav--link">link</li>
                <li className="nav--link">link</li>
                <li className="nav--link">link</li>
             </ul>

        </nav>
    )
}