import React from 'react';
import { FiPlay } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import { FiInfo } from 'react-icons/fi';
import backgroundImg from '../static/images/header.jpg';

const Header = () => {

    //"https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg"

    return (
            <header>
                <div className="headerContainer">
                    <img src={backgroundImg} alt="stranger"/>
                    <div className="headerContents">
                        <h1>STRANGER THINGS</h1>
                        <p>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.</p>
                        <div className="btn">
                            <button><FiPlay/><span>PLAY</span></button>
                            <button><FiPlus/><span>MY LIST</span></button>
                            <button><FiInfo/><span>DETAILS</span></button>
                        </div>
                    </div>
                </div>
            </header>
    )
}

export default Header;