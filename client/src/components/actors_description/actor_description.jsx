import React from 'react';
import './actor_description.scss';


function ActorDescription(props) {

    console.log(props.location.state.actor);

    function getListOfMovies(movies) {

        return movies.map((movie) => {
            return (
                <li className="movie_container">
                    <img className="movie_poster" alt={movie.name} src={movie.poster}></img>
                    <h3 className="movie_title">{movie.title}</h3>
                </li>
            )
        })

    }


    return (
        <div id="actor_description_container">
            <div id="actor_banner_container">
                <div id="actor_image_container">
                    <img id="actor_banner_image" src={props.location.state.actor.image} alt={props.location.state.actor.name}></img>
                </div>
                <div id="actor_information_container">
                    <h1 id="actor_name">{props.location.state.actor.name}</h1>
                    <div id="actor_description">
                        <h4>{props.location.state.actor.description}</h4>
                    </div>
                </div>
            </div>
            <hr id="line_break"></hr>
            <div id="actor_known_movies_container">
                <h1 id="movie_header">Known For</h1>
                <ul id="movies_list">{getListOfMovies(props.location.state.actor.movies)}</ul>
            </div>
        </div>
    )

}

export default ActorDescription;