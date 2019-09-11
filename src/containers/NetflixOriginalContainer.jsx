import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNetflixOriginals } from '../store/actions/index';
import NetflixMovie from '../components/NetflixMovie';

const NetflixOriginalContainer = (props) => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchNetflixOriginals());
        }, []);

        const netflixData = useSelector(state => state.netflixOriginals.movies, []) || [];

    return (
        <div>
            <p>Netflix Originals</p>
            <div className="movieContainer">
                { netflixData.results && netflixData.results.map(movie => (
                    <NetflixMovie props={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default NetflixOriginalContainer;