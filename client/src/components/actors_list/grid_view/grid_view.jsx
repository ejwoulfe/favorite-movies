import React from 'react';
import { useEffect } from 'react';
import './grid_view.scss';

function GridView(props) {

    useEffect(() => {
        console.log(props)
    })

    return (

        <div id="actors_grid_view">

            {props.actors.map((actor, i) => (
                <div key={i} className="actor_container_grid">

                    <img className="actor_image_grid" src={actor.image} alt={actor.name + " picture"}></img>


                    <div className="actor_information_grid">
                        <h2 className="actor_title_grid">{actor.name}</h2>
                        <div className="details_container_grid">
                        </div>

                    </div>
                </div>


            ))}

        </div>
    )
}
export default GridView;