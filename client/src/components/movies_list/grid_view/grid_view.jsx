import React from 'react';
import { useEffect } from 'react';

function GridView(props) {

    useEffect(() => {
        console.log(props)
    })

    return (

        < div >
            <h1>"HELLO!" GridView</h1>
        </div>
    )
}
export default GridView;