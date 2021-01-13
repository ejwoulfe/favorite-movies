import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
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

        <div id="grid_view">


            {props.data.map((object, i) => (
                <Link onClick={() => handleClick()} key={"object_" + i} id="object_desc_link" to={{ pathname: `/${object.type}_description/ + ${object.id}`, state: { object: object } }}>
                    <div className="object_container_grid">


                        <img className="object_image_grid" src={object.image} alt={object.name + " image"}></img>


                        <div className="object_information_grid">
                            <h2 className="object_name_grid">{object.name}</h2>
                            <div className="details_container_grid">

                            </div>

                        </div>
                    </div>

                </Link>
            ))}

        </div>
    )
}
export default GridView;