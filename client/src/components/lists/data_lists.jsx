import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import './data_lists.scss';
import Views from './view_components/views';




function ListComponent(props) {
    const [dataList, setDataList] = useState([]);
    const [pathName] = useState(props.location.pathname);
    const [isMoviesPage, setIsMoviesPage] = useState(false);


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


            <Views data={dataList} />




        </div >









    );
}

export default ListComponent;