import React from 'react';
import { useEffect } from 'react';
import star from '../../../Assets/star.png';
import './grid_view.scss';

function GridView(props) {

    useEffect(() => {
        console.log(props)
    })

    return (

        <div id="movies_grid_view">

            {props.movies.map((movie, i) => (
                <div key={i} className="movie_container_grid">

                    <img className="movie_image_grid" src={movie.poster} alt={movie.title + " poster"}></img>


                    <div className="movie_information_grid">
                        <h2 className="movie_title_grid">{movie.title}</h2>
                        <div className="details_container_grid">
                            <h5 className="movie_rating_grid"><img className="star_icon_grid" src={star} alt="star_icon" />{movie.rating + "/10"}</h5>
                        </div>

                    </div>
                </div>


            ))}

        </div>
    )
}
export default GridView;