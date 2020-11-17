import React from 'react';
import './list_view.scss';


function ListView(props) {

    function getKnownMovies(actor) {
        if (actor.name === "Elijah Wood") {
            return (
                <div className="actor_known_movies">
                    <img className="known_movie" src={actor.movies[0].poster} alt={actor.movies[0].title} />
                    <img className="known_movie" src={actor.movies[1].poster} alt={actor.movies[1].title} />
                </div>
            )
        }

    }



    return (
        <div id="actors_list_view">

            {props.actors.map((actor, i) => (

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


            ))
            }

        </div >

    )
}
export default ListView;