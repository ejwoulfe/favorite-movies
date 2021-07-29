import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './actor_description.scss';


function ActorDescription(props) {

    // When component mounts we want to take the user to the top of the page, instead of starting at the bottom or middle.
    useEffect(() => {
        window.scrollTo({ top: 0 });

    }, []);


    function getListOfMovies(movies) {

        return movies.map((movie, index) => {
            return (
                <Link className="movie_link" to={`/movie_description/${movie._id}`}>
                    <li key={"movie_" + index} className="movie_container">
                        <img className="movie_poster" alt={movie.name} src={movie.poster}></img>
                        <h3 className="movie_title">{movie.title}</h3>
                    </li>
                </Link>
            )
        })

    }


    return (
        <div id="actor_description_container">
            <div id="actor_banner_container">
                <div id="actor_image_container">
                    <img id="actor_banner_image" src={props.actor.image} alt={props.actor.name}></img>
                </div>
                <div id="actor_information_container">
                    <h1 id="actor_name">{props.actor.name}</h1>
                    <div id="actor_description">
                        <h4>{props.actor.description}</h4>
                    </div>
                </div>
            </div>
            <hr id="line_break"></hr>
            <div id="actor_known_movies_container">
                <h1 id="movie_header">Known For</h1>
                <ul id="movies_list">{getListOfMovies(props.actor.movies)}</ul>
            </div>
        </div>
    )

}

export default ActorDescription;