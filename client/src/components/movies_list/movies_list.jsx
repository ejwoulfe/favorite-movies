import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import './movies_list.scss';

function MoviesList() {
    const [moviesList, setMoviesList] = useState([]);
    const [buttonClicked, setButtonClicked] = useState(false);

    function formatDate(date) {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();
        console.log(dt)

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }

        return (month + '/' + dt + '/' + year);


    }

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

            <div id="movies">

                {moviesList.map((movie, i) => (
                    <div key={i} className="movie_container">

                        <img className="movie_image" src={movie.poster} alt={movie.title + " poster"}></img>


                        <div className="movie_information">
                            <h2 className="movie_title">{movie.title}</h2>
                            <div className="details_container">
                                <h4 className="movie_year">{"Released: " + formatDate(new Date(movie.year))}</h4>
                                <h5 className="movie_rating">{"Rated: " + movie.rating}</h5>
                            </div>

                        </div>
                    </div>


                ))}
            </div>

        </>




    );
}

export default MoviesList;