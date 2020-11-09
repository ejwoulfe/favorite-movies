import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import './movies_list.scss';
import star from '../../Assets/star.png'
import list_view from '../../Assets/UI Icons/list-view.svg'
import grid_view from '../../Assets/UI Icons/grid-view.svg'

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
            <div id="movies_list_content">
                <h1 id="movies_list_title">Movies</h1>
                <div id="display_options">
                    <input className="view_buttons" id="list_view" type="image" src={list_view} alt="List view button" />
                    <input className="view_buttons" id="lgrid_view" type="image" src={grid_view} alt="Grid view button" />
                </div>

                <div id="movies_list">

                    {moviesList.map((movie, i) => (
                        <div key={i} className="movie_container">

                            <img className="movie_image" src={movie.poster} alt={movie.title + " poster"}></img>


                            <div className="movie_information">
                                <h2 className="movie_title">{movie.title}</h2>
                                <div className="details_container">
                                    <h5 className="movie_rating"><img className="star_icon" src={star} alt="star_icon" />{movie.rating + "/10"}</h5>
                                </div>

                            </div>
                        </div>


                    ))}
                </div>
            </div>

        </>




    );
}

export default MoviesList;