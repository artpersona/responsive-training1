import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import  { Button }  from './Button'
import './NavBar.css'

export const AppLink = (props) => {
    return(
        <Link  activeClassname='active-link' className='nav-link' {...props} ></Link>
    )
}

function NavBar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(false)
    const closeMobileMenu = () => setClick(false)


    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    },[])

        window.addEventListener('resize', showButton)

    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <AppLink to='/' className='navbar-logo'>
                        <img src={'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/rocket-512.png'} alt="" className='navbar-image'/>
                        Aether
        
                    </AppLink>
                    <div className="menu-icon" onClick={() => setClick(!click)}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <AppLink to='/' onClick={closeMobileMenu} >
                                Home
                            </AppLink>
                        </li>
                        <li className='nav-item'>
                            <AppLink to='/services' onClick={closeMobileMenu} >
                                Services
                            </AppLink>
                        </li>
                        <li className='nav-item'>
                            <AppLink to='/products' onClick={closeMobileMenu} >
                                Products
                            </AppLink>
                        </li>
                        <li className='nav-item'>
                            <AppLink to='/about' onClick={closeMobileMenu} >
                                About
                            </AppLink>
                        </li>
                        
                    </ul>
                    {button && <Button buttonStyle='btn--outline' className='sign-up'>Sign Up</Button>}
                </div>
            </nav>
            
              
        </>
    )
}

export default NavBar
