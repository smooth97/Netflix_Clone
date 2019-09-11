import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRomanceMovies } from '../store/actions/index';
import Movie from '../components/Movie';

const RomanceContainer = (props) => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchRomanceMovies());
        }, []);

        const romanceData = useSelector(state => state.romance.movies, []) || [];


    return (
        <div>
            <p>Romance Movies</p>
            <div className="movieContainer">
                { romanceData.results && romanceData.results.map(movie => (
                    <Movie props={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default RomanceContainer;