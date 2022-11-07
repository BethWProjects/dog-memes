import React from 'react'

const Nav = () => {
    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li><a href="dogs">Dogs</a></li>
                    <li><a href="cats">Cats</a></li>
                    <li><a href="random">Random</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav