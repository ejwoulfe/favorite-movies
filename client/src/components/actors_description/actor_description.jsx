import React from 'react';
import './actor_description.scss';


function ActorDescription(props) {

    return (
        <div id="actor_description_container">
            <h1>{props.location.state.actor.name}</h1>
        </div>
    )

}

export default ActorDescription;