import React, { useState } from 'react';
import { useEffect } from 'react';
import GridView from './grid_view/grid_view';
import ListView from './list_view/list_view';
import list_view_icon from '../../../Assets/UI Icons/list-view.svg';
import grid_view_icon from '../../../Assets/UI Icons/grid-view.svg';
import LoadingSpinner from '../../loading_spinner/loading_spinner';


function Views(props) {
    const [objectType, setObjectType] = useState(props.type);
    const [isGridView, setIsGridView] = useState(JSON.parse(sessionStorage.getItem(props.type + 'GridViewBoolean')) || false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {


        if (isGridView) {

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

    }, [isGridView]);

    useEffect(() => {
        /*
       *  Which ever view is selected, disable to corresponding button and reduce its opacity by 50%.
       *  The other button will maintain its 100% opacity, changes it occordingly based on the current view.
       */
        sessionStorage.setItem(objectType + 'GridViewBoolean', isGridView);


    }, [objectType, isGridView])


    useEffect(() => {

        if (props.data.length > 0) {
            setLoading(false);
            setObjectType(props.type);
        }


    }, [props]);


    function loadViews() {

        if (isGridView) {
            return (
                <GridView data={props.data} />
            )
        } else {
            return (
                <ListView data={props.data} />
            )
        }
    }

    return (
        <>
            <div id="display_options">
                <input onClick={() => setIsGridView(false)} className="view_buttons" id="list_view_button" type="image" src={list_view_icon} alt="List view button" />
                <input onClick={() => setIsGridView(true)} className="view_buttons" id="grid_view_button" type="image" src={grid_view_icon} alt="Grid view button" />
            </div>

            {loading ? <LoadingSpinner /> : loadViews()}
        </>

    )

}
export default Views;