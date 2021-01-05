import React, { useEffect, useState } from 'react';
import axios from "axios";
import './movie_description.scss';
import star from '../../Assets/star.png'



function MovieDescription(props) {

    const [actorsList, setActorsList] = useState([]);

    function formatDate(date) {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();


        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }
        return (month + '/' + day + '/' + year);

    }
    function createListOfActors(actors) {

        return actors.map((value) => {
            return <li className="actor_container"><img className="actor_image" alt={value.name} src={value.image}></img><h3 className="actor_name">{value.name}</h3></li>
        })

    }
    // useEffect(() => {
    //     console.log(props.location.state.movie.actors)
    // })

    useEffect(() => {

        axios({
            method: 'GET',
            url: 'http://localhost:5000/actors/api'
        }).then(res => {
            setActorsList(res.data)




        })
    }, []);


    return (

        <div div id="movie_information_page" >
            <div id="movie_banner_container">
                <div id="movie_banner" style={{ backgroundImage: `url(${props.location.state.movie.poster})` }}>
                    <div id="movie_banner_gradient"></div>
                </div>
                <div id="movie_banner_information">
                    <h1 id="movie_title">{props.location.state.movie.title}</h1>
                    <div id="movie_information">
                        <div id="movie_information_left">
                            <h3 id="movie_director">Director: {props.location.state.movie.director}</h3>
                            <h3 id="movie_release_date">Released: {formatDate(new Date(props.location.state.movie.year))}</h3>
                        </div>
                        <div id="movie_information_right">

                            <img id="star_icon" src={star} alt="star"></img><h3 id="movie_rating">Rating: {(props.location.state.movie.rating)}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div id="movie_description_container">
                <h2 id="movie_description">{props.location.state.movie.description}</h2>
            </div>
            <div id="featured_actors">
                <ul id="actors_list">{createListOfActors(props.location.state.movie.actors)}</ul>
            </div>
        </div>
    )

}

export default MovieDescription;