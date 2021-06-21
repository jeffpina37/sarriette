import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'; 




export const Navbar = () => {
   const [ open, setOpen ] = useState(true);
   const showMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(true)
   
 

    return (
        <div>
            <div className={ open ? 'NavBar-container' : 'NavBar-container2'}>   
                <nav>
                    <ul className='nav-links'>
                        <li><Link onClick={closeMenu} to='/'><img className='navbar-photo' src="./Untitled-1.png" alt='logo'/></Link></li>
                    </ul>    
                </nav>
                <nav>
                    <ul className='nav-links' >
                            <li><Link onClick={closeMenu} to='/EVENTS'>EVENTS</Link></li>
                            <li><Link onClick={closeMenu} to='/ABOUT'>ABOUT</Link></li>
                            <li><Link onClick={closeMenu} to='/DINNER'>DINNER MENU</Link></li>
                            <li><Link onClick={closeMenu} to='/COCKTAIL'>COCKTAIL MENU</Link></li>
                    </ul> 
                </nav>
                <nav >
                    <ul className='nav-links'>
                        <li><a href='https://www.instagram.com/sarriettenyc/' >INSTAGRAM</a></li>
                    </ul>  
                </nav>
            </div>
            <div >
                <div onClick={showMenu} className='Hamburger-menu'>
                    <div className={open ? 'Hamburger' : 'change line1'}></div>
                    <div className={open ? 'Hamburger' : 'change line2'}></div>
                    <div className={open ? 'Hamburger' : 'change line3'}></div> 
                </div>
            </div>
        </div>
    )
}




