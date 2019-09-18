import React, { useState } from 'react';
import axios from 'axios';
import { FiSearch } from "react-icons/fi";
import Modal from '../components/Modal';

//https://www.themoviedb.org/talk/5c89de1ec3a368645d0cce67 genre 참조
//https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1&primary_release_year=2019&with_genres=28
//`https://api.themoviedb.org/3/discover/movie?{api_key}c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=adventure%7Caction%7Chorror`


const SearchInput = () => {

    const [search, setSearch] = useState('');
    const [lists, setLists] = useState(false);
    const [movieLists, setMovieLists] = useState([]);
    
    const API_KEY = '224ce27b38a3805ecf6f6c36eb3ba9d0';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&sort_by=&include_adult=false&query=${search}&language=en-US&page=1`;

    let data = [];

    const fetch = async () => {
        const response = await axios.get(url);
        data = response.data.results || [];
        setMovieLists(data);
    }

    const onChange = (e) => {
        setSearch(e.target.value);
        fetch(setMovieLists());
        setLists(true);
    }
    
    const hideLists = () => {
        setLists(false);
        setSearch('');
    }

    return (
        <div className="searchContainer">
            <div className="inputContainer">
                <input className="search-txt" type="text" value={search} onChange={onChange} placeholder="title"/>
                <a className="searchLogo"><FiSearch/></a>
            </div>
            <div className={"searchMovie " + (lists ? "show" : "")} onClick={() => hideLists()}>
                <div className="listContainer">
                    { movieLists && movieLists.map(movie => (
                        <List props={movie} key={movie.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

const List = (props) => {

    return (
        <>
            <div className="lists">
                <img src={`https://image.tmdb.org/t/p/original/${props.props.poster_path}`}
                />
            </div>
    </>
    )
}

export default SearchInput;