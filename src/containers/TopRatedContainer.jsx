import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopRated } from '../store/actions/index';
import Movie from '../components/Movie';


const TopRatedContainer = (props) => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchTopRated());
        }, []);

        const topRatedData = useSelector(state => state.topRated.data, []) || [];

    return (
        <div>
            <p>Top Rated Movies</p>
            {/* <div className="movieContainer">
                { topRatedData.results && topRatedData.results.map(movie => (
                    <Movie img={movie.backdrop_path} key={movie.id}/>
                ))}
            </div> */}
        </div>
    )
}

export default TopRatedContainer;
