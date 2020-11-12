import React from 'react';
import './list_view.scss';


function ListView(props) {

    return (
        <div id="actors_list_view">

            {props.actors.map((actor, i) => (
                <div key={i} className="actor_container_list ">

                    <img className="actor_image_list " src={actor.image} alt={actor.image + " picture"}></img>


                    <div className="actor_information_list ">
                        <h2 className="actor_title_list ">{actor.name}</h2>
                        <div className="details_container_list ">
                        </div>

                    </div>
                </div>


            ))}

        </div>

    )
}
export default ListView;