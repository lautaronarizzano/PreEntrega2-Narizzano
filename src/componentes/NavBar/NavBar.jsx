import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <header className='header'>
            <nav className='headerNav'>
                <Link to='/'>
                    <h2 className='headerNavH2'>Burger Station</h2>
                </Link>
                <ul className='headerNavUl'>
                    <Link to='/'>
                        <li className='headerNavUlLi'>Menu</li>
                    </Link>
                    <li className='headerNavUlLi'>Sobre Nosotros</li>
                    <li className='headerNavUlLi'>Contacto</li>
                </ul>
            <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar