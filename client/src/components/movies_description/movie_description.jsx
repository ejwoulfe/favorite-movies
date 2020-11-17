import React from 'react';
import './movie_description.scss';


function MovieDescription(props) {
    return (
        <div id="movie_description_container">
            <h1>{props.location.state.movie.title}</h1>
        </div>
    )

}

export default MovieDescription;