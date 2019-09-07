import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNetflixOriginals } from '../store/actions/index';
import Movie from '../components/Movie';

const NetflixOriginalContainer = (props) => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchNetflixOriginals());
        }, []);

        const netflixData = useSelector(state => state.netflixOriginals.data, []) || [];

    return (
        <div>
            <p>Netflix Original Movies</p>
            {/* <div className="movieContainer">
                { netflixData.results && netflixData.results.map(movie => (
                    <Movie img={movie.poster_path} key={movie.id}/>
                ))}
            </div> */}
        </div>
    )
}

export default NetflixOriginalContainer;