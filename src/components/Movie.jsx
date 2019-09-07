import React from 'react';

const Movie = ({ title, id, img}) => {

    return (
            <div className="movie">
                <p>{title}</p>
                <img src={`https://image.tmdb.org/t/p/original/${img}`} alt={id}/>
            </div>
    )
}

export default Movie;