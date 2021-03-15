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
            id: '',
            name: '',
            image: '',
            description: '',
            infoArr: [],
            subInfo: [],
            type: ''
        }

        dataObjectsArray = data.map((movie) => {

            dataObject = {};
            dataObject.id = movie._id;
            dataObject.name = movie.title;
            dataObject.image = movie.poster;
            dataObject.description = movie.description;
            dataObject.infoArr = movie.actors;
            dataObject.subInfo = [movie.rating, movie.director, movie.year]
            dataObject.type = 'movie';


            return dataObject;

        })

        return dataObjectsArray;

    }

    function createDataObjectsFromActors(data) {
        let dataObjectsArray = [];
        let dataObject = {
            id: '',
            name: '',
            image: '',
            description: '',
            infoArr: [],
            subInfo: [],
            type: ''
        }

        dataObjectsArray = data.map((actor) => {

            dataObject = {};
            dataObject.id = actor._id;
            dataObject.name = actor.name;
            dataObject.image = actor.image;
            dataObject.description = actor.description;
            dataObject.infoArr = actor.movies;
            dataObject.subInfo = [actor.birth_year];
            dataObject.type = 'actor';

            return dataObject;

        })

        return dataObjectsArray;

    }

    function sendObjectToView() {
        if (isMoviesPage) {
            return <Views data={createDataObjectsFromMovies(dataList)} type={'movie'} />

        } else {
            return <Views data={createDataObjectsFromActors(dataList)} type={'actor'} />
        }


    }





    return (

        <div id="data_list_content">
            <h1 id="data_list_title">{isMoviesPage ? "Movies" : "Actors"}</h1>

            {dataList.length > 0 ?
                sendObjectToView()
                :
                <h4>Loading</h4>}

        </div >









    );
}

export default ListComponent;