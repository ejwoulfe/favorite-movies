import React, { useEffect, useState } from 'react';
import axios from "axios";
import MovieDescription from './movie_description/movie_description';
import ActorDescription from './actor_description/actor_desctipion';

function Description(props) {

    const [dataObject, setDataObject] = useState(null);
    const [dataType, setDataType] = useState(props.location.pathname.substring(1, props.location.pathname.indexOf("_")));

    useEffect(() => {
        if (dataObject === null) {
            setDataType(props.location.pathname.substring(1, props.location.pathname.indexOf("_")));

            let lastSlashIndex = props.location.pathname.lastIndexOf('/');
            let id = props.location.pathname.substring(lastSlashIndex + 1, props.location.pathname.length);


            let fetchUrl = `http://localhost:5000/${dataType}s/api/${id}`;

            axios({
                method: 'GET',
                url: fetchUrl
            }).then(res => {
                if (dataType === 'movie') {
                    setDataObject(
                        res.data
                    )
                } else {
                    setDataObject(
                        res.data
                    )
                }

            })
        }
    }, [dataObject, dataType, props.location.pathname]);


    function loadComponent(dataObject) {
        if (dataType === 'movie') {
            return <MovieDescription movie={dataObject} />
        } else {
            return <ActorDescription actor={dataObject} />
        }

    }


    return (
        <div id="description_container">
            {dataObject !== null ? loadComponent(dataObject) : <h4>Loading</h4>}
        </div>

    )



}

export default Description;