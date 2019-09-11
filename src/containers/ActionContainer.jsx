import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchActionMovies } from '../store/actions/index';
import Movie from '../components/Movie';

const ActionContainer = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchActionMovies());
    }, []);

    const actionData = useSelector(state => state.action.movies, []) || [];
    // console.log(actionData.results);

        


    return (
        <div>
            <p>Action Movies</p>
            <div className="movieContainer">
                { actionData.results && actionData.results.map(movie => (
                    <Movie props={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default ActionContainer;