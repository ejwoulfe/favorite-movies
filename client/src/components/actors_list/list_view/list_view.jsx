import React from 'react';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import './list_view.scss';


function ListView(props) {


    function getKnownMovies(actor) {
        return (
            <div className="actor_known_movies">
                <h4 className="known_for_title">Known For:</h4>
                <div className="known_movie_container">
                    <img className="known_movie" src={actor.movies[0].poster} alt={actor.movies[0].title} />
                </div>
                <div className="known_movie_container">
                    <img className="known_movie" src={actor.movies[1].poster} alt={actor.movies[1].title} />
                </div>
                <div className="known_movie_container">
                    <img className="known_movie" src={actor.movies[2].poster} alt={actor.movies[2].title} />
                </div>
            </div>
        )


    }


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
        <div id="actors_list_view">

            {props.actors.map((actor, i) => (
                <Link onClick={() => handleClick()} key={"actor_" + i} id="actors_desc_link" to={{ pathname: "/actor_description/" + actor._id, state: { actor: actor } }}>


                    <div key={i} className="actor_container_list " >

                        <div className="actor_image_container" style={{ backgroundImage: `url(${actor.image})` }} >
                        </div>


                        <div className="actor_information_list">

                            {getKnownMovies(actor)}




                            <div className="actor_name_container_list">
                                <h2 className="actor_name">{actor.name}</h2>
                            </div>
                            <div className="details_container_list">
                            </div>

                        </div>
                    </div>

                </Link>
            ))
            }

        </div >

    )
}
export default ListView;