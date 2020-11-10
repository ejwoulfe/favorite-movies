import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import './movies_list.scss';
import list_view from '../../Assets/UI Icons/list-view.svg'
import grid_view from '../../Assets/UI Icons/grid-view.svg'
import GridView from './grid_view/grid_view';
import ListView from './list_view/list_view';


function MoviesList() {
    const [moviesList, setMoviesList] = useState([]);
    const [gridView, setGridView] = useState(false);

    // function formatDate(date) {
    //     let year = date.getFullYear();
    //     let month = date.getMonth() + 1;
    //     let dt = date.getDate();
    //     console.log(dt)

    //     if (dt < 10) {
    //         dt = '0' + dt;
    //     }
    //     if (month < 10) {
    //         month = '0' + month;
    //     }

    //     return (month + '/' + dt + '/' + year);


    // }
    useEffect(() => {




    }, [gridView])

    useEffect(() => {

        axios({
            method: 'GET',
            url: 'http://localhost:5000/movies/api'
        }).then(res => {
            setMoviesList(res.data)

        })
    }, []);

    return (
        <>
            <div id="movies_list_content">
                <h1 id="movies_list_title">Movies</h1>
                <div id="display_options">
                    <input className="view_buttons" id="list_view" type="image" src={list_view} alt="List view button" />
                    <input onClick={() => setGridView(!gridView)} className="view_buttons" id="grid_view" type="image" src={grid_view} alt="Grid view button" />
                </div>

                {gridView ? <GridView movies={moviesList} /> : <ListView movies={moviesList} />}
            </div>




        </>




    );
}

export default MoviesList;