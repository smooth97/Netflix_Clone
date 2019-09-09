import React from 'react';
import backgroundImg from '../static/images/header.jpg';

const Header = () => {

    //"https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg"

    return (
            <header>
                <div className="headerContainer">
                    <img src={backgroundImg} alt="stange"/>
                </div>
            </header>
    )
}

export default Header;