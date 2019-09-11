import React from 'react';

const NetflixMovie = (props) => {

    return (
            <div className="netflixMovie">
                <p></p>
                <img src={`https://image.tmdb.org/t/p/original/${props.props.poster_path}`} alt={props.props.id}/>
            </div>
    )
}

export default NetflixMovie;