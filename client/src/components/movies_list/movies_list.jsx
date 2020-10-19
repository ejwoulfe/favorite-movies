import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import './movies_list.scss';

function MoviesList() {
    const [moviesList, setMoviesList] = useState([]);
    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {

        axios({
            method: 'GET',
            url: 'http://localhost:5000/movies/api'
        }).then(res => {
            setMoviesList(res.data)

        })
    }, []);

    return (
        <>
            <h1>Movies</h1>

            {moviesList.map((movie, i) => (
                <div key={i} className="movie_container">
                    <img className="movie_poster" src={movie.poster} alt={movie.title + " poster"}></img>
                    {movie.title}
                    <p>{Date(movie.year)}</p>
                </div>

            ))}

        </>




    );
}

export default MoviesList;