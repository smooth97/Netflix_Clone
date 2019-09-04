import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNetflixOriginals } from '../store/actions/index';


const NetflixOriginalContainer = (props) => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchNetflixOriginals());
        }, []);

        const netflixData = useSelector(state => state.trending)

    return (
        <div>
            <h1>Netflix Original Movies</h1>
        </div>
    )
}

export default NetflixOriginalContainer;