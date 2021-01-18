import React, { useEffect, useState } from 'react';
import axios from "axios";

function Description(props) {

    const [dataObject, setDataObject] = useState(props.location.object);

    useEffect(() => {
        if (dataObject === undefined) {

            let underScoreIndex = props.location.pathname.indexOf("_");
            let dataType = props.location.pathname.substring(1, underScoreIndex);

            let lastSlashIndex = props.location.pathname.lastIndexOf('/');
            let id = props.location.pathname.substring(lastSlashIndex + 1, props.location.pathname.length);


            let fetchUrl = `http://localhost:5000/${dataType}s/api/${id}`;

            axios({
                method: 'GET',
                url: fetchUrl
            }).then(res => {
                console.log(res.data)
                if (dataType === 'movie') {
                    setDataObject({
                        id: res.data._id,
                        name: res.data.title,
                        image: res.data.poster,
                        description: res.data.description,
                        infoArr: res.data.actors,
                        subInfo: [res.data.rating, res.data.director, res.data.year],
                        type: 'movie'
                    })
                } else {
                    setDataObject({
                        id: res.data._id,
                        name: res.data.name,
                        image: res.data.image,
                        description: res.data.description,
                        infoArr: res.data.movies,
                        subInfo: [res.data.birth_year],
                        type: 'actor'
                    })
                }

            })
        }
    }, [dataObject, props.location.pathname]);


    return (
        <div id="description_container">
            <h1>Description</h1>
            {dataObject !== undefined ? <h4>{dataObject.name}</h4> : <h4>YEP</h4>}
        </div>

    )



}

export default Description;