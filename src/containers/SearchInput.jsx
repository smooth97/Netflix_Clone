import React, { useState } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import Nav from '../components/Nav';

//https://www.themoviedb.org/talk/5c89de1ec3a368645d0cce67 genre 참조
//https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1&primary_release_year=2019&with_genres=28
//`https://api.themoviedb.org/3/discover/movie?{api_key}c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=adventure%7Caction%7Chorror`

const Movies = (props) => {
    return (
        <div className="movie">
            <img src={`https://image.tmdb.org/t/p/original/${props.props.poster_path}`} />
        </div>
    )
}

const SearchInput = () => {

    const [search, setSearch] = useState('');
    const [movieLists, setMovieLists] = useState([]);
    
    const API_KEY = '224ce27b38a3805ecf6f6c36eb3ba9d0';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&language=en-US&page=1`;

    let data = [];

    const fetch = async () => {
        const response = await axios.get(url);
        data = response.data.results || [];
        setMovieLists(data);
    }

    const onChange = (e) => {
        setSearch(e.target.value);
        fetch(setMovieLists());
    }
        
    return (
        <div>
            <input className="search-txt" type="text" value={search} onChange={onChange} placeholder="title"/>
            <div className={"searchContainer" }>
                <div className="movieContainer">
                    { movieLists && movieLists.map(movie => (
                        <Movies props={movie} key={movie.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchInput;