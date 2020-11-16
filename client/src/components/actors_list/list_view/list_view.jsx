import React from 'react';
import './list_view.scss';


function ListView(props) {

    return (
        <div id="actors_list_view">

            {props.actors.map((actor, i) => (
                <div key={i} className="actor_container_list ">

                    <div id="actor_image_container" style={{ backgroundImage: `url(${actor.image})` }} >
                    </div>


                    <div className="actor_information_list">
                        <div className="actor_name_container">
                            <h2 className="actor_name">{actor.name}</h2>
                        </div>
                        <div className="details_container_list">
                        </div>

                    </div>
                </div>


            ))}

        </div>

    )
}
export default ListView;