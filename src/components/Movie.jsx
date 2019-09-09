import React from 'react';

const Movie = (props) => {

    return (
            <div className="movie">
                <p></p>
                <img src={`https://image.tmdb.org/t/p/original/${props.props.backdrop_path}`} alt={props.props.id}/>
            </div>
    )
}

export default Movie;