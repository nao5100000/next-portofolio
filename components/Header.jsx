import React from 'react'
import Nav from './Nav'

const Header = () => {
    return (
        <header className="l-header">
            <div className="l-header__wrapper" id="js-nav">
                <Nav />
                <label className="l-header__toggle" id="js-toggle">
                    <input id="toggle" className="toggle_input" type='checkbox' />
                </label>
            </div>
            <div className="l-header__ham js-stick-link" id="js-ham">
                <span className="l-header__ham__border js-stick-link"></span>
            </div>
            <span className="ham_circle" id="js-ham-bg"></span>
        </header>
    )
}

export default Header