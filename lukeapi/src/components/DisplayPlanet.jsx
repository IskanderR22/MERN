import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const DisplayPlanet = (props) => {


    const {id} = useParams(); // Deconstructing the variable we passed from the route. EX /:id

    useEffect(() => {axiosStarWars()}, [id]) // Calling on our axiosStarWars function to run every time the [id] changes
    const [planetInfo, setPlanetInfo] = useState([]); // Setting the state to the current planet object 
    const [notFound, setNotFound] = useState(false) // If the object is found the default is false, later we use a ternary to display an error

    const axiosStarWars = () => { // Creating the function to axios.get the API and pass in the current id from useParams();
        axios.get(`https://swapi.dev/api/planets/${id}`) // GET request
        .then( response =>{ // The response comes back and axios wraps it in .data
            setPlanetInfo(response.data);
            setNotFound(false); // Setting the notFound state to flase because we did find an object
        })
        .catch(err => setNotFound(true)); // If the object is not found with the GET API request change the setNotFound to TRUE
    }

    const content = ( // Creating a variable to hold out HTML 
        (notFound) ? // Ternary that will return different HTML based on if it is set to TRUE or FALSE, first case is if the Ternary is TRUE, display the error HTML
        <div> 
            <h1>These are not the droids you are looking for!</h1>
            <img src="https://www.giantbomb.com/a/uploads/original/0/6279/692288-obiwan_hood.jpg" alt="error" />
        </div>
        :
        <div>
            <h1>Planet Name:{planetInfo.name}</h1>
            <h1>Planet Climate: {planetInfo.climate}</h1>
            <h1>Planet Terrain:{planetInfo.terrain}</h1>
            <h1>Planet Suface Water:{planetInfo.surface_water}</h1>
            <h1>Population: {planetInfo.population}</h1>
        </div>
    )
    return (
        <fieldset>
            <legend>Display Planet</legend>
            {/* This is our return for the display component, which is set to the content const we created above! */}
                {content} 
        </fieldset>
    )
}

export default DisplayPlanet
