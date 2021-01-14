import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
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
        <div id="list_view">


            {props.data.map((object, i) => (
                <Link onClick={() => handleClick()} key={"object_" + i} id="object_link" to={{ pathname: `/${object.type}_description/ + ${object.id}`, state: { object: object } }}>
                    <div className="object_container_list">


                        <img className="object_image_list" src={object.image} alt={object.name + " image"}></img>


                        <div className="object_information_list">
                            <h2 className="object_name_list">{object.name}</h2>
                            <div className="details_container_list">

                            </div>

                        </div>
                    </div>

                </Link>
            ))}

        </div>

    )
}
export default ListView;