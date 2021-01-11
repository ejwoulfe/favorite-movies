import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import './data_lists.scss';
import GridView from './grid_view/grid_view';
import list_view from '../../Assets/UI Icons/list-view.svg'
import grid_view from '../../Assets/UI Icons/grid-view.svg'



function ListComponent(props) {
    const [dataList, setDataList] = useState([]);
    const [gridView, setGridView] = useState(JSON.parse(sessionStorage.getItem('moviesGridViewBoolean')) || false);
    const [pathName] = useState(props.location.pathname);
    const [isMoviesPage, setIsMoviesPage] = useState(false);
    let dataObject = {};

    useEffect(() => {
        /*
        *  Which ever view is selected, disable to corresponding button and reduce its opacity by 50%.
        *  The other button will maintain its 100% opacity, changes it occordingly based on the current view.
        */

        sessionStorage.setItem('moviesGridViewBoolean', gridView);


        if (gridView) {
            document.getElementById("list_view_button").disabled = false;
            document.getElementById("list_view_button").style.opacity = "1";

            document.getElementById("grid_view_button").disabled = true;
            document.getElementById("grid_view_button").style.opacity = "0.5";

        } else {
            document.getElementById("grid_view_button").disabled = false;
            document.getElementById("grid_view_button").style.opacity = "1";

            document.getElementById("list_view_button").disabled = true;
            document.getElementById("list_view_button").style.opacity = "0.5";

        }

    }, [gridView])

    useEffect(() => {

        let underScoreIndex = pathName.indexOf("_");
        let dataName = pathName.substring(1, underScoreIndex);
        let fetchUrl = 'http://localhost:5000/' + dataName + '/api';

        axios({
            method: 'GET',
            url: fetchUrl
        }).then(res => {
            setDataList(res.data)

        })

        if (dataName === "movies") {
            setIsMoviesPage(true);
        } else {
            setIsMoviesPage(false);
        }

    }, [pathName]);


    return (

        <div id="data_list_content">
            <h1 id="data_list_title">{isMoviesPage ? "Movies" : "Actors"}</h1>
            <div id="display_options">
                <input onClick={() => { setGridView((gridView) => !gridView) }} className="view_buttons" id="list_view_button" type="image" src={list_view} alt="List view button" />
                <input onClick={() => { setGridView((gridView) => !gridView) }} className="view_buttons" id="grid_view_button" type="image" src={grid_view} alt="Grid view button" />
            </div>




            {/* Create Actor/Movie Object and pass it down through props to Description Component
            Movie: {
                name: movie.title,
                image: movie.poster,
                description: movie.description,
                array: movie.actors,
                subInfo: {
                    1: movie.rating,
                    2: movie.director,
                    3: movie.releaseDate,
                    4: movie.year
                }
            } 
            Actor: {
                name: actor.name,
                image: actor.image,
                description: actor.description,
                array: actor.movies,
                subInfo: {
                    1: actor.birth_year
                }
            }*/}

            if(isMoviesPage && gridView){
                <GridView movies={dataObject} />}
            else if(isMoviesPage && !gridView){<GridView movies={dataObject} />
            }    else if(!isMoviePage && gridView){
                <GridView actors={dataObject} />
            }else if(!isMoviePage && !gridView){
                <GridView actors={dataObject} />
            }



        </div >









    );
}

export default ListComponent;