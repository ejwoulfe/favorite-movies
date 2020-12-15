import React from 'react';
import './movie_description.scss';


function MovieDescription(props) {
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
    return (

        <div div id="movie_description_container" >
            <div id="movie_banner_overlay">
                <div id="movie_banner" style={{ backgroundImage: `url(${props.location.state.movie.poster})` }}>
                </div>
                <div id="movie_banner_information">
                    <h1 id="movie_title">{props.location.state.movie.title}</h1>
                    <h5 id="movie_director">{props.location.state.movie.director}</h5>
                    <h5 id="movie_release_date">{formatDate(new Date(props.location.state.movie.year))}</h5>
                    <h5 id="movie_rating">{(props.location.state.movie.rating)}</h5>
                </div>
            </div>
        </div >
    )

}

export default MovieDescription;