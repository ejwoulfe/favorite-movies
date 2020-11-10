import React from 'react';
import star from '../../../Assets/star.png';
import './list_view.scss';


function ListView(props) {

    return (
        <div id="movies_list">

            {props.movies.map((movie, i) => (
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

    )
}
export default ListView;