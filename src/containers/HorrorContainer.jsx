import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHorrorMovies } from '../store/actions/index';


const HorrorContainer = (props) => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchHorrorMovies());
        }, []);

        const horrorData = useSelector(state => state.trending)


    return (
        <div>
            <h1>Horror Movies</h1>
        </div>
    )
}

export default HorrorContainer;