import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDocumentaries } from '../store/actions/index';
import Movie from '../components/Movie';

const DocumentaryContainer = (props) => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchDocumentaries());
        }, []);

        const documentaryData = useSelector(state => state.documentary.movies, []) || [];

    return (
        <div>
            <p>Documentary Movies</p>
            {/* <div className="movieContainer">
                { documentaryData.results && documentaryData.results.map(movie => (
                    <Movie img={movie.backdrop_path} key={movie.id}/>
                ))}
            </div> */}
        </div>
    )
}

export default DocumentaryContainer;