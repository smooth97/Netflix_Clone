import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDocumentaries } from '../store/actions/index';


const DocumentaryContainer = (props) => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchDocumentaries());
        }, []);

        const documentaryData = useSelector(state => state.trending)


    return (
        <div>
            <h1>Documentary Movies</h1>
        </div>
    )
}

export default DocumentaryContainer;