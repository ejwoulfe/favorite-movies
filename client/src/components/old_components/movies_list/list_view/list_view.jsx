import React from 'react';
import { useEffect } from 'react';
import star from '../../../Assets/star.png';
import { Link } from 'react-router-dom';
import './list_view.scss';


function ListView(props) {

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
        <div id="movies_list_view">

            {props.movies.map((movie, i) => (
                <Link onClick={() => handleClick()} key={"movie_" + i} id="movies_desc_link" to={{ pathname: "/movie_description/" + movie._id, state: { movie: movie } }}>
                    <div className="movie_container_list ">


                        <img className="movie_image_list " src={movie.poster} alt={movie.title + " poster"}></img>


                        <div className="movie_information_list ">
                            <h2 className="movie_title_list ">{movie.title}</h2>
                            <div className="details_container_list ">
                                <h5 className="movie_rating_list "><img className="star_icon_list" src={star} alt="star_icon" />{movie.rating + "/10"}</h5>
                            </div>

                        </div>
                    </div>

                </Link>
            ))}

        </div>

    )
}
export default ListView;