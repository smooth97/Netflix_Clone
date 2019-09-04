import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchActionMovies } from '../store/actions/index';


const ActionContainer = (props) => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchActionMovies());
        }, []);

        const actionData = useSelector(state => state.trending)


    return (
        <div>
            <h1>Action Movies</h1>
        </div>
    )
}

export default ActionContainer;