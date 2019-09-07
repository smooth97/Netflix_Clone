import React from 'react';
import NetflixLogo from '../static/images/Netflix_Logo.png';

const Nav = () => {

    return (
        <nav className="navigation">
            <ul className="navigation_container">
                <img className="navigation_container logo" src={NetflixLogo} alt="logo" />
                <div className="navigation_container link">Home</div>
                <div className="navigation_container link">TV Shows</div>
                <div className="navigation_container link">Movies</div>
                <div className="navigation_container link">Recently</div>
                <div className="navigation_container link">My List</div>
            </ul>
        </nav>
    );
}

export default Nav;