import React, { useState } from 'react';
import Modal from './Modal';
import ModalDetails from './ModalDetails';

const Movie = (props) => {

    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }
    return (
            <div className="movie">
                <Modal>
                    <ModalDetails props={props}/>
                </Modal>
                <p></p>
                <img src={`https://image.tmdb.org/t/p/original/${props.props.backdrop_path}`} alt={props.props.id}/>
            </div>
    )
}

export default Movie;