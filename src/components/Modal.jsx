import React from 'react';
import { FiPlay } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import { FiInfo } from 'react-icons/fi';

const Modal = ({ name, overview, img, show, containerName, onClick}) => {

    return (
        show ?
        <div className={containerName} onClick={onClick}>
            <div className="modal">
                <img src={`https://image.tmdb.org/t/p/original/${img}`} alt="bg"/>
                <div className="bg"></div>
                <div className="modal-content">
                    <h1>{name}</h1>
                    <p>{overview}</p>
                    <div className="btn">
                        <button><FiPlay/><span>PLAY</span></button>
                        <button><FiPlus/><span>MY LIST</span></button>
                        <button><FiInfo/><span>DETAILS</span></button>
                    </div>
                </div>
            </div>
        </div>
        :
        null
    )
}

export default Modal;






