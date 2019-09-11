import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrending } from '../store/actions/index';
import Movie from '../components/Movie';

const TrendContainer = (props) => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchTrending());
        }, []);

        const TrendData = useSelector(state => state.trending.movies, []) || [];


    return (
        <div>
            <p>Trend Movies</p>  
            <div className="movieContainer">
                { TrendData.results && TrendData.results.map(movie => (
                    <Movie props={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default TrendContainer;