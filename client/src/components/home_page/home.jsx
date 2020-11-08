import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './home.scss';


function HomePage() {




    return (
        <>


            <div id="home_content">
                <h1 id="home_title">Explore</h1>

                <div id="movies_row" className="images_container">


                    <h1 className="images_row_title" >Movies</h1>
                </div>
                <div id="actors_row" className="images_container">
                    <h1 className="images_row_title" >Actors</h1>
                </div>

            </div>



        </>




    );
}

export default HomePage;