import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNetflixOriginals } from '../store/actions/index';
import Movie from '../components/Movie';

const NetflixOriginalContainer = (props) => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchNetflixOriginals());
        }, []);

        const netflixData = useSelector(state => state.netflixOriginals.movies, []) || [];

    return (
        <div>
            <p>Netflix Original Movies</p>
            <div className="movieContainer">
                { netflixData.results && netflixData.results.map(movie => (
                    <Movie props={movie}/>
                ))}
            </div>
        </div>
    )
}

export default NetflixOriginalContainer;