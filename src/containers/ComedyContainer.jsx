import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComedyMovies } from '../store/actions/index';
import Movie from '../components/Movie';

const ComedyContainer = (props) => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchComedyMovies());
        }, []);

        const comedyData = useSelector(state => state.comedy.movies, []) || [];

    return (
        <div>
            <p>Comedy Movies</p>
            {/* <div className="movieContainer">
                { comedyData.results && comedyData.results.map(movie => (
                    <Movie img={movie.backdrop_path} key={movie.id}/>
                ))}
            </div> */}
        </div>
    )
}

export default ComedyContainer;