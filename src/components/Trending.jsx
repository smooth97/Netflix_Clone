import React from 'react';

const TrendMovie = ({ title, id, img}) => {

    return (
        <div className="movieBox">
            <h3>{title}</h3>
            <img src={img} alt={id}/>
        </div>
    )
}

export default TrendMovie;