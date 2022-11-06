import React from 'react'
import './Header.css'
import laugh from '../images/laugh.svg'

const Header = () => {
    return (
        <div>
            <nav className="nav-container">
                <header className='header'>
                    <img src={laugh} className='header-icon' alt="smile winky emoji icon"/>
                    <p className='title'>Meme Generator</p>
                </header>
            </nav>
        </div>
    )
}

export default Header