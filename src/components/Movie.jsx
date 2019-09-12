import React, { useState } from 'react';
import Modal from './Modal';

const Movie = (props) => {

    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(true);
        console.log(modal);
    }


    return (
            <div className="movie">
                <Modal className={"modalContainer " + modal ? "toggle" : ""} props={props}/>
                <p></p>
                <img src={`https://image.tmdb.org/t/p/original/${props.props.backdrop_path}`} alt={props.props.id} onclick={handleModal}/>
            </div>
    )
}

export default Movie;