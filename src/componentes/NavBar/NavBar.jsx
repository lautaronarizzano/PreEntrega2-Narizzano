import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <header className='header'>
            <nav className='headerNav'>
                <Link to='/'>
                    <h2 className='headerNavH2'>Burger Station</h2>
                </Link>
                <ul className='headerNavUl'>
                    <Link to='/category/Hamburguesas'>
                        <li className='headerNavUlLi'>Hamburguesas</li>
                    </Link>
                    <Link to='/category/Bebidas'>
                        <li className='headerNavUlLi'>Bebidas</li>
                    </Link>
                    <Link to='/category/Complementos'>
                        <li className='headerNavUlLi'>Complementos</li>
                    </Link>
                </ul>
            <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar