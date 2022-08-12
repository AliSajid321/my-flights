import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "./Header";

function Airline() {
    const [airline, setAirline] = useState({});
    const [review, setReview] = useState({});
    const [loaded, setLoaded] = useState(false);

    const {slug} = useParams();  
    

    useEffect(()=>{
        
        const url = `/api/v1/airlines/${slug}`;

        axios.get(url)
        .then(resp => {
            setAirline(resp.data);
            setLoaded(true);
            })
        .catch(resp => console.log(resp))
    },[]);
    
    return (
        <div className="wrapper">
            <div className="column">
                <Header 
                    attributes={airline.attributes.data}
                />
                <div className="review"></div>
            </div>
            <div className="column">
                <div className="review-form"></div>
            </div>
        </div>
    );
}

export default Airline;