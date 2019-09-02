import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  
  const API_KEY = `1ec83705e4d36b3a0c2ae2dc83c50247`;

  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 장르 리스트 `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  // BASE_URL = `https://api.themoviedb.org/3`
  // Romance /discover/movie?api_key=${API_KEY}&with_genres=10749
  // Action /discover/movie?api_key=${API_KEY}&with_genres=28
  // Horror 27 Comedy 37 Animation 16 Documentary 99

  useEffect(() => {
    fetchMovies();
  }, [])
  
  const fetchMovies = async () => {
    try {
      setMovies(null);
      setError(null);
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
        // /discover/movie?api_key=${API_KEY}&with_genres=10749
      );
      setMovies(response.data);
      console.log(response.data);
    } catch (e) {
      setError(e);
    };
    setLoading(false);
  };

  return (
    <div className="App">
      hi
    </div>
  );
}

export default App;
