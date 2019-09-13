import React, { useState } from 'react';
import Modal from './Modal';

const Movie = (props) => {

    const [modal, setModal] = useState({modalOpen: false});

    const handleModal = (e) => {
        setModal({modalOpen: true});
    }

    const open = () => {
        setModal({modalOpen: true});
    }

    const close = () => {
        setModal({modalOpen: false});
    }

    //setModal(true);

    return (
            <div className="movie" onClick={(e) => handleModal(e)}>
                <Modal className={"modalContainer toggle"} props={props} open={open} close={close}/>
                <p></p>
                <img src={`https://image.tmdb.org/t/p/original/${props.props.backdrop_path}`} alt={props.props.id}/>
            </div>
    )
}

export default Movie;