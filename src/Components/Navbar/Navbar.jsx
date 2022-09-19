import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll'


function Navbar() {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Emmanuel</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true}>
                            <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Portifolio' smooth={true}>
                            <li>Portifolio</li>
                        </Link>
                        <Link spy={true} to='Quotes' smooth={true}>
                            <li>Quotes</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to='contact' smooth={true} >
                    <button className="button n-button ">
                        contact
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Navbar