import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrending } from '../store/actions/index';


const TrendContainer = (props) => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchTrending());
        }, []);

        const TrendData = useSelector(state => state.trending)
        console.log(TrendData.results);


    return (
        <div>
            <h1>Action Movies</h1>
        </div>
    )
}

export default TrendContainer;