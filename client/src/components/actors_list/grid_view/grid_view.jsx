import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './grid_view.scss';

function GridView(props) {


    return (

        <div id="actors_grid_view">

            {props.actors.map((actor, i) => (
                <div key={"actor_" + i} className="actor_container_grid" >
                    <Link id="actors_desc_link" to={{ pathname: "/actor_description/" + actor._id, state: { actor: actor } }}>


                        <img className="actor_image_grid" src={actor.image} alt={actor.name + " picture"}></img>



                        <div className="actor_information_grid">
                            <h2 className="actor_title_grid">{actor.name}</h2>
                            <div className="details_container_grid">
                            </div>

                        </div>
                    </Link>
                </div>



            ))}

        </div>
    )
}
export default GridView;