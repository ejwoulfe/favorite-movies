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

    useEffect(() => {

        if (dataList.length > 0 && isMoviesPage) {
            createDataObjectsFromMovies(dataList);

        } else if (dataList.lenght > 0 && !isMoviesPage) {
            createDataObjectsFromActors(dataList);
        }
    }, [dataList, isMoviesPage]);

    function createDataObjectsFromMovies(data) {
        let dataObjectsArray = [];
        let dataObject = {
            'name': '',
            'image': '',
            'description': '',
            'infoArr': [],
            'subInfo': []
        }

        dataObjectsArray = data.map((movie) => {

            dataObject = {};
            dataObject.name = movie.title;
            dataObject.image = movie.poster;
            dataObject.description = movie.description;
            dataObject.infoArr = movie.actors;
            dataObject.subInfo = [movie.rating, movie.director, movie.year]

            return dataObject;

        })

        return dataObjectsArray;

    }

    function createDataObjectsFromActors(data) {
        let dataObjectsArray = [];
        let dataObject = {
            'name': '',
            'image': '',
            'description': '',
            'infoArr': [],
            'subInfo': []
        }

        dataObjectsArray = data.map((actor) => {

            dataObject = {};
            dataObject.name = actor.name;
            dataObject.image = actor.image;
            dataObject.description = actor.description;
            dataObject.infoArr = actor.movies;
            dataObject.subInfo = [actor.birth_year]

            return dataObject;

        })

        return dataObjectsArray;

    }





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


            {isMoviesPage ? <Views data={createDataObjectsFromMovies(dataList)} /> : <Views data={createDataObjectsFromActors(dataList)} />}




        </div >









    );
}

export default ListComponent;