import React from 'react';

const Header = () => {
    return <header id="header">
        <div className="logo">
            <div className="logo__avatar">
                <img className="img__avatar" src="img/star.png" alt="logo star"/>
            </div>
            <h1 className="logo__content">Character encyclopedia</h1>
            <div className="logo__avatar">
                <img className="img__avatar" src="img/Wars.png" alt="logo wars"/>
            </div>
        </div>
    </header>
}

export default Header