import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopRated } from '../store/actions/index';


const TopRatedContainer = (props) => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchTopRated());
        }, []);

        const topRatedData = useSelector(state => state.trending)

    return (
        <div>
            <h1>Top Rated Movies</h1>
        </div>
    )
}

export default TopRatedContainer;
