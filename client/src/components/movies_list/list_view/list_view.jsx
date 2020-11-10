import React from 'react';
import star from '../../../Assets/star.png';
import './list_view.scss';


function ListView(props) {

    return (
        <div id="movies_list_view">

            {props.movies.map((movie, i) => (
                <div key={i} className="movie_container_list ">

                    <img className="movie_image_list " src={movie.poster} alt={movie.title + " poster"}></img>


                    <div className="movie_information_list ">
                        <h2 className="movie_title_list ">{movie.title}</h2>
                        <div className="details_container_list ">
                            <h5 className="movie_rating_list "><img className="star_icon_list" src={star} alt="star_icon" />{movie.rating + "/10"}</h5>
                        </div>

                    </div>
                </div>


            ))}

        </div>

    )
}
export default ListView;