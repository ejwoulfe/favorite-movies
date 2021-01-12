import React from 'react';
import { useEffect } from 'react';
import star from '../../../Assets/star.png';
import { Link } from 'react-router-dom';
import './grid_view.scss';

function GridView(props) {

    useEffect(() => {
        setTimeout(() => {
            handleScrollPosition();
        }, 1000);

    }, []);


    function handleScrollPosition() {
        const scrollPosition = sessionStorage.getItem("scrollPosition");
        if (scrollPosition) {
            window.scrollTo(0, parseInt(scrollPosition));

            sessionStorage.removeItem("scrollPosition");
        }
    };

    // store position in sessionStorage
    function handleClick() {
        sessionStorage.setItem("scrollPosition", window.pageYOffset);
    };


    return (

        <div id="movies_grid_view">

            {props.movies.map((movie, i) => (


                <div key={"movie_" + i} className="movie_container_grid">
                    <Link onClick={() => handleClick()} id="movie_desc_link" to={{ pathname: "/movie_description/" + movie._id, state: { movie: movie } }}>


                        <img className="movie_image_grid" src={movie.poster} alt={movie.title + " poster"}></img>


                        <div className="movie_information_grid">
                            <h2 className="movie_title_grid">{movie.title}</h2>
                            <div className="details_container_grid">
                                <h5 className="movie_rating_grid"><img className="star_icon_grid" src={star} alt="star_icon" />{movie.rating + "/10"}</h5>
                            </div>

                        </div>
                    </Link>
                </div>


            ))}

        </div>
    )
}
export default GridView;