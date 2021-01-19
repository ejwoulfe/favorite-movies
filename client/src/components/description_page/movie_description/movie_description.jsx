import React, { useEffect } from 'react';
import './movie_description.scss';
import star from '../../../Assets/star.png';



function MovieDescription(props) {

    // When component mounts we want to take the user to the top of the page, instead of starting at the bottom or middle.
    useEffect(() => {
        window.scrollTo({ top: 0 });

    }, []);


    // Function that converts the ISO date from mongoDB to a mm/dd/yyyy format.
    function formatDate(date) {
        let [month, day, year] = [date.getMonth() + 1, date.getDate(), date.getFullYear()]

        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }
        return (month + '/' + day + '/' + year);

    }

    function createListOfActors(actors) {

        return actors.map((actor, index) => {
            return <li key={"actor_" + index} className="actor_container"><img className="actor_image" alt={actor.name} src={actor.image}></img><h3 className="actor_name">{actor.name}</h3></li>
        })

    }

    return (

        <div div id="movie_information_page" >
            <div id="movie_banner_container">
                <div id="movie_banner" style={{ backgroundImage: `url(${props.movie.image})` }}>
                    <div id="movie_banner_gradient"></div>
                </div>
                <div id="movie_banner_information">
                    <h1 id="movie_title">{props.movie.name}</h1>
                    <div id="movie_information">
                        <div id="movie_information_left">
                            <h3 id="movie_director">Director: {props.movie.subInfo[1]}</h3>
                            <h3 id="movie_release_date">Released: {formatDate(new Date(props.movie.subInfo[2]))}</h3>
                        </div>
                        <div id="movie_information_right">
                            <h3 id="movie_rating">Rating: {(props.movie.subInfo[0])}</h3>
                            <img id="star_icon" src={star} alt="star"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div id="movie_description_container">
                <h2 id="movie_description">{props.movie.description}</h2>
            </div>
            <div id="featured_actors">
                <h1 id="actors_header">Featured Actors</h1>
                <ul id="actors_list">{createListOfActors(props.movie.infoArr)}</ul>
            </div>
        </div>
    )

}

export default MovieDescription;