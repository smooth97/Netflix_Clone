import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHorrorMovies } from '../store/actions/index';
import Movie from '../components/Movie';

const HorrorContainer = (props) => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchHorrorMovies());
        }, []);

        const horrorData = useSelector(state => state.horror.data, []) || [];


    return (
        <div>
            <p>Horror Movies</p>
            {/* <div className="movieContainer">
                { horrorData.results && horrorData.results.map(movie => (
                    <Movie img={movie.backdrop_path} key={movie.id}/>
                ))}
            </div> */}
        </div>
    )
}

export default HorrorContainer;