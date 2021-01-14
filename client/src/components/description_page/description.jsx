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
                        id: '',
                        name: '',
                        image: '',
                        description: '',
                        infoArr: [],
                        subInfo: [],
                        type: ''
                    })
                } else {
                    setDataObject({
                        id: '',
                        name: '',
                        image: '',
                        description: '',
                        infoArr: [],
                        subInfo: [],
                        type: ''
                    })
                }

            })
        }
    }, dataObject);


    return (
        <div id="description_container">
            <h1>Description</h1>
        </div>

    )



}

export default Description;