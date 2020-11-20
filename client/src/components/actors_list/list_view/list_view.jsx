import React from 'react';
import { Link } from 'react-router-dom';
import './list_view.scss';


function ListView(props) {

    function getKnownMovies(actor) {
        if (actor.name === "Elijah Wood" || actor.name === "Orlando Bloom" || actor.name === "Daveigh Chase"
            || actor.name === "Rumi Hiiragi" || actor.name === "Miyu Irino" || actor.name === "Cate Blanchett"
            || actor.name === "Andy Serkis") {
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

    }



    return (
        <div id="actors_list_view">

            {props.actors.map((actor, i) => (
                <Link id="actors_desc_link" to={{ pathname: "/actor_description/" + actor._id, state: { actor: actor } }}>


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