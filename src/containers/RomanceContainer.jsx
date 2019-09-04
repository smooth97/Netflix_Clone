import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRomanceMovies } from '../store/actions/index';


const RomanceContainer = (props) => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchRomanceMovies());
        }, []);

        const romanceData = useSelector(state => state.trending)


    return (
        <div>
            <h1>Romance Movies</h1>
        </div>
    )
}

export default RomanceContainer;