import React from 'react';

const Movie = (props) => {
    const API_KEY = '224ce27b38a3805ecf6f6c36eb3ba9d0';
    return (
            <div className="movie">
                <p></p>
                <img src={`https://image.tmdb.org/t/p/original/${props.props.backdrop_path}`} alt={props.props.id}/>
            </div>
    )
}

export default Movie;