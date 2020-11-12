import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';


function HomePage() {




    return (
        <>


            <div id="home_content">
                <Link id="movies_list_link" to="/movies_list">
                    <div id="movies_row" className="images_container">
                        <h1 className="images_row_title" >Movies</h1>
                    </div>
                </Link>

                <Link id="actors_list_link" to="/actors_list">
                    <div id="actors_row" className="images_container">
                        <h1 className="images_row_title" >Actors</h1>
                    </div>
                </Link>



            </div>



        </>




    );
}

export default HomePage;