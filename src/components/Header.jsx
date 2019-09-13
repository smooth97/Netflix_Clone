import React from 'react';
import backgroundImg from '../static/images/header.jpg';
import { FiPlay } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import { FiInfo } from 'react-icons/fi';

const Header = () => {

    return (
            <header>
                <div className="headerContainer">
                    <img src={backgroundImg} alt="stange"/>
                    <div className="headercontents">
                        <h1>STRANGER THINGS</h1>
                        <div className="btn">
                            <button><FiPlay/> PLAY</button>
                            <button><FiPlus/> MY LIST</button>
                            <button><FiInfo/> Details</button>
                        </div>
                        <p>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.</p>
                    </div>
                </div>
            </header>
    )
}

export default Header;