import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComedyMovies } from '../store/actions/index';


const ComedyContainer = (props) => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchComedyMovies());
        }, []);

        const comedyData = useSelector(state => state.trending)


    return (
        <div>
            <h1>Comedy Movies</h1>
        </div>
    )
}

export default ComedyContainer;