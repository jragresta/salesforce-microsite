import React, {useState, useEffect} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import logosvg from './Images/logo-salesforce.svg';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else{
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logosvg} alt='logosvg' />  
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ?'fas fa-times' : 'fas fa-bars'}/>
            </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="hero-container" className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Section2" offset={-90} className='nav-links' onClick={closeMobileMenu}>
                            Section 2
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Section3" offset={-60} className='nav-links' onClick={closeMobileMenu}>
                            Section 3
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Section4" offset={-60} className='nav-links' onClick={closeMobileMenu}>
                            Section 4
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Section5" offset={-60} className='nav-links' onClick={closeMobileMenu}>
                            Section 5
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Section6" offset={-60} className='nav-links' onClick={closeMobileMenu}>
                            Section 6
                        </Link>
                    </li>
                </ul>           
            </div>
        </nav>
    );
}
export default Navbar;