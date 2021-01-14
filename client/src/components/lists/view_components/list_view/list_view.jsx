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
    function getKnownMovies(actor) {
        return (
            <div className="actor_known_movies">
                <h4 className="known_for_title">Known For:</h4>
                <div className="known_movie_container">
                    <img className="known_movie" src={actor.infoArr[0].poster} alt={actor.infoArr[0].title} />
                </div>
                <div className="known_movie_container">
                    <img className="known_movie" src={actor.infoArr[1].poster} alt={actor.infoArr[1].title} />
                </div>
                <div className="known_movie_container">
                    <img className="known_movie" src={actor.infoArr[2].poster} alt={actor.infoArr[2].title} />
                </div>
            </div>
        )


    }


    function actorListView(currentObject) {

        return (
            <div className="actor_container_list" >

                <div className="actor_image_container" style={{ backgroundImage: `url(${currentObject.image})` }} >
                </div>


                <div className="actor_information_list">

                    {getKnownMovies(currentObject)}

                    <div className="actor_name_container_list">
                        <h2 className="actor_name">{currentObject.name}</h2>
                    </div>
                    <div className="details_container_list">
                    </div>

                </div>
            </div>

        )

    }

    function movieListView(currentObject) {

        return (
            <div className="movie_container_list">
                <img className="movie_image_list" src={currentObject.image} alt={currentObject.name + " image"}></img>


                <div className="movie_information_list">
                    <h2 className="movie_name_list">{currentObject.name} </h2>
                </div>
            </div>
        )
    }



    return (
        <div id="list_view">


            {props.data.map((object, i) => (
                <Link onClick={() => handleClick()} key={"object_" + i} id="object_link" to={{ pathname: `/${object.type}_description/${object.id}`, object: object }}>

                    {object.type === 'actor' ? actorListView(object) : movieListView(object)}

                </Link>
            ))}

        </div>

    )
}
export default ListView;