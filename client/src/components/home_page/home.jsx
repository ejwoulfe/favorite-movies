import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';


function HomePage() {




    return (
        <>


            <div id="home_content">
                <h1 id="home_title">Explore</h1>
                <Link id="movies_list_link" to="/movies_list">
                    <div id="movies_row" className="images_container">
                        <h1 className="images_row_title" >Movies</h1>
                    </div>
                </Link>


                <div id="actors_row" className="images_container">
                    <h1 className="images_row_title" >Actors</h1>
                </div>

            </div>



        </>




    );
}

export default HomePage;