import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import AirlineCard from "./AirlineCard";
import styled from "styled-components";

const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`;
const Header = styled.div``;
const Subheader = styled.div``;
const Grid = styled.div``;


function Airlines() {
    
    const [airlines, setairlines] = useState([]);

    useEffect(()=> {
        axios.get('/api/v1/airlines.json')
        .then(resp => {
            setairlines(resp.data.data)
        })
        .catch(resp => console.log(resp))
    },[airlines.length]);
    
    const grid = airlines.map(item => {
        return(
            <AirlineCard 
                key={item.attributes.name}
                attributes={item.attributes}
            />
        )
    })

    return (
    
        <Home>
            <div className="header"> 
                <h1>This is the Airlines#index view on React </h1>
            </div>
            <div className="subheader">
                <h2>Welcome to My Flights</h2>
            </div>
            <div className="grid">
                <ul>{grid}</ul>
            </div>
        </Home>
    );
}

export default Airlines;